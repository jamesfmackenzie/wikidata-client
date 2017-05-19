var WikidataService = require("./wikidataService.js");

var wikidataService = new WikidataService();

wikidataService.getItem.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2));
});

wikidataService.getItem.bySparql(`
SELECT *
WHERE
{
	?x ?y ?z .
}
LIMIT 1
`,
    function (result) {
        console.log(JSON.stringify(result, null, 2));
    });

wikidataService.getParents.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2));
});

wikidataService.getAncestors.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2));
}, 1);