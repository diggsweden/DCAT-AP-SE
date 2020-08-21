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
Orsaken till att vissa egenskaper är utelämänade ur den svenska profilen är att det gjorts en bedömning av att värdet / behovet av dessa ännu inte är så stort att det meriterar en inklusion. I några av fallen är en del av orsaken också att det fortfarande är oklart hur de ska uttryckas i detalj, ofta saknas en tydlig best practice. Se också ärende [37](https://github.com/DIGGSweden/DCAT-AP-SE/issues/37).

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

### Tillägg från W3C DCAT2
Det finns en mängd egenskaper i W3C DCAT2 på datatjänst nivån som inte har plockats in i DCAT-AP2.0.0. I följande tabell listar vi de egenskaper som lagts till i den svenska profilen. Alla tillägg är på datatjänst där vi försöker förutse ett användarfall där datatjänster beskrivs oberoende i större utsträckning, t.ex. för att kunna exponera en tjänstekatalog:

Egenskap | Kommentar
:--- | :--- 
dcterms:publisher | För oberoende datatjänster som inte är kopplade till en datamängd är det viktigt att kunna se vilken deras publisher är.  
dcat:contactPoint | Oberoende datatjänster behöver kunna ange en kontaktuppgift.
dcterms:type | Vi begränsar användningen till arkitekturstilarna REST och RPC då det är någorlunda enkelt och informativt att kategorisera datatjänster efter dessa.
dcterms:conformsTo | Det är viktigt att kunna indikera vilken specifikation som datatjänsten följer.
dcat:landingPage | Datatjänst kan precis som datamängd ha en egen landningssida.
foaf:page | Komplementärt till ett schema (som med fördel anges via dcat:endpointDescription) behövs ofta dokumentation, särskilt om det inte finns någon mer formell specifikation skriven.
dcat:theme | Vi använder samma kategorier som på datamängder.
dcat:keyword | Nyckelord kompletterar teman på samma sätt som på datamängder.

### Övriga tillägg
För att ange en eventuell avgift pekar man ut en [Avgift med hjälp av klassen schema:Offer](https://diggsweden.github.io/DCAT-AP-SE/sv/#schema%3AOffer) via schema:offers på datamängden. Avgiften kan innefatta både en beskrivning och en vidare pekning till en webbsida där mer information finns. 

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

## Ej bakåtkompatibla ändringar
Majoriteten av ändringarna som gjorts mellan versionerna innefattar ändring i kardinalitet eller tillägg av egenskaper och klasser. Det innebär att det endast är ett fåtal platser som är problematiska vid uppgradering.

1. Fält som blivit obligatoriska, dcterms:publisher på datamängdsnivån och dcterms:license på katalognivån. 
2. Egenskaper som ändrats, endast schema:startDate och schema:endDate som bytts ut mot dcat:startDate och dcat:endDate respektive.

**Observeration 1:** Sveriges dataportal kommer visa upp den information den kan lista ut även om 1 och 2 ovan inte åtgärdas. Detta beror på att Sveriges dataportal i dagsläget följer principen om att varna dataägare när information om datamängder eller kataloger är fel eller saknas snarare än att blockera deras information från att synas.

**Observation 2:** Att uppdatera till DCAT-AP2.0.0 ger möjlighet att beskriva sina datamängder på ett rikare sätt och bör inte endast involvera att åtgärda de ej bakåtkompatibla ändringarna.

## Bakgrund metadataspecifikationen

DCAT-AP-SE och är en svensk anpassning (en så kallad profil) av den europeiska metadataspecifikationen DCAT-AP. DCAT-AP är i sin tur är en anpassning (profil) av den internationella rekommendationen DCAT som utges av W3C.

Under hösten 2014 togs en första [nationell metadataspecifikation fram på uppdrag av VINNOVA](https://lankadedata.se/spec/DCAT-AP-SE/) vilken baserades på:
- [DCAT Application Profile for data portals in Europe Version 1.01](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/release/10) - stabil.
- [Data Catalog Vocabulary (DCAT) - W3C Recommendation 16 January 2014](https://www.w3.org/TR/vocab-dcat/) - stabil.

Under hösten och våren 2019-2020 har arbetsgruppen för DCAT-AP-SE 2.0.0 baserat tagit följande arbeten i beaktning:
- [DCAT Application Profile for data portals in Europe Version 1.2.1](https://joinup.ec.europa.eu/release/dcat-ap/121) - stabil.
- [Rekommendation och svensk anpassning av DCAT-AP - 2018-06-20, Riksarkivet/SIS](https://oppnadata.se/wp-content/uploads/2018/06/Bilaga_8_DCAT-AP1.1-Svensk-rekommendation.pdf) - stabil (*)
- [Major semantic release of DCAT-AP 2.0](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/news/dcat-ap-releases-2019) - stabil.
- [Data Catalog Vocabulary (DCAT) - Version 2, W3C Editor's Draft](https://w3c.github.io/dxwg/dcat/) - under utveckling.
- [D02.01 Draft specification BReg-DCAT-AP - 2019-07-01 Editor's Draft](https://joinup.ec.europa.eu/solution/abr-specification-registry-registries) - under utveckling.

(*) Driftsattes aldrig på registrera.oppnadata.se.

