# Vanliga konstruktioner

## ResponsibleParty

På flera ställen (t.ex. i IdentificationInfo under sökvägen `gmd:pointOfContact`) finns instanser av `gmd:CI_ResponsibleParty`. Man kan särskilja dem på deras olika roller, t.ex. `originator` som motsvarar och ska uttryckas som  `dcterms:creator`. Nedan följer ett exempel på ett sådant uttryck:

    <gmd:pointOfContact>
      <gmd:CI_ResponsibleParty>
        <gmd:organisationName>
          <gco:CharacterString>Havs- och vattenmyndigheten</gco:CharacterString>
        </gmd:organisationName>
        <gmd:contactInfo>
          <gmd:CI_Contact>
            <gmd:address>
              <gmd:CI_Address>
                <gmd:electronicMailAddress>
                  <gco:CharacterString>mailto:info@havochvatten.se</gco:CharacterString>
                </gmd:electronicMailAddress>
              </gmd:CI_Address>
            </gmd:address>
          </gmd:CI_Contact>
        </gmd:contactInfo>
        <gmd:role>
          <gmd:CI_RoleCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_RoleCode" codeListValue="publisher"/>
        </gmd:role>
      </gmd:CI_ResponsibleParty>
    </gmd:pointOfContact>

I detta fall översätts till en foaf:Organization i RDF (RDF/XML där vi hittat på adressen till datamängden):

    <dcat:Dataset rdf:about="https://example.com/dataset1">
        <dcterms:publisher rdf:resource="http://dataportal.se/organisation/SE2021006420"/>
    </dcat:Dataset>
    <foaf:Organization rdf:about="http://dataportal.se/organisation/SE2021006420">
        <foaf:name>Havs- och vattenmyndigheten</foaf:name>
        <foaf:mbox rdf:resource="mailto:info@havochvatten.se"/>
        <dcterms:type rdf:resource="http://purl.org/adms/publishertype/NationalAuthority"/>
    </foaf:Organization>

Notera att vi lagt till informationen att det är en organisation (foaf:Organization snarare än foaf:Agent) då detta bättre motsvarar de krav som finns i NMDP4.0. Ovan är det också markerat att det är en nationell myndighet vilket inte går att utläsa i ISO19139 uttrycket, denna information kan utelämnas men vi har lagt till den då det i många fall är något man har koll på i mappningen.

I uttrycket ovan har vi också använt [referensprincipen](principles.md#referensprincipen) för att konstruera en URI för organisationen utifrån dess organisationsnummer.

Här följer en enkel tabell över hur de olika rollerna ska översättas:

|ISO19139|DCAT expression |
|-|-|
|owner | dcterms:publisher -> foaf:Organization |
|contactpoint | dcat:contactpoint -> vcard:Kind |
|originator | dcterms:creator -> foaf:Agent |
|publisher | attribution med rollen "publisher" |
|user | attribution med rollen "user"|
|distributor | attribution med rollen "distributor" |
|custodian | attribution med rollen "custodian" |
|resourceProvider | attribution med rollen "resourceProvider" |
|principalInvestigator | attribution med rollen "principalInvestigator"|
|author | attribution med rollen "author" |
|processor | attribution med rollen "processor" |

I alla fallen där det står `attribution med rollen "X"` ska man uttrycka på följande sätt:

    <dcat:Dataset rdf:about="https://example.com/dataset1">
        <prov:qualifiedAttribution rdf:nodeID="_:b1"/>
    </dcat:Dataset>
    <prov:Attribution rdf:nodeID="_:b1">
        <prov:agent rdf:resource="http://exampe.com/anOrganization"/>
        <dcat:role rdf:resource="X"/>
    </prov:Attribution>

Där `X` tar värden som `http://inspire.ec.europa.eu/metadata-codelist/ResponsiblePartyRole/author`.

## DescriptiveKeywords

I denna konstruktion i identificationInfo sektionen kan man ange både fria nyckelord såväl som klassificeringar som härrör från kontrollerade vokabulärer (thesaurus). Några vanliga vokabulärerna som uttrycks med DescriptiveKeywords är:

* GEMET
* Inspire spatial datateman
* Inspire prioriterade datamängder
* Inititativ (Svensk utökning)

Nedan ser vi ett exempel med två nyckelord från den kontrollerade vokabulären Inspire spatial datateman. 

    <gmd:descriptiveKeywords>
      <gmd:MD_Keywords>
        <gmd:keyword>
          <gmx:Anchor xlink:href="http://inspire.ec.europa.eu/theme/ac">Atmospheric conditions</gmx:Anchor>
        </gmd:keyword>
        <gmd:keyword>
          <gmx:Anchor xlink:href="http://inspire.ec.europa.eu/theme/mf">Meteorological geographical features</gmx:Anchor>
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
                  <gmd:CI_DateTypeCode codeList="http://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_DateTypeCode" codeListValue="publication" />
                </gmd:dateType>
              </gmd:CI_Date>
            </gmd:date>
          </gmd:CI_Citation>
        </gmd:thesaurusName>
      </gmd:MD_Keywords>
    </gmd:descriptiveKeywords>

Notera att ofta grupperas alla nyckelord som härrör till samma terminologi i samma `gmd:descriptiveKeywords` konstruktion, men inte alltid. 