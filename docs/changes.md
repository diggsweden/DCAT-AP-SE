# Avvikelser och ändringshistorik mot andra versioner av DCAT-AP

Nedan redovisar vi först avvikelser i den svenska profilen mot DCAT-AP2.0.0.
Vi delar in ändringar som handlar om kardinalitet, utelämnade delar, tillägg samt förtydlingar. Därefter redovisar vi i korthet vad som ändrats sedan den tidigare versionen av den svenska profilen.

## Avvikelser från DCAT-AP-2.0.0 i den svenska profilen

### Kardinalitetsändringar
Med ändringar i kardinalitet menar vi typiskt byte från rekommenderat till obligatoriskt, från valfritt till rekommenderat osv.
I tabellen nedan har vi förkortat obligatoriskt till O, rekommenderat till R och valfritt till V. Om ändringen motsvarar ett ärende som diskuterats utförligare finns dess ärendenummer refererat.

Egenskap | Klass | Nu | Tidigare | Ärende
:--- | :--- | :--- | :--- | :---
dct:publisher | Datamängd | O | R | 16
dcterms:accessRights | Datamängd | R | V | 11
dcterms:accessRights | Datatjänst | R | V | 11
dct:issued | Datamängd | R | V | 9
dct:license | Katalog | O | R | ?


### Utelämnade egenskaper
Punkterna nedan berättar om olika egenskaper som vi valt att inte ta med i den svenska profilen. Observera att detta inte betyder att det är förbjudet att använda dessa egenskaper. Utelämnade egenskaper som tillhandahålls av en aktör kommer ändå skördas in och skickas vidare till Europeiska dataportalen, men, de kommer inte visas upp på dataportalen.
Orsaken till att vissa egenskaper är utelämänade ur den svenska profilen är att det gjorts en bedömning av att värdet / behovet av dessa ännu inte är så stort att det meriterar en inklusion. I några av fallen är en del av orsaken också att det fortfarande är oklart hur de ska uttryckas i detalj, ofta saknas en tydlig best practise. Se också ärende [37](https://github.com/DIGGSweden/DCAT-AP-SE/issues/37).

Egenskap | Klass | Ändring
:--- | :--- | :---
dcat:mediaType | Distribution | Använd enbart dcterms:format
time:hasBeginning | Tidsperiod | dcat:startDate är nog
time:hasEnd | Tidsperiod | dcat:endDate är nog
odrl:hasPolicy | Distribution | Komplex, oklart uttryck och brist på behov
prov:wasGeneratedBy | Dataset | Komplex, oklart uttryck och brist på behov
dcterms:creator | Katalog | Brist på behov
dcat:compressFormat | Distribution | Brist på behov
dcat:packageFormat | Distribution | Oklart om rätt väg framåt, går att lösa genom e.g. text/csv+zip
dcterms:type | License | Olämpligt att detta uttrycks i varje katalog för etablerade licenser

### Utelämnade klasser
Den svenska profilen inkluderar inte dcat:CatalogRecord. Till skillnad från egenskaperna listade ovan är det inte tillåtet att använda dcat:CatalogRecord i dagsläget då det inte skulle fungera med den nuvarande skördningsinfrastrukturen och hur portalen är byggd. Detta kan komma att förändras i framtiden om det dyker upp tydliga användarfall som kräver stöd för dcat:CatalogRecord.

### Tillägg
För att ange en eventuell avgift pekar man ut en [Avgift med hjälp av klassen schema:Offer](https://diggsweden.github.io/DCAT-AP-SE/sv/#schema%3AOffer) via schema:offers på datamängden. Avgiften kan innefatta både en beskrivning och en vidare pekning till en webbsida där mer information finns. 
Den svenska profilen har också lagt till dcterms:type på Datatjänst med fördefinierade värdena från Inspire tillsammans med ett antal wikidata entiteter motsvarande vanliga tjänstetyper. Notera att dcterms:type finns med i W3C DCAT2 men har inte plockats in i DCAT-AP2.0.0. På liknande sätt har också dcterms:conformsTo på Datatjänst då den också finns i W3C DCAT2.

### Förtydlingar
* Licensen på katalognivån måste vara CC-0.
* Användning av [en delmängd av Inspires roller](https://diggsweden.github.io/DCAT-AP-SE/sv/#5.13) vid prov:qualifiedAttribution (range för dcat:role på prov:QualifiedAttribtion klassen). Roller som motsvarar dct:publisher, dct:creator eller dcat:contactPoint bör inte användas.

## Ändringar mellan DCAT-AP-1.2.1 och DCAT-AP-2.0.0
För en detaljerad förteckning hänvisas läsaren till Annex II i [DCAT-AP-2.0.0 specifikationen](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/release/200).
Notera att en del av ändringarna som listas handlar om förtydlingar. I vissa fall har vi i den Svenska anpassningen redan tolkat på det sättet och därmed innebär det ingen ändring. T.ex. det är nu tydligjort att dct:language på distributionen ska ha samma range som när den används på datamängder, så var det redan innan i den svenska tolkningen.

Nedan följer i stora drag de ändringar som gjorts i DCAT-AP-2.0.0 och också införts i DCAT-AP-SE:

* Introducerat datatjänster och sammankopplande relationer till Datamängd, Distribution och Katalog.
* Möjligt att skapa kvalificerade relationer till andra resurser via dcat:QualifiedRelation klassen där man kan ange en roll.
* Möjligt att peka ut aktörer i olika roller, tidigare fanns bara det som nu kallas utgivare (dcterms:publisher). Nu finns även producent (dcterms:creator) och en mängd andra roller via prov:qualifiedAttribution med en roll angiven (delmängd av Inspire som vi föreslagit i den svenska profilen).
* Tillgänglighet för en datamängd kan anges (dcat:availability).
* Uttrycket för tidsperiod använder nu dcat:startDate och dcat:endDate istället för schema:startDate och schema:endDate.