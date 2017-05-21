/*global describe, it, expect */

var _ = require("lodash");

describe("GetItem", function () {

    var GetItem = require("./getItem.js");
    var getItem = new GetItem();

    describe("byId", function () {
        describe("known item id", function () {
            var knownId = "Q216995";

            it("returns expected result", function (done) {
                getItem.byId(knownId, function (result) {
                    expect(getName(result)).toEqual("Super Mario 64");
                    done();
                });
            });
        });
    });

    describe("bySparql", function () {
        describe("known Sparql query", function () {
            var knownSparqlQuery =
                `SELECT DISTINCT ?game ?gameLabel WHERE
                {
                ?game wdt:P31/wdt:P279* wd:Q7889 .  # find instances of subclasses of video game
                SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
                }
                LIMIT 10`;

            it("returns expected result", function (done) {
                getItem.bySparql(knownSparqlQuery, function (result) {
                    expect(result).toBeDefined();
                    expect(result.results).toBeDefined();
                    expect(result.results.bindings).toBeDefined();

                    var games = result.results.bindings;
                    var gameLabels = _.map(games, "gameLabel.value");

                    expect(gameLabels).toContain("Civilization III");
                    done();
                });
            });
        });
    });
});

function getName(json) {
    var labelProperty = "http://www.w3.org/2000/01/rdf-schema#label";
    var valueKey = "o";

    var labels = getPropertyValueOrLabel(labelProperty, valueKey, json);

    var enLabel = _.filter(labels, function (l) {
        return l["xml:lang"] == "en";
    });

    if (enLabel && enLabel.length) {
        return enLabel[0].value;
    }

    return "";
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