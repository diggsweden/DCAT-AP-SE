window.spec2recs = {
  "1-bra-namn-ska-vara-korta-och-beskrivande": [
    "dcat_Catalog-dcterms_title",
    "dcat_Dataset-dcterms_title",
    "dcat_Distribution-dcterms_title",
    "dcat_DataService-dcterms_title",
  ],
  "2-översätt-fritextfält-till-andra-språk": [
    "dcat_Catalog-dcterms_title",
    "dcat_Dataset-dcterms_title",
    "dcat_Distribution-dcterms_title",
    "dcat_DataService-dcterms_title",
    "dcat_Catalog-dcterms_description",
    "dcat_Dataset-dcterms_description",
    "dcat_Distribution-dcterms_description",
    "dcat_DataService-dcterms_description",
    "dcat_Dataset-adms_versionNotes"
  ],
  "3-distributioner-motsvarar-samma-data-i-olika-format": [
    "dcat_Dataset-dcat_distribution",
    "dcat_Distribution-dcterms_format",
    "dcat_Distribution-dcterms_format-2",
    "dcat_Distribution-dcterms_format-3"
  ],
  "4-vissa-datamängder-delas-med-fördel-upp-i-flera-filer": [
    "dcat_Distribution-dcat_downloadURL",
    "dcat_Dataset-dcat_distribution"
  ],
  "5-att-koppla-samman-en-datamängd-med-en-arkivredovisning": [
    "dcat_Dataset-dcterms_identifier",
    "dcat_Dataset-dcat_distribution"
  ],
  "6-hur-en-datatjänst-används": [
    "dcat_Catalog-dcat_service",
    "dcat_Distribution-dcat_accessService"
  ],
  "7-utgivningsdatum-modifieringsdatum-och-uppdateringsfrekvens": [
    "dcat_Dataset-dcterms_issued",
    "dcat_Dataset-dcterms_modified",
    "dcat_Dataset-dcterms_accrualPeriodicity"
  ],
  "8-tidsperiod-och-tidsupplösning": [
    "dcat_Dataset-dcterms_temporal",
    "dcat_Dataset-dcat_temporalResolution"
  ]
};