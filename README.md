# Wikidata Client
Client to query the Wikidata API and SPARQL interface

# Usage Examples

```javascript
var WikidataService = require("./wikidataService.js");

var wikidataService = new WikidataService();

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

/*
{
  "head": {
    "vars": [
      "x",
      "y",
      "z"
    ]
  },
  "results": {
    "bindings": [
      {
        "x": {
          "type": "uri",
          "value": "http://wikiba.se/ontology#Dump"
        },
        "y": {
          "type": "uri",
          "value": "http://creativecommons.org/ns#license"
        },
        "z": {
          "type": "uri",
          "value": "http://creativecommons.org/publicdomain/zero/1.0/"
        }
      }
    ]
  }
}
*/

wikidataService.getParents.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2));
});

/*
{
  "id": "http://www.wikidata.org/entity/Q216995",
  "name": "Super Mario 64",
  "parents": [
    {
      "id": "http://www.wikidata.org/entity/Q7889",
      "name": "video game"
    }
  ]
}
*/

wikidataService.getAncestors.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2));
}, 1);

/*
{
  "id": "http://www.wikidata.org/entity/Q216995",
  "name": "Super Mario 64",
  "parents": [
    {
      "id": "http://www.wikidata.org/entity/Q7889",
      "name": "video game",
      "parents": [
        {
          "id": "http://www.wikidata.org/entity/Q166142",
          "name": "application"
        },
        {
          "id": "http://www.wikidata.org/entity/Q2249149",
          "name": "electronic game"
        }
      ]
    }
  ]
}
*/

wikidataService.getItem.byId("Q216995", function (result) {
    console.log(JSON.stringify(result, null, 2));
});

/*
{
  "head": {
    "vars": [
      "p",
      "o",
      "oLabel"
    ]
  },
  "results": {
    "bindings": [
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P577"
        },
        "o": {
          "datatype": "http://www.w3.org/2001/XMLSchema#dateTime",
          "type": "literal",
          "value": "1996-06-23T00:00:00Z"
        },
        "oLabel": {
          "type": "literal",
          "value": "1996-06-23T00:00:00Z"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P646"
        },
        "o": {
          "type": "literal",
          "value": "/m/0phl8"
        },
        "oLabel": {
          "type": "literal",
          "value": "/m/0phl8"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P725"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q703384"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Charles Martinet"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P725"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q19819882"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Leslie Swan"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P852"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q14864334"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Kids to Adults"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P853"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q14870285"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "A (All ages)"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P908"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q14915512"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "PEGI 3"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P914"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q14920387"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "USK 0"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P3417"
        },
        "o": {
          "type": "literal",
          "value": "Super-Mario-64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super-Mario-64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P345"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/q216995-B48EFDA3-7A60-4696-99F7-067F4BF01A7B"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/q216995-B48EFDA3-7A60-4696-99F7-067F4BF01A7B"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P400"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-4C297147-4CE7-44A9-B09A-01363D20F502"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-4C297147-4CE7-44A9-B09A-01363D20F502"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P404"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/q216995-9C85C20E-9395-45A3-A323-10C99E29723D"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/q216995-9C85C20E-9395-45A3-A323-10C99E29723D"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P435"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/q216995-1993793F-1031-4FF5-BABB-D44AA3E02860"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/q216995-1993793F-1031-4FF5-BABB-D44AA3E02860"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P479"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-CDE1E067-4408-47BA-A7EC-2F2345A194C4"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-CDE1E067-4408-47BA-A7EC-2F2345A194C4"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P577"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-DA307FED-9E0F-4D44-90D9-7E9124F1C6C2"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-DA307FED-9E0F-4D44-90D9-7E9124F1C6C2"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P646"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-EC91394F-8A89-4ECE-80A2-6B5218768540"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-EC91394F-8A89-4ECE-80A2-6B5218768540"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P725"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-76dd9b21-4cee-955b-4804-32cf82c24956"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-76dd9b21-4cee-955b-4804-32cf82c24956"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P725"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-f9caa486-49a4-41eb-bf6d-20f82f3a2ffe"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-f9caa486-49a4-41eb-bf6d-20f82f3a2ffe"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P852"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-DA2323B4-0B5C-4FD0-A4A4-D17C8BF3BBFA"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-DA2323B4-0B5C-4FD0-A4A4-D17C8BF3BBFA"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P853"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-8ED6172D-DF82-45B8-8EB5-C970AC98C394"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-8ED6172D-DF82-45B8-8EB5-C970AC98C394"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P908"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-20AFB893-2A71-4A9E-9CA3-BA061AEF4DC4"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-20AFB893-2A71-4A9E-9CA3-BA061AEF4DC4"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P914"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-72FAAE8F-2E4A-4868-800B-9021CDEB4732"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-72FAAE8F-2E4A-4868-800B-9021CDEB4732"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P3417"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-3C353C24-802A-4947-AEF5-C947BC58A42C"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-3C353C24-802A-4947-AEF5-C947BC58A42C"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://wikiba.se/ontology#sitelinks"
        },
        "o": {
          "datatype": "http://www.w3.org/2001/XMLSchema#integer",
          "type": "literal",
          "value": "31"
        },
        "oLabel": {
          "type": "literal",
          "value": "31"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://wikiba.se/ontology#statements"
        },
        "o": {
          "datatype": "http://www.w3.org/2001/XMLSchema#integer",
          "type": "literal",
          "value": "22"
        },
        "oLabel": {
          "type": "literal",
          "value": "22"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/version"
        },
        "o": {
          "datatype": "http://www.w3.org/2001/XMLSchema#integer",
          "type": "literal",
          "value": "470735529"
        },
        "oLabel": {
          "type": "literal",
          "value": "470735529"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/dateModified"
        },
        "o": {
          "datatype": "http://www.w3.org/2001/XMLSchema#dateTime",
          "type": "literal",
          "value": "2017-03-27T17:00:09Z"
        },
        "oLabel": {
          "type": "literal",
          "value": "2017-03-27T17:00:09Z"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/description"
        },
        "o": {
          "xml:lang": "de",
          "type": "literal",
          "value": "Computerspiel"
        },
        "oLabel": {
          "type": "literal",
          "value": "Computerspiel"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/description"
        },
        "o": {
          "xml:lang": "en",
          "type": "literal",
          "value": "video game"
        },
        "oLabel": {
          "type": "literal",
          "value": "video game"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/description"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "jeu vid├®o de 1996"
        },
        "oLabel": {
          "type": "literal",
          "value": "jeu vid├®o de 1996"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/description"
        },
        "o": {
          "xml:lang": "it",
          "type": "literal",
          "value": "videogioco del 1996"
        },
        "oLabel": {
          "type": "literal",
          "value": "videogioco del 1996"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://schema.org/description"
        },
        "o": {
          "xml:lang": "nl",
          "type": "literal",
          "value": "computerspel van Nintendo EAD"
        },
        "oLabel": {
          "type": "literal",
          "value": "computerspel van Nintendo EAD"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "ar",
          "type": "literal",
          "value": "Ï│┘êÏ¿Ï▒ ┘àÏºÏ▒┘è┘ê 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Ï│┘êÏ¿Ï▒ ┘àÏºÏ▒┘è┘ê 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "ca",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "da",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "de",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "el",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "es",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "et",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "fa",
          "type": "literal",
          "value": "Ï│┘ê┘¥Ï▒ ┘àÏºÏ▒█î┘ê █Â█┤"
        },
        "oLabel": {
          "type": "literal",
          "value": "Ï│┘ê┘¥Ï▒ ┘àÏºÏ▒█î┘ê █Â█┤"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "fi",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "he",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "hu",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "id",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "it",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "ja",
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "ko",
          "type": "literal",
          "value": "ýèêÝì╝ ÙºêÙª¼ýÿñ 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ýèêÝì╝ ÙºêÙª¼ýÿñ 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "la",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "nan",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "nb",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "nl",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "nn",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "pl",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "pt",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "ro",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "ru",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "sv",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "th",
          "type": "literal",
          "value": "Ó©ïÓ©╣Ó╣ÇÓ©øÓ©¡Ó©úÓ╣îÓ©íÓ©▓Ó©úÓ©┤Ó╣éÓ©¡ 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Ó©ïÓ©╣Ó╣ÇÓ©øÓ©¡Ó©úÓ╣îÓ©íÓ©▓Ó©úÓ©┤Ó╣éÓ©¡ 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "uk",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh-cn",
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh-hans",
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh-hant",
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh-hk",
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh-sg",
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2000/01/rdf-schema#label"
        },
        "o": {
          "xml:lang": "zh-tw",
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®µ¡É64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ar",
          "type": "literal",
          "value": "Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ar",
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ca",
          "type": "literal",
          "value": "Super Mario FX"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario FX"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "da",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "de",
          "type": "literal",
          "value": "Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "de",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "en",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "es",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fi",
          "type": "literal",
          "value": "Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Shind┼ì Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Shind┼ì Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Shindou Super Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Shindou Super Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "S┼½p─ü Mario Rokuj┼½yon"
        },
        "oLabel": {
          "type": "literal",
          "value": "S┼½p─ü Mario Rokuj┼½yon"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "S┼½p─ü Mario Rokuj┼½yon Shind┼ì Pakku Tai┼ì B─üjon"
        },
        "oLabel": {
          "type": "literal",
          "value": "S┼½p─ü Mario Rokuj┼½yon Shind┼ì Pakku Tai┼ì B─üjon"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Super Mario 64 Rumble Pak Support Version"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64 Rumble Pak Support Version"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Super Mario 64 Shindou Edition"
        },
        "oLabel": {
          "type": "literal",
          "value": "Super Mario 64 Shindou Edition"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "fr",
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64 µî»ÕïòÒâæÒââÒé»Õ»¥Õ┐£ÒâÉÒâ╝Òé©ÒâºÒâ│"
        },
        "oLabel": {
          "type": "literal",
          "value": "Òé╣Òâ╝ÒâæÒâ╝Òâ×Òâ¬Òé¬64 µî»ÕïòÒâæÒââÒé»Õ»¥Õ┐£ÒâÉÒâ╝Òé©ÒâºÒâ│"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ja",
          "type": "literal",
          "value": "Òâ×Òâ¬Òé¬64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Òâ×Òâ¬Òé¬64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ko",
          "type": "literal",
          "value": "ýèêÝì╝ ÙºêÙª¼ýÿñ64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ýèêÝì╝ ÙºêÙª¼ýÿñ64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ko",
          "type": "literal",
          "value": "ýèêÝì╝ÙºêÙª¼ýÿñ 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ýèêÝì╝ÙºêÙª¼ýÿñ 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "ko",
          "type": "literal",
          "value": "ýèêÝì╝ÙºêÙª¼ýÿñ64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ýèêÝì╝ÙºêÙª¼ýÿñ64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "nb",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "nl",
          "type": "literal",
          "value": "Mario 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "Mario 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "nl",
          "type": "literal",
          "value": "SM 64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "nl",
          "type": "literal",
          "value": "SM64"
        },
        "oLabel": {
          "type": "literal",
          "value": "SM64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "pt",
          "type": "literal",
          "value": "Wing Cap"
        },
        "oLabel": {
          "type": "literal",
          "value": "Wing Cap"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "þÑ×µ©©Ú®¼Õèøµ¼º"
        },
        "oLabel": {
          "type": "literal",
          "value": "þÑ×µ©©Ú®¼Õèøµ¼º"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬õ┐Éµ¡É64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬õ┐Éµ¡É64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®ÕÑº64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ┤Üþæ¬Õê®ÕÑº64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "ÞÂàþ║ºþÄøõ┐Éµ¼º64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ║ºþÄøõ┐Éµ¼º64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼Õèøµ¼º64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼Õèøµ¼º64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.w3.org/2004/02/skos/core#altLabel"
        },
        "o": {
          "xml:lang": "zh",
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        },
        "oLabel": {
          "type": "literal",
          "value": "ÞÂàþ║ºÚ®¼ÚçîÕÑÑ64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P31"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q7889"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "video game"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P57"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q12382"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Shigeru Miyamoto"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P86"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q356782"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Koji Kondo"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P123"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q8093"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Nintendo"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P136"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q828322"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "platform game"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P178"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q170420"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Nintendo Entertainment Analysis & Development"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P179"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q4802838"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Super Mario"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P227"
        },
        "o": {
          "type": "literal",
          "value": "4525193-9"
        },
        "oLabel": {
          "type": "literal",
          "value": "4525193-9"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P31"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/q216995-650FC54E-EEE3-4D05-9571-A7F8D0426E4C"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/q216995-650FC54E-EEE3-4D05-9571-A7F8D0426E4C"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P57"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-8F898DB5-20A5-4FEE-9F8C-7E48FDD17256"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-8F898DB5-20A5-4FEE-9F8C-7E48FDD17256"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P86"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-D72B713C-F867-4256-BD6B-70B9722C8E6C"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-D72B713C-F867-4256-BD6B-70B9722C8E6C"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P123"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-CCDA43D5-2E31-426A-BAF4-63B3CD2CE53D"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-CCDA43D5-2E31-426A-BAF4-63B3CD2CE53D"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P136"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-A1C1C65C-DA62-492E-A860-454E4882666D"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-A1C1C65C-DA62-492E-A860-454E4882666D"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P178"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-18232743-0D10-4A58-AEEC-80CB11A9E708"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-18232743-0D10-4A58-AEEC-80CB11A9E708"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P179"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/q216995-62ACA91D-653C-4A5E-B3E7-0BEC1C5F0CFE"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/q216995-62ACA91D-653C-4A5E-B3E7-0BEC1C5F0CFE"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/P227"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/statement/Q216995-A54AFD7E-8DCE-42C1-9E6D-4A8CF4D99364"
        },
        "oLabel": {
          "type": "literal",
          "value": "statement/Q216995-A54AFD7E-8DCE-42C1-9E6D-4A8CF4D99364"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P345"
        },
        "o": {
          "type": "literal",
          "value": "tt0204657"
        },
        "oLabel": {
          "type": "literal",
          "value": "tt0204657"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P400"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q184839"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "Nintendo 64"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P404"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q208850"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "single-player video game"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P435"
        },
        "o": {
          "type": "literal",
          "value": "d7220f8f-8eb6-42ab-9cde-17a0efc480ca"
        },
        "oLabel": {
          "type": "literal",
          "value": "d7220f8f-8eb6-42ab-9cde-17a0efc480ca"
        }
      },
      {
        "p": {
          "type": "uri",
          "value": "http://www.wikidata.org/prop/direct/P479"
        },
        "o": {
          "type": "uri",
          "value": "http://www.wikidata.org/entity/Q273140"
        },
        "oLabel": {
          "xml:lang": "en",
          "type": "literal",
          "value": "gamepad"
        }
      }
    ]
  }
}
*/
```
