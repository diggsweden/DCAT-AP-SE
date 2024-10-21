# Skördning av DCAT-AP-SE till Sveriges dataportal

Nedan beskrivs under vilka villkor Sveriges dataportal kan skörda en förteckning
av datamängder uttryckt i DCAT-AP-SE. Härefter kommer vi kalla [Sveriges dataportal](https://www.dataportal.se/)
för "portalen" och en förteckningen av datamängder uttryckt i DCAT-AP-SE för en "katalog".
I anslutning till portalen finns ett administrativt gränsnitt på [admin.dataportal.se](https://admin.dataportal.se/start) 
som riktar sig till utvecklare och katalogansvariga, härefter kommer vi referera till detta gränsnitt som "Admin".

Under 2020 har Nationella plattformen för öppna data och PSI (oppnadata.se) ersatts  Sveriges dataportal, [dataportal.se](https://dataportal.se). Det är viktigt att notera dock att båda gränssnitten slår mot samma API som tillhandahålls av Admin. Dvs. för dataleverantörer är det inget som ändras, man behöver inte registrera sina datamängder mer än en gång. 

Nedan går vi igenom skördningsmekanismen samt också ett antal principer som man måste följa kring val av identifierare
och hur man uttrycker utgivande organisationer. Sist i dokumentet finns principer man ska följa om man vill leverera mer än 
en katalog per skördad organisation.

## Leveransmetoder

1. Om organisationen har en egen lokal källa i form av t.ex. en metadatakatalog eller en RDF-fil, se [hur du registrerar din katalog på admin.dataportal.se](https://docs.dataportal.se/registry/start/)
2. Om organisationen vill skapa en lokal källa på den delade metadatakatalogen kontaktas [info@digg.se](mailto:info@digg.se), förbered med max två e-postadresser per organisation för registrering. Se dokumentation om [delad katalog](https://docs.dataportal.se/catalog/).
3. Via en samkatalog (med flera dataproducenter) som redan är ansluten till Sveriges dataportal (t.ex. Geodataportalen, Statistikdatabasen, SUSA-navet).

Leveransmetod 1 och 2 går inte att kombinera men båda dessa går att kombinera med leveransmetod 3.

## Skördningsmekanism

För att skördning ska lyckas måste man:

1. Stödja rätt protokoll.
2. Levera i rätt format.
3. Följa den föreskrivna metadataprofilen [DCAT-AP-SE](https://docs.dataportal.se/dcat/sv/).

### Protokoll
Skördning sker via endera HTTP eller HTTPS protokollen. Portalen skördar genom att ladda från en enskild angiven webbadress.
Vid behov kan man använda HTTP redirects med en av följande statuskoder: 301, 303, 307 och 308.

### Format
Portalen förväntar sig att kataloger uttrycks som [RDF](https://www.w3.org/RDF/) i syntaxen 
[RDF/XML](https://www.w3.org/TR/rdf-syntax-grammar/).
Observera att RDF kräver att alla IRI:er (vilket inkluderar vanliga webbadresser) måste följa 
[RFC3987](https://www.ietf.org/rfc/rfc3987.txt).
Detta innebär bland annat att en mängd specifika tecken måste enkodas, t.ex. mellanslag.

Portalen kräver att alla IRI:er är absoluta i kataloguttrycket (detta innebär typiskt att de börjar med http:// eller https://).

För den som är osäker på om man producerat korrekt RDF så kan man använda [W3C's RDF validator](https://www.w3.org/RDF/Validator/). 
Observera att den dock inte kollar om IRI:er är absoluta eller inte.
Man kan också använda [verktygslådan](https://sandbox.admin.dataportal.se/toolkit/cataloge) på Admin för att få mer detaljerad återkoppling kring framförallt hur väl man uppfyller DCAT-AP-SE.

### Skördningstid
Skördning sker en gång per dygn, oftast vid ca. 4 på morgonen. Utöver det kan den som ansvarar för en katalog tvinga fram
ytterligare skördningar närhelst så passar. Detta sker på Admin. Efter att man tvingat fram en omskördning
sker skördningen normalt inom 10 minuter.

### Registrera skördning
I Sverige har vi valt att förregistrera alla offentliga aktörer, man kan enkelt kolla om man är
[förregistrerad på registrera](https://admin.dataportal.se/status/reports).
Förregistrerade aktörer har en angiven skördningskälla på formen:
```
http://<organisation>.se/datasets/dcat
```
Offentliga aktörer ska därmed inte registrera sig på nytt utan endast vid behov ändra skördningskällan. Privata aktörer
är dock aldrig förregistrerade utan måste skapa en användare explicit.

### Hantering av identifierare
En princip hos dataportalen är att varje datamängd (och även andra entiteter) måste ha en URI som sätts av den utgivande organisationen. Denna URI bevaras av skördningsprocessen och finns kvar i metadatan. Utöver datamängdens URI behöver dataportalen ha en egen adress till en metadatapost där datamängdens metadata förvaltas. Detta för att man behöver kunna ladda metadata om en datamängd (och andra entiteter) från admin.dataportal.se via ett REST API. Det skapas också en landningssida för varje datamängd som har en annan men snarlik webbadress (URI).

Notera att i DCAT-AP-SE finns det också en möjlighet att [uttrycka en identifierare](https://docs.dataportal.se/dcat/sv/#dcat_Dataset-dcterms_identifier) för datamängden. Denna identifierare är frivillig och inte samma sak som datamängdens URI (som istället förekommer i subjektposition i tripplarna i RDF grafen). I dagsläget används inte identifieraren i skördningsprocessen, så den kan sättas till vad som helst. Dock är det en rekommendation, för att ta hänsyn till framtida förbättringar i skördninsprocessen, att om man sätter identifierare för sina datamängder så bör de vara unika inom varje datakatalog.

**Sammanfattningsvis:**

1. Varje datamängd måste ha en unik URI.
2. En datamängd kan ha en identifierare, men den används inte idag av skördningsprocessen.
3. Det skapas en metadatapost på dataportalen för varje datamängd (och andra entiteter).
4. Varje metadatapost har en URI som bildas som en kombination av en identifierare för katalogen och en identifierare för datamängden (ett genererat löpnummer, en eventuell identifierare på datamängden används inte i dagsläget).
5. I metadataposten finns den ursprungliga URI:n för datamängden bevarad.

#### Exempel

Datalevernatör | Värde 
:--- | :---
Datamängdens titel | Badvattentemp
Katalog | Göteborgs katalog
Datamängdens URI | https://catalog.goteborg.se/store/6/resource/20190
Identifierare | - 

Dataportalen | Värde
:--- | :---
URI metadatapost |  https://admin.dataportal.se/store/66/metadata/71946
URI landningssida | https://www.dataportal.se/sv/datasets/66_71946

## Val av identifierare

En central princip när man uttrycker information om ting med hjälp av RDF är att man ger identifierare till dessa ting.
Vad som betraktas som ting i en katalog inkluderar katalogen själv, datamängder,
distributioner, utgivande organisationer, kontakter, dokument osv. Identifierarna gör att man kan referera till
tingen på ett enhetligt sätt och veta när man talar om samma ting.
  
### Undvik blanka noder

I RDF är det möjligt att undvika att använda identifierare genom att använda blanka noder. För att skördningen ska
fungera väl är blanka noder inte tillåtet för Katalogen, datamängder, distributioner, utgivande organisationer och kontakter.

### Unika identifierare

En viktig princip är att aldrig använda en identifierare för två olika ting. Ur RDF perspektivet innebär detta att all 
information som uttrycks kring de två tingen kommer att slås samman och betraktas som påstående om ett enskilt ting.
För att undvika detta bör man använda globala identifierare, gärna baserade på *http* eller *https* protokollen där man
utnyttjar den egna organisationens namnrymd för att säkerställa att man inte skapar olyckliga krockar.

### Undvik duplicerade identifierare

Man bör undvika att ha två (eller flera) identifierare för samma ting. Detta gäller speciellt för datamängder,
utgivande organisationer och kontakter. Men det är även viktigt för kontrollerade vokabulärer, t.ex. licenser.
Ett tydligt exempel är att licensen CC-BY alltid ska anges med URIn: "http://creativecommons.org/licenses/by/4.0/", 
aldrig med "https" eller utan avslutande slash "/".

## Utgivande organisation
För katalog och datamängd är det rekommenderat att man anger en utgivande organisation (via propertyn dcterms:publisher).
Eftersom utgivande organisation är särskilt viktiga för hur portalen delar in och filtrerar datamängder beskrivs nedan
vad som är möjligt och vad man bör undvika.

### Flera utgivande organisation inom samma katalog

Det är fullt möjligt att ha flera olika utgivande organisationer inom samma katalog, t.ex. motsvarande olika avdelningar
eller förvaltningar inom en större organisation. Notera dock att det som är möjligt inte nödvändigtvis är eftersträvansvärt.
Att använda en mängd olika utgivande organisationer kan göra det svårare för den som vill vidareuttnytja datamängder att hitta rätt.
Dataägare uppmuntras här tänka ur ett användarperspektiv snarare än vad den exakta
administrativt korrekta hemvisten är inom den egna organisationen.

### Beskriv en utgivande organisation enbart en gång

Att beskriva en utgivande organisation flera gånger motsvarar att ha duplicerade identifierare. Risken är att man beskriver
samma organisation med en aning olika namn, t.ex. "SKR - Sveriges Kommuner och Regioner" samt "Sveriges Kommuner och Regioner".
Det är svårt att automatiskt upptäcka att dessa två titlar motsvarar samma utgivande organisation med säkerhet.

Effekten av beskriva samma organisation flera gånger är både att det ser illa ut med dupletter i sökgränsnittet på portalen
samt att det blir svårare att söka fram datamängder utifrån en utgivande organisation.

Notera att på Portalen är det möjligt att se att datamängder kommer från samma katalog och 
därmed med stor sannolikhet kunna slutleda att de har samma ursprung. Men, på den Europeiska dataportalen bevaras inte 
denna information vilket gör att man endast har fritextsökning att förlita sig på.

### Identifierare för utgivande organisationer
Det finns situationer när datamängder för en enskild utgivande organisation skördas från olika kataloger. Det vanligaste exemplet är när en organisation både erbjuder en egen katalog samt att en del av deras datamängder skördas från en annan portal, som t.ex. Geodataportalen. För att undvika att samma utgivande organisation registreras fler än en gång är det rekommenderat att man använder en välkänd identifierare för den utgivande organisationen. För att detektion och sammanslagning ska fungera bör följande adress användas:

```
http://dataportal.se/organisation/SE<orgnr>[-suffix]
```
Där orgnr är ett 10-siffrigt organisationsnummer och den valfria suffixet används efter överenskommelse om flera utgivande organisationer delar organisationsnummer. Observera att organisationsnummret ska anges utan mellanslag eller bindestreck.

Strukturen på adressen följer samma mönster som Kungliga Biblioteket har etablerat i samband med e-plikt, man kan läsa om det bland annat i [specifikationen
för RSS-levernas](http://www.kb.se/namespace/digark/deliveryspecification/deposit/rssfeeds/rssfeeds.pdf) i kapitlet format under sektionen "utgivare" (R104). Vi har dock valt att mynta nya adresser i dataportalens domän för att det gör möjlighet att på lite sikt att etablera en landningssida per organisation.

Se ärende [15](https://github.com/DIGGSweden/DCAT-AP-SE/issues/15) för en vidare diskussion.

### Undvik separat utgivande organisation på katalognivån
Av samma skäl som man inte ska ha flera utgivande organisationer för datamängder bör man undvika att ha en separat
för katalogen själv. Man kan tycka att katalogens egen utgivande organisation skulle kunna särskiljas, men eftersom DCAT-AP
påbjuder att exakt samma konstruktion används är det svårt att hålla dessa åtskilda.

### Håll isär kontakter och utgivande organisationer
Kontakter och utgivande organisationer har olika uttryck i RDF, även om de har en närliggande semantik behandlas de olika
av portalen och därmed får de inte blandas samman. Man får alltså inte använda samma identifierare för en kontakt och en
utgivande organisation.

## Hantering av duplikat

Sveriges dataportal hämtar metadata från många kataloger vilket medför att duplikat kan uppkomma. Till exempel kan detta hända om samma datamängd eller utgivare finns representerade i flera kataloger.

För att undvika duplicering finns en mekanism för att identifiera och filtrera duplikat vid skördningstillfället. Det finns tre typer av entiteter som berörs av mekanismen: datamängder, datatjänster (API) samt aktörer (utgivare, producenter och övriga aktörer). En förutsättning för att kunna hantera duplikat är att det går att slå fast att det är samma entitet, det vill säga att vi behöver hitta något som ger entiteten en unik identitet. Mekanismen för att hitta en unik identitet är annorlunda för aktörer än för datamängder och datatjänster:

**Aktörer (utgivare, producent, övrig aktör):**<br>

1. Identitet ges via aktörens egen URI, se kapitlet ovan om [identifierare för utgivande organisationer](#identifierare-for-utgivande-organisationer).

**Datamängd eller datatjänst:**

1. Identitet ges i första hand om det finns en explicit identifierare i metadatan (dcterms:identifier) som är tillräckligt unik. I dagsläget krävs att identifieraren är en UUID, se det reguljära uttrycket nedan.
2. Identitet etableras i andra hand utifrån datamängden / datatjänstens egen URI.

```
   Reguljärt uttryck för att matcha UUID:
   /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/
```

När ett duplikat hittats via sin identifierare, så behövs en prioritering för att kunna avgöra vilken entitet som ska ha företräde i skördningen till dataportalen, dvs vilka entiteter som ska filtreras bort. Prioriteringen görs genom att ta hänsyn till vilken datakatalog entiteterna tillhör. Datakataloger kan vara klassificerade som antingen privat sektor eller publik sektor. Kataloger klassade som publik sektor ges företräde över privat sektor. I vissa fall kan det vara så att vissa kataloger behöver särskild prioritering, då sker det via ett manuellt förfarande. Prioriteringsordningen mellan kataloger är alltså:

1. Enskilda kataloger om de har prioriterats individuellt.
2. Kataloger som klassificerats som offentlig sektor.
3. Kataloger som klassifierats som privat sektor.

Det finns kataloger som betraktas som samlingskataloger då de innefattar datamängder från olika aktörer. Dessa samlingskataloger ska ha lägre prioritet än de kataloger vars innehåll kan kopplas till en enskild aktör. Detta åstadkoms antingen genom att prioritera de senare katalogerna enligt (1), eller genom att klassificera samlingskatalogen som privat sektor enligt (3).

## Multipla kataloger per organisation
Portalen skördar från en skördningskälla per organisation. Skördningskällan innebär att en RDF graf laddas och det är
tillåtet att denna graf innehåller mer än en katalog. Om det finns mer än en katalog är det nödvändigt att de är
organiserade via propertyn dct:hasPart. Endast en nivå av kataloger och inga cirkulära referenser är tillåtna,
alla kataloger måste vara typade som dcat:Catalog.

I praktiken måste det se ut som följer i RDF grafen för tre kataloger:

```
huvudkatalog rdf:type     dcat:Catalog  ,
             dct:hasPart  underkatalog1 ,
             dct:hasPart  underkatalog2 .
underkatalog1 rdf:type    dcat:Catalog .
underkatalog2 rdf:type    dcat:Catalog .
```

Inga ytterligare dct:hasPart är tillåtna för tre kataloger, ytterligare metadata enligt DCAT-AP-SE bör dock finnas,
t.ex. titlar, relationer till datamängder, utgivande organisationer etc.
Notera att portalen kommer att slå samman alla kataloger och flytta upp alla datamängder till huvudkatalogen.
Angående övrig metadata på katalogerna så är det enbart huvudkatalogens metadata som kommer bevaras. 

### Ladda underkataloger från separata skördningskällor
Om underkataloger inte har någon ytterligare metadata utöver typningen som dcat:Catalog 
(alltså inte heller några relationer till datamängder) så kommer det tolkas som att underkatalogen måste hämtas separat.
Underkatalogen kommer försöka laddas i enlighet med länkade data principer, dvs dess identifierare (URI) betraktas som
en skördningskälla varifrån underkatalogen bör kunna laddas.

Om någon av underkatalogerna inte kan laddas avbryts skördningen för den organisationen.
