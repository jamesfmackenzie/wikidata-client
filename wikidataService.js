var GetItem = require("./get-item/getItem.js");
var GetParents = require("./get-parents/getParents.js");
var GetAncestors = require("./get-ancestors/getAncestors.js");

var WikidataService = function () {

};

WikidataService.prototype.getParents = new GetParents();
WikidataService.prototype.getItem = new GetItem();
WikidataService.prototype.getAncestors = new GetAncestors();

module.exports = WikidataService;