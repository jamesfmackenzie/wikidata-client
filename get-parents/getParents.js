var request = require('request');
var _ = require('lodash');

var entityPrefix = "http://www.wikidata.org/entity/";

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    };
}

var GetParents = function () {

};

GetParents.prototype.byId = function (id, callback) {

    var requestUrl = getSparqlRequestUrl(id);

    // invoke request
    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {

            var json = (JSON.parse(body));

            var parents = getParents(json);
            var name = getName(json);

            callback({
                id: getIdWithPrefix(id),
                name: name,
                parents: parents
            });
        } else {
            callback(null);
        }
    });
};

function getName(json) {
    var labelProperty = "http://www.w3.org/2000/01/rdf-schema#label";
    var valueKey = "o";

    var labels = getPropertyValueOrLabel(labelProperty, valueKey, json);

    var enLabel = _.filter(labels, function (l) {
        return l['xml:lang'] == 'en';
    });

    if (enLabel && enLabel.length) {
        return enLabel[0].value;
    }

    return "";
}

function getParents(json) {
    return _.concat(getSubclassOf(json), getInstanceOf(json));
}

function getSubclassOf(json) {
    var subClassOfProperty = "http://www.wikidata.org/prop/direct/P279";

    return getPropertyValueAndLabel(subClassOfProperty, json);
}

function getInstanceOf(json) {
    var instanceOfProperty = "http://www.wikidata.org/prop/direct/P31";

    return getPropertyValueAndLabel(instanceOfProperty, json);
}

function getPropertyValueAndLabel(propertyKey, json) {
    var valueKey = "o";
    var labelKey = "oLabel";

    var ids = _.map(getPropertyValueOrLabel(propertyKey, valueKey, json), 'value');
    var names = _.map(getPropertyValueOrLabel(propertyKey, labelKey, json), 'value');

    var result = [];

    var i = 0;
    _.forEach(ids, function (id) {
        name = names[i];
        result.push({
            id: id,
            name: name
        });
        i++;
    });

    return result;
}

function getPropertyValueOrLabel(propertyKey, valueOrLabelKey, json) {

    var results = _.map((_.filter(json.results.bindings, function (r) {
        return r.p.value == propertyKey;
    })), valueOrLabelKey);

    if (results && results.length) {
        return results;
    } else {
        return [];
    }
}

function getSparqlRequestUrl(id) {
    var shortId = getIdWithoutPrefix(id);
    var requestTemplate = "https://query.wikidata.org/bigdata/namespace/wdq/sparql?query=PREFIX%20entity%3A%20%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0A%0Aselect%20%3Fp%20%3Fo%20%3FoLabel%20WHERE%20%7B%0A%20%20entity%3A{0}%20%3Fp%20%3Fo%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20.%0A%20%20%7D%0A%7D%0A%0A%0A&format=json";

    return requestTemplate.format(shortId);
}

function getIdWithPrefix(id) {
    return entityPrefix + getIdWithoutPrefix(id);
}

function getIdWithoutPrefix(id) {
    return id.replace(entityPrefix, "");
}

module.exports = GetParents;