# Skördning av DCAT-AP-SE till öppnadata.se

Nedan beskrivs under vilka villkor öppnadata.se kan skörda en förteckning
av datamängder uttryckt i DCAT-AP-SE. Härefter kommer vi kalla den öppnadata.se för "portalen" och
en förteckningen av datamängder uttryckt i DCAT-AP-SE för en "katalog". I anslutning till portalen finns ett administrativt
gränsnitt på [registrera.oppnadata.se](https://registrera.oppnadata.se) som riktar sig till utvecklare och katalogansvariga,
härefter kommer vi referera till detta gränsnitt som "registrera".

## Format
Portalen förväntar sig att kataloger uttrycks som RDF i syntaxen RDF/XML.
Observera att RDF kräver att alla IRI:er (vilket inkluderar vanliga webbadresser) måste följa [RFC3987](https://www.ietf.org/rfc/rfc3987.txt), 
Notera att det innebär att en mängd specifika tecken måste enkodas, t.ex. mellanslag.

Portalen kräver att alla IRI:er är absoluta i kataloguttrycket (innebär typiskt att de börjar med http:// eller https://).

För den som är osäker på om man producerat korrekt RDF så kan man använda [W3C's RDF validator](https://www.w3.org/RDF/Validator/), 
observera att den dock inte kollar om IRI:er är absoluta eller inte.
Man kan också använda verktygslådan på registrera för att få mer detaljerad återkoppling kring framförallt hur väl man uppfyller DCAT-AP-SE.

## Protokoll
Åtkomst sker via HTTP eller HTTPS protokollen. Vid behov kan man använda redirects med en av följande statuskoder: 301, 303, 307 och 308.

## Skördningstid
Skördning sker en gång per dygn, ca. vid 04 på morgonen. Utöver det kan den som ansvarar för en katalog tvinga fram
ytterligare skördningar närhelst så passar. Detta sker på registrera och efter att man tvingat fram en omskördning
sker skördning normalt inom 10 minuter. 

## Val av identifierare

En central princip när man uttrycker information om ting med hjälp av RDF är att man ger använder identifierare för att
referera till dessa ting. Vad som betraktas som ting i en katalog inkluderar katalogen själv, en datamängd,
en distributioner, en utgivande organisation, en kontakt, ett dokument osv. Identifierarna gör att man kan referera till
tingen på ett enhetligt sätt och veta när man talar om samma ting.
  
### Undvik blanka noder

I RDF är det möjligt att undvika att använda identifierare genom att använda blanka noder. För att skördningen ska
fungera väl är detta inte tillåtet för Katalog, datamängd, distribution, utgivande organisation och kontakt.

### Unika identifierare

En viktig princip är att aldrig använda en identifierare för två olika ting. Ur RDF perspektivet innebär detta att all 
information som uttrycks kring de två tingen kommer att slås samman och betraktas som påstående om ett enskilt ting.
För att undvika detta bör man använda globala identifierare, gärna baserade på http eller https protokollet där man
utnyttjar den egna organisationens namnrymd för att säkerställa att man inte skapar olyckliga krockar. För mer
information om hur man väljer identifierare se rapporten 
[Rekommendation om beständiga identifierare](https://oppnadata.se/2018/05/31/rekommendation-om-bestandiga-identifierare-publicerad/).

## Utgivande organisation

### Identifierare för utgivande organisationer

### Undvik separat utgivande organisation på katalognivån

### Separera från kontakter

## Multipla kataloger per organisation

## 