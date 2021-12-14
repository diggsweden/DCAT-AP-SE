# Konventioner i rekommendationerna

XML uttryck i dokumentrooten ligger inne i `gmd:MD_Metadata`, dvs uttrycket:

    <gmd:fileIdentifier>
       <gco:CharacterString>52eed4aa-7ef0-f034-1865-40590aca3f95</gco:CharacterString>
    </gmd:fileIdentifier>

Blir egentligen:

    <gmd:MD_Metadata>
       <gmd:fileIdentifier>
          <gco:CharacterString>52eed4aa-7ef0-f034-1865-40590aca3f95</gco:CharacterString>
       </gmd:fileIdentifier>
    </gmd:MD_Metadata>

Uttrycks som sägs ligga i IdentificationInfo ligger i:

    <gmd:MD_Metadata>
       <gmd:identificationInfo>
          <gmd:MD_DataIdentification>
              // Här
          </gmd:MD_DataIdentification>
       </gmd:identificationInfo>
    </gmd:MD_Metadata>

Uttryck som sägs ligga i DistributionInfo ligger i:

    <gmd:MD_Metadata>
       <gmd:distributionInfo>
          // Här
       </gmd:distributionInfo>
    </gmd:MD_Metadata>
