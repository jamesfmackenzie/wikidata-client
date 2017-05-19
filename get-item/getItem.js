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

var GetItem = function () {

};

GetItem.prototype.bySparql = function (query, callback) {
    var requestUrl = getSparqlRequestUrlByQuery(query);
    doHttpGetAndDeserialize(requestUrl, callback);
}

GetItem.prototype.byId = function (id, callback) {
    var requestUrl = getSparqlRequestUrlById(id);
    doHttpGetAndDeserialize(requestUrl, callback);
};

function doHttpGetAndDeserialize(url, callback) {

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var obj = (JSON.parse(body));
            callback(obj);
        } else {
            callback(null);
        }
    });

}

function getSparqlRequestUrlByQuery(query) {
    var requestTemplate = "https://query.wikidata.org/bigdata/namespace/wdq/sparql?query={0}&format=json";
    var encodedQuery = encodeURIComponent(query);

    return requestTemplate.format(encodedQuery);
}

function getSparqlRequestUrlById(id) {
    var shortId = getIdWithoutPrefix(id);
    var requestTemplate = "https://query.wikidata.org/bigdata/namespace/wdq/sparql?query=PREFIX%20entity%3A%20%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%0A%0Aselect%20%3Fp%20%3Fo%20%3FoLabel%20WHERE%20%7B%0A%20%20entity%3A{0}%20%3Fp%20%3Fo%0A%20%20SERVICE%20wikibase%3Alabel%20%7B%0A%20%20%20%20bd%3AserviceParam%20wikibase%3Alanguage%20%22en%22%20.%0A%20%20%7D%0A%7D%0A%0A%0A&format=json";

    return requestTemplate.format(shortId);
}

function rfc3986EncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, escape);
}

function getIdWithPrefix(id) {
    return entityPrefix + getIdWithoutPrefix(id);
}

function getIdWithoutPrefix(id) {
    return id.replace(entityPrefix, "");
}

module.exports = GetItem;