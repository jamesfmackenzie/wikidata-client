/*global describe, it, expect, jasmine */

describe("GetParents", function () {
    var GetParents = require("./getParents.js");
    var getParents = new GetParents();

    var expectedName = "Super Mario 64 DS";
    var expectedParents = [{
        id: 'http://www.wikidata.org/entity/Q7889',
        name: 'video game'
    }];


    describe("known Wikidata id without prefix", function () {
        var knownWikidataId = "Q1142888";

        it("returns expected name", function (done) {
            // arrange

            // act
            getParents.byId(knownWikidataId, function (result) {

                // assert
                expect(result.name).toBe(expectedName);
                done();
            });
        });

        it("returns expected parents", function (done) {
            // arrange

            // act
            getParents.byId(knownWikidataId, function (result) {

                // assert
                expect(result.parents).toEqual(expectedParents);
                done();
            });
        });

    });

    describe("known Wikidata id with prefix", function () {

        var knownWikidataId = "http://www.wikidata.org/entity/Q1142888";

        it("returns expected names", function (done) {
            // arrange

            // act
            getParents.byId(knownWikidataId, function (result) {

                // assert
                expect(result.name).toBe(expectedName);
                done();
            });
        });

        it("returns expected parentss", function (done) {
            // arrange

            // act
            getParents.byId(knownWikidataId, function (result) {

                // assert
                expect(result.parents).toEqual(expectedParents);
                done();
            });
        });
    });
});