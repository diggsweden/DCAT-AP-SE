# Skördning av DCAT-AP-SE till öppnadata.se

Nedan beskrivs under vilka villkor öppnadata.se kan skörda en förteckning
av datamängder uttryckt i DCAT-AP-SE. Härefter kommer vi kalla den nationella dataportalen öppnadata.se för "portalen" och
en förteckningen av datamängder uttryckt i DCAT-AP-SE för en "katalog". I anslutning till portalen finns ett administrativt
gränsnitt på [registrera.oppnadata.se](https://registrera.oppnadata.se) som riktar sig till utvecklare och katalogansvariga,
härefter kommer vi referera till detta gränsnitt som "registrera".

## Format
Portalen förväntar sig att kataloger uttrycks som RDF i syntaxen RDF/XML.
Observera att RDF kräver att alla IRI:er (vilket inkluderar vanliga webbadresser) måste följa [RFC3987](https://www.ietf.org/rfc/rfc3987.txt).
Detta innebär bland annat att en mängd specifika tecken måste enkodas, t.ex. mellanslag.

Portalen kräver att alla IRI:er är absoluta i kataloguttrycket (detta innebär typiskt att de börjar med http:// eller https://).

För den som är osäker på om man producerat korrekt RDF så kan man använda [W3C's RDF validator](https://www.w3.org/RDF/Validator/). 
Observera att den dock inte kollar om IRI:er är absoluta eller inte.
Man kan också använda [verktygslådan](https://registrera.oppnadata.se/toolkit/source) på registrera för att få mer detaljerad återkoppling kring framförallt hur väl man uppfyller DCAT-AP-SE.

## Protokoll
Åtkomst sker via endera HTTP eller HTTPS protokollen. Vid behov kan man använda HTTP redirects med en av följande statuskoder: 301, 303, 307 och 308.

## Skördningstid
Skördning sker en gång per dygn, vid ca. 4 på morgonen. Utöver det kan den som ansvarar för en katalog tvinga fram
ytterligare skördningar närhelst så passar. Detta sker på registrera. Efter att man tvingat fram en omskördning
sker skördningen normalt inom 10 minuter. 

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
För att undvika detta bör man använda globala identifierare, gärna baserade på http eller https protokollen där man
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

### Flera utgivande organisation inom samma katalog

Det är fullt möjligt att ha flera olika utgivande organisationer inom samma katalog, t.ex. motsvarande olika avdelningar
eller förvaltningar inom en större organisation. Notera dock att det som är möjligt inte nödvändigtvis är eftersträvansvärt.
En mängd olika utgivande organisationer kan göra det svårt att hitta närliggande datamängder inom en större organisation. 

### Beskriv en utgivande organisation enbart en gång

Att beskriva en utgivande organisation flera gånger motsvarar att ha duplicerade identifierare. Risken är att man beskriver
samma organisation med en aning olika namn, t.ex. "SKL - Sveriges Kommuner och Landsting" samt "Sveriges Kommuner och Landsting".
Det är svårt att automatiskt upptäcka att dessa två titlar motsvarar samma utgivande organisation med säkerhet.

Effekten av beskriva samma organisation flera gånger är både att det ser illa ut med dupletter i sökgränsnittet på portalen
och att det blir svårare att söka fram datamängder utifrån en utgivande organisation.

Notera att på den svenska portalen (öppnadata.se) är det möjligt att se att datamängder kommer från samma katalog och 
därmed med stor sannolikhet kunna slutleda att de har samma ursprung. Men, på den europeiska dataportalen bevaras inte 
denna information vilket gör att man endast har fritextsökning att förlita sig på.

### Identifierare för utgivande organisationer


### Undvik separat utgivande organisation på katalognivån

### Separera från kontakter

## Multipla kataloger per organisation

## 