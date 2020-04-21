# Interoperabilitet, standarder och profiler

Sveriges specifikation för metadata heter DCAT-AP-SE och är en svensk anpassning (en så kallad profil) av den europeiska metadataspecifikationen DCAT-AP. DCAT-AP är i sin tur är en anpassning (profil) av den internationella rekommendationen DCAT som utges av W3C. DCAT-AP-SE och de metadataspecifikationer den bygger på uttrycks alla i metadataspråket RDF.

## Kort om RDF och länkade data
RDF är det språk som används för att uttrycka metadata om ting på webben. En central egenskap med RDF är att man använder webbadresser (URI:er) för att referera till ting i olika påståenden. En mängd påståenden kan samlas ihop och formera en graf som med fördel görs tillgänglig på den mest prominenta webbadressen som beskrivs i grafen. Då man kan peka ut andra webbadresser i grafen och dessa går att slå upp, t.ex. med hjälp av en webbläsare, kan man lätt nysta sig vidare eller rätt och slätt följa länkar. Att att använda RDF på detta sätt för att skapa en sammankopplad webb av data kallas länkade data. För den som är nyfiken finns mer att läsa i denna [vitbok på länkadedata.se](https://lankadedata.se/vitbok/).

## Klasser och egenskaper
En viktig princip med RDF ur ett standardiseringsperspektiv är att organisationer kan etablera klasser och egenskaper (uttryckta som ting med webadresser) som de noga definierar betydelsen av. När man har ett behov av att uttrycka metadata inom en viss domän bör man först försöka hitta om någon annan aktör redan definierat relevanta klasser och egenskaper innan man definierar egna.

En balansgång för standardiseringsorganisationer är att definiera sina klasser och egenskaper på ett sätt som både är specifikt nog för att täcka de behov som finns men samtidigt allmänt nog för att möjliggöra så bred användning som möjligt. För att ta ett exempel så definierade w3C egenskapen `dcat:contactPoint` så att den bara får användas på klassen `dcat:Dataset`. Detta hindrar denna tämligen användbara egenskap från att användas på t.ex. en organisation då man inte gärna vill att en organisation måste ses som en subklass av en datamängd. I den senaste versionen av DCAT har man lättat kravet på `dcat:contactPoint` genom att istället begränsa egenskapen till en mycket mer generell superklass.

## Kodlistor
En kodlista innefattar ett antal koder som typiskt man ska använda för en viss egenskap. En sådan kontrollerad lista av värden skapar förutsägbarhet och förenklar uttryck både för utvecklare och de som ska tillhandahålla informationen. Detta ska ses i kontrast mot fritext vilket naturligtvis ger mer flexibilitet och är nödvändigt för fält som titlar och beskrivningar men högst olämpligt för fält som status och teman. Kärt barn har många namn och kodlistor kallas ibland för värdeförråd, terminologier, vokabulärer eller taxonomier.

I RDF kan värdelistor uttryckas som instanser av domänspecifika klasser med ett antal tillhörande egenskaper som möjliggör uttryck av titel, definition och relationer till andra instanser. Detta kan upplevas som en aning bökigt då många värdelistor har liknande behov. För detta syfte har W3C introducerat standarden SKOS som möjliggör uttryck av värdelistor på ett domänoberoende sätt. Mer specifikt så introducerar SKOS klassen `skos:Concept` samt egenskaper för namngivning i form av `skos:prefLabel`, `skos:altLabel`, dokumentation genom `skos:definition`, `skos:note`, relationer genom `skos:broader`, `skos:relation` osv.

## Profiler
Att använda vad andra redan definierat är en viktig princip inte bara för implementatörer inom en viss domän utan även för standardiseringsorganisationer. Detta kan ske genom att man återanvänder en existerande klass med ett antal tillhörande egenskaper rakt av. Ett gott exempel på detta är hur `dcat:contactPoint` pekar ut ett vCard, dvs klassen `vcard:Kind` med egenskaper som `vcard:fn` och `vcard:hasAddress`. Ett annat scenario är att man väljer att blanda egenskaper på en nyintroducerad klass, t.ex. så används `dcterms:title` i kombination med `dcat:contactPoint` på klassen `dcat:Dataset`.

Ytterligare ett alternativ är att man subklassar via `rdfs:subclassOf`/`rdfs:subpropertyOf` för att man vill bygga vidare och förfina betydelsen inom en viss domän.

En `profil` är en dokumentation om hur man återanvänder, blandar och förfinar existerande klasser och egenskaper för ett visst syfte. Den Europeiska kommisionen har etablerat DCAT-AP som en profil av W3C rekommendationen DCAT som i sin tur är en profil som blandar DCTerms, ADMS, FOAF, VCard osv. Den svenska metadata specifikationen DCAT-AP-SE kan ses som en profil som i huvudsak förfinar DCAT-AP.

Att dokumentera en profil kan göras på flera sätt, den dominerande trenden är fortfarande att skriva dokumentation, precis så som är gjort för [DCAT-AP-SE](../sv). Men det finns även maskinella uttryck som t.ex. SHACL som i huvudsak kan validera om information uttryckts i enlighet med profilen. För DCAT-AP-SE har vi använt RDForms templates som förutom validering kan användas för att generera formulär för redigering, presentationsgränsnitt samt generera en specifikation så som är gjort för DCAT-AP-SE.

## Interoperabilitet mellan olika profiler

Interoperabilitet handlar om att förstå och behandla information på ett förväntat sätt. Då RDF i sin karaktär är orienterad kring individuella påståenden kan och bör implementatörer välja att ignorera egenskaper de inte förstår. I praktiken innebär det att om en profil B förfinar profil A kommer implementatörer av A förstå metadata som uttrycks i enlighet med profil B.

### Relationen till GeoDCAT-AP
GeoDCAT-AP är en profil av DCAT-AP som säger hur man bäst uttrycker datamängder med geografisk information.

GeoDCAT-AP är uppdelad i två versioner, Core och Extended. GeoDCAT-AP Core innefattar inga nya egenskaper utan är en ren förfining/förtydling av hur information ska uttryckas i DCAT-AP ur ett geodataperspektiv. GeoDCAT-AP Extended å andra sidan innefattar nya klasser och egenskaper som innebär en mer komplett mappning mot INSPIRE. Här introduceras också ett antal nya kodlistor.

Praktiskt innebär det att de som uttrycker sin metadata enligt GeoDCAT-AP Core kommer bli förstådd av de som implementerar DCAT-AP. Den som uttrycker information enligt GeoDCAT-AP Extended kommer också bli förstådd men viss geospecifik information kommer dock gå implementatörer av DCAT-AP förbi.

I och med att DCAT2 och mer specifikt DCAT-AP2.0.0 har mycket av de konstruktioner som introducerades i GeoDCAT-AP inkluderats i DCAT. Det innebär att behovet av GeoDCAT-AP är betydligt mindre idag, det återstår att se om och hur GeoDCAT-AP uppdateras för att reflektera detta.

### Relationen till StatDCAT-AP
StatDCAT-AP är en profil av DCAT-AP som säger hur man bäst uttrycker datamängder med statistisk information.

StatDCAT-AP lägger till nya egenskaper som handlar i huvudsak om att berätta om de dimensioner som datamängden behandlar. Uttrycket lånar en del från DataCube.

### Relation till BReg-DCAT-AP
BReg-DCAT-AP är en profil som syftar till att beskriva basregister (eng. base registries). Definitionen av ett basregister är inte helt enkel att formulera men från den profil som tagits fram kan man utläsa att det innefattar både datamängder, datatjänster men också *offentliga tjänster* (eng. public service). Ett exempel på en offentlig tjänst är skatteverkets deklarationstjänst som realiseras på minst tre sätt, som en digital tjänst, som möjligheten att skicka brev till skatteverket samt som en SMS tjänst. En annan stor del som BReg-DCAT-AP tagit sig an är att kunna beskriva vilka delar en datamängd består av, delarna har tidigare kallats data elements men i den senaste dokumentationen kallas de komponent specificeringar (eng. component specification).

För att åstadkomma allt detta bygger BReg-DCAT-AP profilen på DCAT-AP men inkluderar också stora delar av CPSV-AP samt DataCube. BReg-DCAT-AP togs fram under 2019 och första fasen avslutades med en profil som mognat betydligt men fortfarande har stämpeln utkast.
