# SPARQL endpoint

En SPARQL endpoint med portalens samtliga DCAT-AP metadata tillhandahålls på följande URL:

```
https://admin.dataportal.se/sparql
```

SPARQL queries kan skickas antingen direkt via HTTP eller via ett grafiskt gränssnitt som t.ex. [YASGUI](https://yasgui.org/).

## Exempel: YASGUI

Använd denna länk för att få ett query-formulär och en resultattabell med [alla organisationer som publicerar metadata på dataportal.se](https://yasgui.org/#query=SELECT+DISTINCT+%3Fpublisher+%3Furi+WHERE+%7B%0A++%5B%5D+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2Fpublisher%3E+%3Furi+.%0A++%3Furi+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2Fname%3E+%3Fpublisher%0A%7D+LIMIT+1000&contentTypeConstruct=text%2Fturtle&contentTypeSelect=application%2Fsparql-results%2Bjson&endpoint=https%3A%2F%2Fadmin.dataportal.se%2Fsparql&requestMethod=POST&tabTitle=Query&headers=%7B%7D&outputFormat=table).

## Exempel: HTTP-anrop med curl

Använd följande kommando för att skicka en query via HTTP:

```
curl -X POST -H 'Accept: application/sparql-results+json' --data-urlencode 'query=SELECT DISTINCT ?publisher ?uri WHERE { [] <http://purl.org/dc/terms/publisher> ?uri . ?uri <http://xmlns.com/foaf/0.1/name> ?publisher } LIMIT 1000' 'https://admin.dataportal.se/sparql'
```
