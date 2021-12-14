# Generella principer

## Språkprincipen
I DCAT-AP-SE ska språk alltid anges per fält om möjligt medans i Inspire anger man språket per metadatadokument. I översättningen bör man därför detektera språket i rooten och översätta till två bokstävers koder enligt [ISO-639-1](https://en.wikipedia.org/wiki/ISO_639-1). Följande uttryck: 

    <gmd:language>
      <gmd:LanguageCode codeList="http://www.loc.gov/standards/iso639-2" codeListValue="swe"/>
    </gmd:language>

Översätts till `sv` och sätts på alla fritextfält, t.ex. på `dcterms:title`.

## Referensprincipen
I ISO19139 uttrycken dupliceras information i många fall, t.ex. så finns en kopia av `gmd:CI_ResponsibleParty` för varje datamängd även om det motsvarar samma organisation. För att dataportalen ska fungera bra så bör dessa konstruktioner översättas till samma identifierare så att man inte får flera kopior av organisationen i gränssnittet.

Detta löses genom att man skapar en unik identifierare, en URI, för de entitieter som upprepas i Inspire uttrycket. I RDF behöver man då bara tillhandahålla en beskrivning av denna identifierare en gång och därefter kan man referera till den från många datamängder.

Det kan vara en utmaning att skapa unika identifierare som knyter samman entiteter på detta sätt. För utgivare och andra aktörer ska man dessutom använda en speciell URI konstruktion för att minska duplikat mellan olika datakataloger, se [information i skördningsspecifikationen](https://docs.dataportal.se/dcat/docs/harvesting/#identifierare-for-utgivande-organisationer) för hur URI:erna ska se ut.
