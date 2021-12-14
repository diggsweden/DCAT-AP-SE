# Översikt



Detta avsnitt är teknisk dokumentation över rekommendationer för hur man bäst översätter beskrivningar av geodata enligt NMDP4.0<sup>&ast;</sup> till DCAT-AP-SE<sup>&ast;&ast;</sup> för att förbättra synlighet och läsförståelse på Sveriges dataportal. Arbete pågår för att finjustera översättningen och för att verifiera den tekniskt med Lantmäteriet. Notera också att den översättning som beskrivs ännu inte inkluderar datatjänster (API:er).

<font size="2">
<sup>&ast;</sup> Nationell metadataprofil för geografisk information<br>
<sup>&ast;&ast;</sup> Nationell metadataprofil för datakataloger
</font>

## Målgrupp
Detta avsnitt riktar sig i huvudsak till systemutvecklare som ansvarar för att ta fram eller underhålla en översättning mellan NMDP4.0 och DCAT-AP-SE.

## Bakgrund
Geodata i Sverige rekommenderas att göras sökbara även på Sverige dataportal.

Vissa geodata omfattas av INSPIRE direktivet, som implementerats i svensk rätt genom Förordning (2010:1770) om geografisk miljöinformation. Förordningen kräver att man följer vissa tekniska riktlinjer för att främja enhetlig tillgång till geodata över hela EU. Det svenska genomförandet [samordnas av Lantmäteriet](https://www.lantmateriet.se/sv/Om-Lantmateriet/Om-oss/Vart-samordningsansvar/samordning-av-inspire/). Samordningsansvaret innefattar bland annat att stödja, tydliggöra och tolka kraven, till exempel genom att identifiera relevanta geodata samt hur dessa ska beskrivas i metadata. NMDP4.0 är en specifikation och vägledning för att enhetligt beskriva data och tjänster. Den är baserad på ISO19115, metadatastandarden som används i INSPIRE. XML-implementationen av denna beskrivs i standarden ISO19139.

Europeiska kommissionen har tagit fram [GeoDCAT-AP v.1.0.1](https://joinup.ec.europa.eu/release/geodcat-ap/101) vilket är en metadataprofil som indirekt innefattar en översättning från ISO19115 i syfte att göra geodata bättre sökbar över gränser och mellan sektorer. Därtill finns [GeoDCAT-AP - v.2.0](https://semiceu.github.io/GeoDCAT-AP/drafts/latest/) under utveckling. Den senaste versionen innehåller i många fall mer specifik information och bör konsulteras i de fall rekommendationer här inte är tillräckliga. Det har också skapats en XSLT-transformation som konverterar ISO19139 till DCAT-AP.

## Rekommendationen är framtagen för att hantera följande utmaningar

De tekniska riktlinjerna och mer specifikt den metadatastandard som förordas av INSPIRE skiljer sig från de principer som ligger till grund för DCAT-AP. Översättningen mellan de två sätten att uttrycka metadata är därför, i vissa fall, utmanande. Den dokumentation som finns kring GeoDCAT-AP fokuserar på att beskriva en kompatibel metadataprofil som ska omfatta de delar som återfinns i ISO19139, vilket inte är samma sak som att tillhandahålla en översättning fält per fält.

Rekommendationen syftar även till att stabilisera den svenska konvertering som görs inom den framtagna XSLT-transformationen eftersom:

1. RDF/XML formatet är tyvärr relativt känsligt och validering går bortom vad XML baserade verktyg klarar av. Det betyder att smärre justeringar lätt kan leda till uttryck som antingen inte validerar eller motsvarar fel uttryck.
2. Översättningen mellan ISO19139 XML-uttryck och RDF är inte ett till ett. I många fall behövs ett antal olika villkor vara uppfyllda för att en viss översättning ska väljas över en annan.
3. Elementen i NMDP4.0 används ofta en aning olika av olika organisationer vilket innebär ett stort behov av anpassning via konfigurationer.
