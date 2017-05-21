var WikidataService = require("./wikidataService.js");

var wikidataService = new WikidataService();

wikidataService.getItem.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2)); // eslint-disable-line no-console
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
        console.log(JSON.stringify(result, null, 2)); // eslint-disable-line no-console
    });

wikidataService.getParents.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2)); // eslint-disable-line no-console
});

wikidataService.getAncestors.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2)); // eslint-disable-line no-console
}, 1);