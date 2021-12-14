# Obligatoriska fält - Geodata

## Datamängd

### Titel
Återfinns i IdentificationInfo under sökvägen:

    gmd:citation>gmd:CI_Citation>gmd:title>gco:CharacterString

Språk sätts enligt [språkprincipen](principles.md#sprakprincipen).

### Beskrivning
Återfinns i IdentificationInfo under sökvägen:

    gmd:abstract>gco:CharacterString

Språk sätts enligt [språkprincipen](principles.md#sprakprincipen).

### Utgivare
Återfinns i IdentificationInfo som en `gmd:CI_ResponsibleParty` under sökvägen `gmd:pointOfContact`, när rollen är `owner`.

Se mer detaljerad information under [gemensamma konstruktioner - ResponsibleParty](common.md#responsibleparty).

## Distribution

### Webbadress för åtkomst

Återfinns inne i en `gmd:MD_Distribution` under DistributionInfo, det kan se ut som:

    <gmd:transferOptions>
      <gmd:MD_DigitalTransferOptions>
        <gmd:onLine>
          <gmd:CI_OnlineResource>
            <gmd:linkage>
              <gmd:URL>http://geodata.havochvatten.se/geoservices/limniska-vattentypsregioner/ows?</gmd:URL>
            </gmd:linkage>
            </gmd:onLine>
          </gmd:MD_DigitalTransferOptions>
        </gmd:transferOptions>
      </gmd:MD_Distribution>
    </gmd:distributionInfo>

Notera att i den svenska implementationen finns samma information även duplicerad under en snarlik path under `gmd:distributor` inne i `md:MD_Distribution`, denna kan ignoreras.

I RDF/XML blir uttrycket:

    <dcat:Distribution rdf:about="https://example.com/distribution1">
       <dcat:accessURL rdf:resource="http://geodata.havochvatten.se/geoservices/limniska-vattentypsregioner/ows?"/>
    </dcat:Distribution>
