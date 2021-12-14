# Rekommenderade fält - Geodata

## Datamängd

### Kontaktuppgift
Återfinns i IdentificationInfo som en `gmd:CI_ResponsibleParty` under sökvägen `gmd:pointOfContact`, när rollen är `pointOfContact`.

Se exemplet under [gemensamma konstruktioner - ResponsibleParty](common.md#responsibleparty), men i detta fall blir uttrycket inte en `foaf:Organization` utan en `vCard:Kind`:

    <dcat:Dataset rdf:about="https://example.com/dataset1">
        <dcat:contactPoint rdf:resource="http://example.com/HAVContact1"/>
    </dcat:Dataset>
    <vcard:Organization rdf:about="http://example.com/HAVContact1">
        <vcard:fn>Funktionsadress för kontakt på Hav och vatten</vcard:fn>
        <vcard:hasEmail rdf:resource="mailto:info@havochvatten.se"/>
    </vcard:Organization>

Här är det viktigt att notera att URI:n för kontaktpunkten inte får vara samma som utgivaren (i exemplet http://dataportal.se/organisation/SE2021006420). Detta för att det är två olika entiteter med olika uttryck (`foaf:Organization`  och `vcard:Organization`), om samma URI skulle användas skulle de bli ihopblandade och skördningen fungerar inte som den ska. Om samma kontakt används för flera datamängder bör samma URI användas, bara det inte är samma URI som för utgivare (eller andra aktörer).

### Nyckelord
Nyckelord återfinns under IdentificationInfo under `gmd:descriptiveKeywords` som kan vara upprepad. Se [vanliga konstruktioner - nyckelord](common.md#descriptivekeywords).

Nyckelord kan plockas ut för alla terminologier förutom "initiativ" så länge det är klart vilket språk man sätter på varje nyckelord vilket beror på hur man hanterat klartextnyckelorden. Dvs, man kan behöva ignorera GEMET, Inspire themes, eller Inspire priority dataset om det är oklart vad som står där.

Här är ett exempel på ett nyckelord uttryckt i GEMET:

    <gmd:descriptiveKeywords>
      <gmd:MD_Keywords>
        <gmd:keyword>
          <gmx:Anchor xlink:href="http://rdfdata.eionet.europa.eu/inspirethemes/themes/30">Biogeografiska regioner</gmx:Anchor>
        </gmd:keyword>
        <gmd:thesaurusName>
          <gmd:CI_Citation>
            <gmd:title>
              <gmx:Anchor xlink:href="http://www.eionet.europa.eu/gemet/inspire_themes">GEMET - INSPIRE themes, version 1.0</gmx:Anchor>
            </gmd:title>
            <gmd:date>
              <gmd:CI_Date>
                <gmd:date>
                  <gco:Date>2008-06-01</gco:Date>
                </gmd:date>
                <gmd:dateType>
                  <gmd:CI_DateTypeCode codeListValue="publication" codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_DateTypeCode">publication</gmd:CI_DateTypeCode>
                </gmd:dateType>
              </gmd:CI_Date>
            </gmd:date>
          </gmd:CI_Citation>
        </gmd:thesaurusName>
      </gmd:MD_Keywords>
    </gmd:descriptiveKeywords>

Uttrycket i RDF blir då:

    <dcat:Dataset rdf:about="https://example.com/dataset1">
      <dcat:keyword xml:lang="sv">Biogeografiska regioner</dcat:keyword>
    </dcat:Dataset>

Notera att vi i detta fall tappar bort information om att nyckelordet kommer från GEMET samt vilket datum terminologin publicerades. För att få med den informationen behövs en annan konstruktion via en stabil identifierare till begreppets URI i GEMET (http://rdfdata.eionet.europa.eu/inspirethemes/themes/30), detta kan göras med dcterms:subject som ett komplement till nyckelordet.

### Kategori
I ISO19139 finns flera olika sätt att uttrycka kategorier. ISO Topic Categories har en egen dedikerad konstruktion i IdentificationInfo sektionen:

    <gmd:topicCategory>
       <gmd:MD_TopicCategoryCode>environment</gmd:MD_TopicCategoryCode>
    </gmd:topicCategory>

Inspire Spatial data themes uttrycks istället med hjälp av Descriptive Keywords och ytterligare kontrollerade vokabulärer kan uttryckas på liknande sätt, läs mer och se exempel på Inspire spatial datateman i separat sektion om [DescritiveKeywords](common.md#descriptivekeywords).

I den nationella utökningen (NMDP4.0) sägs att vissa datamängder (de som är prioriterade datamängder enligt Inspire) måste kategoriseras med Inspire priority dataset vokabulären. Dessutom uppmuntras man använda GEMET vokabulären om ingen mer lämpad kontrollerad vokabulär finns. I båda fallen ska DescriptiveKeywords användas.

I DCAT-AP är det rekommenderat att först och främst kategorisera med en eller flera [MDR datateman](https://docs.dataportal.se/dcat/sv/#5.3). Här finns två fall:

1. I ISO19139 uttrycket finns redan ett eller flera MDR datateman uttryckta via DescriptiveKeywords konstruktionen. Om detta är fallet gör man en direkt översättning.
2. Man får försöka hitta ett eller flera lämpliga MDR datateman utifrån de kategorier som angivits. I första hand använder man den [översättning från Inspire spatial datateman](https://github.com/SEMICeu/iso-19139-to-dcat-ap/blob/master/alignments/inspire-themes-to-mdr-data-themes.rdf) som tagits fram. Det är också möjligt att översätta först från [ISO Topic Categories till Inspire spatial datateman](https://github.com/SEMICeu/iso-19139-to-dcat-ap/blob/master/alignments/iso-topic-categories-to-inspire-themes.rdf) för att därefter använda den första översättningen.

I fall 2 är det också i många fall möjligt att översätta från GEMET till MDR datateman eftersom Inspire spatial datateman är ett urval av begrepp i GEMET. 

Notera att det är inget som hindrar att man i RDF uttrycket också uttrycker mer specifika kategoriseringar än vad som möjliggörs av MDR datateman. Ett gott exempel på detta är när man vill bevara den mer specifika kategoriseringsinformation som uttryckts i Inspire. Isåfall kan man göra detta i enlighet med följande schematiska mappning:

| Kategori i Inspire | Property | URI:er |
| - | - | - |
| Topic Category | dct:subject | http://inspire.ec.europa.eu/metadata-codelist/TopicCategory/* |
| Inspire spatial data theme | dcat:theme | https://inspire.ec.europa.eu/theme/* |
| GEMET | dct:subject | http://www.eionet.europa.eu/gemet/concept/* |
| Inspire Priority dataset | dct:subject | http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset/* |

### Utgivningsdatum

Utgivnigsdatum anges under `gmd:citation/gmd:CI_Citation/` i identifikationsektionen via följande uttryck, notera att rollen för datumet i detta exempel är `publication`.

    <gmd:date>
      <gmd:CI_Date>
        <gmd:date>
          <gco:Date>2010-12-08</gco:Date>
        </gmd:date>
        <gmd:dateType>
          <gmd:CI_DateTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication">publication</gmd:CI_DateTypeCode>
        </gmd:dateType>
      </gmd:CI_Date>
    </gmd:date>

Det kan finnas flera datum med olika roller, för utgivningsdatum bör i första hand rollen `publication` användas, i andra hand `creation` och i sista hand `revision`. Någon av dessa måste vara uttryckta då det är obligatoriskt i Inspire.
 I DCAT-AP blir uttrycket:

    <dcat:Dataset rdf:about="https://example.com/dataset1">
      <dcterms:issued rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2010-12-08</dcterms:issued>
    </dcat:Dataset>

### Namngivet geografiskt område
I ISO19139 / NMDP4.0 finns inget lämpligt fält att plocka detta värde ifrån.

### Geografiskt område
Geografiskt område beskrivs med en omskrivande rektangel. I ISO19139 uttrycker man en omskrivande rektangel i identifikationSektion inne i en `gmd:extent/gmd:EX_EXTENT/gmd:geographicElement`, det kan se ut som:

     <gmd:extent>
       <gmd:EX_Extent>
         <gmd:geographicElement>
           <gmd:EX_GeographicBoundingBox>
             <gmd:westBoundLongitude>
               <gco:Decimal>4.921875000000001</gco:Decimal>
             </gmd:westBoundLongitude>
             <gmd:eastBoundLongitude>
               <gco:Decimal>21.093750000000004</gco:Decimal>
             </gmd:eastBoundLongitude>
             <gmd:southBoundLatitude>
               <gco:Decimal>57.20175947677694</gco:Decimal>
             </gmd:southBoundLatitude>
             <gmd:northBoundLatitude>
               <gco:Decimal>67.52117331627686</gco:Decimal>
             </gmd:northBoundLatitude>
           </gmd:EX_GeographicBoundingBox>
         </gmd:geographicElement>
       </gmd:EX_Extent>
     </gmd:extent>

Konstruktionen i DCAT-AP är via en mellanliggande blank nod som pekas ut via propertyn `dcterms:spatial` och typas som `dct:Location`. Själva den omskrivande rektangeln pekas ut från den blanka noden med propertyn `dcat:bbox` med datatypen `geosparql:wktLiteral` och anges som en polygon med fem punkter där första och sista är samma, dvs `POLYGON(W N,E N,E S,W S,W N)`:

    <dcat:Dataset rdf:about="https://example.com/dataset1">
      <dct:spatial rdf:nodeID="_:1"/>
    </dcat:Dataset>
    <dct:Location rdf:nodeID="_:1">
      <dcat:bbox rdf:datatype="http://www.opengis.net/ont/geosparql#wktLiteral">POLYGON((4.921875000000001 67.52117331627686,21.093750000000004 67.52117331627686,21.093750000000004 57.20175947677694,4.921875000000001 57.20175947677694,4.921875000000001 67.52117331627686))</dcat:bbox>
    </dct:Location>

### Tidsperiod

I ISO19139 uttrycker man en tidsperiod i identifikationSektion inne i en `gmd:extent/gmd:EX_EXTENT/gmd:temporalElement`, det kan se ut som:

     <gmd:extent>
       <gmd:EX_Extent>
         <gmd:temporalElement>
           <gmd:EX_TemporalExtent>
             <gmd:extent>
               <gml:TimePeriod>
                 <gml:beginPosition>2006-01-01</gml:beginPosition>
                 <gml:endPosition>2021-04-13</gml:endPosition>
               </gml:TimePeriod>
             </gmd:extent>
           </gmd:EX_TemporalExtent>
         </gmd:temporalElement>
       </gmd:EX_Extent>
     </gmd:extent>

Observera att inget hindrar tidsperioden från att angees i samma `gmd:EX_Extent` som geografiska området ovan.

Konstruktionen i DCAT-AP sker via en mellanliggande blank nod som pekas ut via `dct:temporal` propertyn typad som `dct:PeriodOfTime`. Därefter anger man dcat:startDate och dcat:endDate som ISO 8601, där man måste välja att ange en av datatyperna `xsd:gYear`, `xsd:date` eller `xsd:dateTime` beroende på hur nogrannt man vill ange tidsperioden. 

    <dcat:Dataset rdf:about="https://example.com/dataset1">
      <dct:temporal rdf:nodeID="_:2"/>
    </dcat:Dataset>
    <dct:PeriodOfTime rdf:nodeID="_49">
      <dcat:endDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2021-04-13</dcat:endDate>
      <dcat:startDate rdf:datatype="http://www.w3.org/2001/XMLSchema#date">2006-01-01</dcat:startDate>
    </dct:PeriodOfTime>

### Åtkomsträttigheter

I DCAT-AP finns det tre nivåer av åtkomsträttigheter `publik`, `begränsad` och `ej publik`. Se [dokumentationen om åtkomsträttigheter](https://docs.dataportal.se/dcat/sv/#dcat_Dataset-dcterms_accessRights) för information om vilka URI:er som ska användas för dessa värden i DCAT-AP-SE. Notera att all information inte rymms i fältet åtkomsträttigheter, man kan fylla i mer information på distributionsnivån, mer specifikt en [creative commons licens](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcterms_license) [eller annan licens](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcterms_license-2) och även tillhandahålla mer specifik information i en sektion som heter [Rättighetsförklaring](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcterms_rights).

I ISO19139 finns resourceContraints i identifikationSektion där en mängd olika begränsningar kan anges. För Inspire resurser är det ett krav att ange [begränsningar enligt Inspire artikel 13](https://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess/), det kan se ut som: 

    <gmd:resourceConstraints>
      <gmd:MD_LegalConstraints>
        <gmd:accessConstraints>
          <gmd:MD_RestrictionCode
        codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#MD_RestrictionCode"
        codeListValue="otherRestrictions" />
        </gmd:accessConstraints>
        <gmd:otherConstraints>
          <gmx:Anchor
        xlink:href="http://inspire.ec.europa.eu/metadata-
        codelist/LimitationsOnPublicAccess/noLimitations">Inga begränsningar för allmänhetens tillgång</gmx:Anchor>
        </gmd:otherConstraints>
      </gmd:MD_LegalConstraints>
    </gmd:resourceConstraints>

I detta exempel finns inga begränsningar (`noLimitatins`), därav bör man sätta åtkomsträttigheten för datamängden till `publik`. Det sker på följande sätt:

    <dcat:Dataset rdf:about="https://example.com/dataset1">
      <dcterms:accessRights rdf:resource="http://publications.europa.eu/resource/authority/access-right/PUBLIC"/>
    </dcat:Dataset>

För övriga värden på begränsningar på offentlig åtkomst enligt artikel 13 sätter man istället värdet `ej publik`, exempel på sådana begränsningar är `sekretess`, `säkerhet`, `personlig integritet` osv.

För resurser som inte är Inspire resurser uppmuntras man (i NMDP4.0) att istället använda vokabulären [åtkomstrestriktioner](https://resources.geodata.se/codelist/metadata/atkomstrestriktioner.xml). Där motsvarar värdet `ingaTillampligaVillkor` åtkomsträttigheten `publik` och värdena `AnnanBegransning` och `villkorOkanda` översätts till `begränsad`. Alla övriga värden tolkas som `ej publik`.

## Distribution

Vi listar här ett lite större exempel av en distribution i sektionen DistributionInfo för att öka läsbarheten i följande underkapitel.

    <gmd:MD_Distribution>
      <gmd:distributionFormat>
        <gmd:MD_Format>
          <gmd:name>
            <gco:CharacterString>wfs</gco:CharacterString>
          </gmd:name>
          <gmd:version>
            <gco:CharacterString>1.0</gco:CharacterString>
          </gmd:version>
        </gmd:MD_Format>
      </gmd:distributionFormat>
      <gmd:transferOptions>
        <gmd:MD_DigitalTransferOptions>
          <gmd:onLine>
            <gmd:CI_OnlineResource>
              <gmd:linkage>
                <gmd:URL>http://example.com/wfs?</gmd:URL>
              </gmd:linkage>
              <gmd:protocol>
                <gco:CharacterString>HTTP:OGC:WFS</gco:CharacterString>
              </gmd:protocol>
              <gmd:description>
                <gco:CharacterString>En beskrivning</gco:CharacterString>
              </gmd:description>
            </gmd:CI_OnlineResource>
          </gmd:onLine>
        </gmd:MD_DigitalTransferOptions>
      </gmd:transferOptions>
    </gmd:MD_Distribution>

### Beskrivning

I ISO19139 uttrycks en beskrivning (`gmd:description`) under sökvägen `gmd:transferOptions/gmd:MD_DigitalTransferOptions/gmd:onLine/gmd:CI_OnlineResource` inne i sektionen DistributionInfo. Se exemplet ovan.

I DCAT-AP uttrycks beskrivningen på distributionen på följande sätt, notera att språktaggen måste sättas:

    <dcat:Distribution rdf:about="https://example.com/distribution1>">
      <dct:description xml:lang="sv">En beskrivning</dct:description>
    </dcat:Dataset>

### Vanliga mediatyper / övriga mediatyper
I geodatavärlden är det oftare viktigare att ha koll på om en distribution motsvarar en WFS tjänst eller WMS tjänst än exakt vilket format som levereras av respektive tjänst. Detta är särskilt relevant när tjänsterna stödjer många olika format. För att komma runt detta har DCAT-AP-SE2 föreslagit användningen av ett antal specifika mediatyper som i större utsträckning representerar vilken tjänst / protokoll som används än formatet. Se de fyra första [geografiska mediatyperna](https://docs.dataportal.se/dcat/sv/#5.7) WCS-, WFS-, WMS- och WMTS-tjänst.   

I NMDP4.0 är det ett krav på att man ska använda `gmd:protocol` och peka på ett värde från en [kontrollerad vokabulär för protokoll](https://resources.geodata.se/codelist/metadata/protokoll.xml). I exemplet ovan ser vi hur protokollet `HTTP:OGC:WFS` anges vilken naturligtivis ska översättas till den geografiska medietypen som har namnet WFS-tjänst. Följande tabell visar de olika värdena och hur de ska översättas:

| Protokoll | Mediatyp |
| - | - |
|HTTP:OGC:WMS | application/vnd.ogc.wms_xml|
|HTTP:OGC:WFS | application/vnd.ogc.wfs_xml|
|HTTP:OGC:WCS | application/vnd.ogc.wcs_xml|
|HTTP:Information | text/html|
|HTTP:Information:Produktspecifikation | text/html|
|HTTP:Nedladdning | oklart |

I det sista fallet med `HTTP:Nedladdning` får man titta efter de explicit angivna formaten istället, dvs vad som finns i fältet `gmd:distributionFormat/gmd:MD_Format/gmd:name/gco:CharacterString`. Några saker värda att observera när man tittar på formaten i dessa fält:

1. Versionen som ibland anges parallellt kan ignoreras.
2. Om flera format anges tas den första som är acceptabel.
3. Formatet som inte följer strukturen av en mediatyp (typiskt `typ/subtyp`), dvs inte följer [RFC 2045](https://datatracker.ietf.org/doc/html/rfc2045), är inte acceptabla och får inte användas rakt av.

**Tips 1** - för att få fram ett acceptabelt format kan det vara värt besväret att underhålla en översättningstabell med översättningar, t.ex. `csv` översätts till `text/csv` och `png` till `image/png`. 

**Tips 2** - om format saknas eller inte går att identifiera via översättningstabell eller liknande kan det vara en ide att underhålla en översättningstabell för filändelser som exponeras i URL:en (`gmd:URL`). T.ex. skulle `.xml` översättas till `application/xml` och `.json` som `application/json`.

**Tips 3** - som ett sista alternativ kan det för vissa aktörer vara rimligt att sätta ett default format, t.ex. `text/html`.

I DCAT-AP-SE uttrycks formatet på följande sätt:

    <dcat:Distribution rdf:about="https://example.com/distribution1>">
      <dct:format>application/vnd.ogc.wfs_xml</dct:format>
    </dcat:Distribution>

### Tillgänglighet

Det finns inget fält som exakt motsvarar tillgänglighet. (Fältet status som lagts till i den nationella utökningen motsvarar fältet status i DCAT-AP, inte tillgänglighet.

### Licens - Creative Commons / Licens - övrig

Licenser kan uttrycks i Inspire som: 

    <gmd:resourceConstraints>
      <gmd:otherConstraints>
        <gmx:Anchor xlink:href="http://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0 (Public Domain Dedication, No Copyright)</gmx:Anchor>
      </gmd:otherConstraints>
    <gmd:otherConstraints>

Om xlink:href pekar på en riktig licens t.ex. som i exemplet ovan ska den läggas till på alla distributioner för den aktuella datamängden. Nedan visas uttrycket på en distribution, notera att uttrycket är detsamma oavsett vilken licens det är (dvs. inte bara Creative Commons licenser):

    <dcat:Distribution rdf:about="https://example.com/distribution1>">
      <dcterms:license rdf:resource="http://creativecommons.org/publicdomain/zero/1.0/"/>
    </dcat:Distribution>

Ibland finns ingen xlink:href utan bara ett textvärde, för peka ut korrekta webbadresser bär man då ta fram en översättningstabell som är specifik för den organisationen. Till exempel, om det står CC1.0. ska man peka på adressen ovan. Var noga med att få till adresserna rätt, en förteckning över korrekta adresser till Creative Commons kan du finna i [kapitel 5.10 i DCAT-AP-SE specifikationen](https://docs.dataportal.se/dcat/sv/#5.10).

I NMDP4.0 introduceras en speciell vokabulär för ett antal [vanliga användningsrestriktioner](https://resources.geodata.se/codelist/metadata/anvandningsrestriktioner.xml). Följande värden ska översättas till de officiella webbadresserna i Creative Commons (notera att i tabellen nedan skriver vi inte ut hela adressen för användningsrestriktioner för att öka läsbarheten):

| Användningsrestriktion | Licensadress att använda |
| - | - |
| #CC01.0 | http://creativecommons.org/publicdomain/zero/1.0/ |
| #CCby4.0 | http://creativecommons.org/licenses/by/4.0/ |
| #CCby-sa4.0 | http://creativecommons.org/licenses/by-sa/4.0/ |