# Skördning av DCAT-AP-SE till Sveriges dataportal

Nedan beskrivs under vilka villkor Sveriges dataportal kan skörda en förteckning
av datamängder uttryckt i DCAT-AP-SE. Härefter kommer vi kalla [Sveriges dataportal](https://oppnadata.se)
för "portalen" och en förteckningen av datamängder uttryckt i DCAT-AP-SE för en "katalog".
I anslutning till portalen finns ett administrativt gränsnitt på [registrera.oppnadata.se](https://registrera.oppnadata.se) 
som riktar sig till utvecklare och katalogansvariga, härefter kommer vi referera till detta gränsnitt som "registrera".

Under 2020 kommer det finnas två adresser/gränssnitt för Sveriges dataportal som är nåbara på [oppnadata.se](https://oppnadata.se) och [dataportal.se](https://dataportal.se) respektive. Detta är för att det sker ett iterativt utvecklingsarbete med att skapa nya gränsnitt och ny funktionalitet. Under hösten 2020 kommer oppnadata.se att stängas ned och ersättas fullt ut av dataportal.se. Det är viktigt att notera dock att båda gränssnitten slår mot samma API som tillhandahålls av registrera. Dvs. för dataleverantörer är det inget som ändras, man behvöver inte registrera sina datamängder mer än en gång. 

Nedan går vi igenom skördningsmekanismen samt också ett antal principer som man måste följa kring val av identifierare
och hur man uttrycker utgivande organisationer. Sist i dokumentet finns principer man ska följa om man vill leverera mer än 
en katalog per skördad organisation.

## Skördningsmekanism

För att skördning ska lyckas måste man:
1. Stödja rätt protokoll.
2. Levera i rätt format.
3. Följa den föreskrivna metadataprofilen [DCAT-AP-SE](../sv).

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
Man kan också använda [verktygslådan](https://registrera.oppnadata.se/toolkit/source) på registrera för att få mer detaljerad återkoppling kring framförallt hur väl man uppfyller DCAT-AP-SE.

### Skördningstid
Skördning sker en gång per dygn, oftast vid ca. 4 på morgonen. Utöver det kan den som ansvarar för en katalog tvinga fram
ytterligare skördningar närhelst så passar. Detta sker på registrera. Efter att man tvingat fram en omskördning
sker skördningen normalt inom 10 minuter.

### Registrera skördning
I sverige har vi valt att förregistrera alla offentliga aktörer, man kan enkelt kolla om man är
[förregistrerad på registrera](https://registrera.oppnadata.se/status/public).
Förregistrerade aktörer har en angiven skördningskälla på formen:
```
http://<organisation>.se/datasets/dcat
```
Offentliga aktörer ska därmed inte registrera sig på nytt utan endast vid behov ändra skördningskällan. Privata aktörer
är dock aldrig förregistrerade utan måste registrera sig explicit.
 
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
utnyttjar den egna organisationens namnrymd för att säkerställa att man inte skapar olyckliga krockar. För mer
information om hur man väljer identifierare se rapporten 
[Rekommendation om beständiga identifierare](https://oppnadata.se/2018/05/31/rekommendation-om-bestandiga-identifierare-publicerad/).

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
Dataägare uppmuntras här tänka ur ett kund- och marknadsföringsperspektiv snarare än vad den exakta
administrativt korrekta hemvisten är inom den egna organisationen.

### Beskriv en utgivande organisation enbart en gång

Att beskriva en utgivande organisation flera gånger motsvarar att ha duplicerade identifierare. Risken är att man beskriver
samma organisation med en aning olika namn, t.ex. "SKR - Sveriges Kommuner och Regioner" samt "Sveriges Kommuner och Regioner".
Det är svårt att automatiskt upptäcka att dessa två titlar motsvarar samma utgivande organisation med säkerhet.

Effekten av beskriva samma organisation flera gånger är både att det ser illa ut med dupletter i sökgränsnittet på portalen
samt att det blir svårare att söka fram datamängder utifrån en utgivande organisation.

Notera att på den svenska portalen (öppnadata.se) är det möjligt att se att datamängder kommer från samma katalog och 
därmed med stor sannolikhet kunna slutleda att de har samma ursprung. Men, på den europeiska dataportalen bevaras inte 
denna information vilket gör att man endast har fritextsökning att förlita sig på.

### Identifierare för utgivande organisationer
Det finns situationer när datamängder för en enskild utgivande organisation skördas från olika kataloger.
Det vanligaste exemplet är när en organisation både erbjuder en egen katalog samt att en del av deras datamängder skördas
från en annan portal, som t.ex. geodataportalen. För att undvika att samma utgivande organisation registreras fler än en
gång är det rekommenderat att man använder en välkänd identifierare för den utgivande organisationen.
Kungliga Biblioteket har etablerat identifierare i samband med e-plikt, man kan läsa om det bland annat i [specifikationen
för RSS-levernas](http://www.kb.se/namespace/digark/deliveryspecification/deposit/rssfeeds/rssfeeds.pdf) 
i kapitlet format under sektionen "utgivare" (R104). I korthet sägs att den URI som ska användas för en utgivare är:
```
http://id.kb.se/organisations/SE<orgnr>[-suffix]
```
Där orgnr är ett 10-siffrigt organisationsnummer och den valfria suffixet används efter överenskommelse om flera
utgivande organisationer delar organisationsnummer.

För att förbättra interoperabiliteten i Sverige rekommenderas att samma identifierare används för utgivande organisationer.

### Undvik separat utgivande organisation på katalognivån
Av samma skäl som man inte ska ha flera utgivande organisationer för datamängder bör man undvika att ha en separat
för katalogen själv. Man kan tycka att katalogens egen utgivande organisation skulle kunna särskiljas, men eftersom DCAT-AP
påbjuder att exakt samma konstruktion används är det svårt att hålla dessa åtskilda.

### Håll isär kontakter och utgivande organisationer
Kontakter och utgivande organisationer har olika uttryck i RDF, även om de har en närliggande semantik behandlas de olika
av portalen och därmed får de inte blandas samman. Man får alltså inte använda samma identifierare för en kontakt och en
utgivande organisation.

## Multipla kataloger per organisation
Registrera skördar från en skördningskälla per organisation. Skördningskällan innebär att en RDF graf laddas och det är
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
Notera att registrera kommer att slå samman alla kataloger och flytta upp alla datamängder till huvudkatalogen.
Angående övrig metadata på katalogerna så är det enbart huvudkatalogens metadata som kommer bevaras. 

### Ladda underkataloger från separata skördningskällor
Om underkataloger inte har någon ytterligare metadata utöver typningen som dcat:Catalog 
(alltså inte heller några relationer till datamängder) så kommer det tolkas som att underkatalogen måste hämtas separat.
Underkatalogen kommer försöka laddas i enlighet med länkade data principer, dvs dess identifierare (URI) betraktas som
en skördningskälla varifrån underkatalogen bör kunna laddas.

Om någon av underkatalogerna inte kan laddas avbryts skördningen för den organisationen.
