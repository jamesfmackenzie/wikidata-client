var GetParents = require("../get-parents/getParents.js");
var getParents = new GetParents();
var async = require("async");
var _ = require("lodash");

var maxDepth;
var retrievedItems = [];
var q = async.queue(getParents.byId, 1);

var GetAncestors = function () {

};

GetAncestors.prototype.byId = function (id, callback, maxDepthParam) {

    maxDepth = maxDepthParam;

    var rootItem = {};

    q.drain = function () {
        callback(rootItem);
    };

    getParents.byId(id, function (p) {
        rootItem = p;
        getAncestors(rootItem, 0);
    });
};

function getAncestors(item, depth) {

    if (maxDepth && depth >= maxDepth) {
        return;
    }

    // shallow copy
    var parents = JSON.parse(JSON.stringify(item.parents));
    item.parents = [];

    _.forEach(parents, function (p) {
        if (retrievedItems.indexOf(p.id) > -1) {
            item.parents.push(p);
        } else {

            retrievedItems.push(p.id);
            q.push(p.id, function (result) {
                item.parents.push(result);
                getAncestors(result, depth + 1);
            });
        }
    });
}

module.exports = GetAncestors;