var spec2recs = {
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
  ],
  "9-utgivare-producent-och-andra-aktörsroller": [
    "dcat_Dataset-dcterms_publisher",
    "dcat_Dataset-dcterms_creator",
    "dcat_Dataset-prov_qualifiedAttribution"
  ],
  "10-tema-och-nyckelord" : [
    "dcat_Dataset-dcat_theme",
    "dcat_Dataset-dcat_keyword"
  ],
  "11-licenser" : [
    "dcat_Distribution-dcterms_license",
    "dcat_Distribution-dcterms_license-2"
  ],
  "12-språkangivelse": [
    "dcat_Catalog-dcterms_title",
    "dcat_Dataset-dcterms_title",
    "dcat_Distribution-dcterms_title",
    "dcat_DataService-dcterms_title",
    "dcat_Catalog-dcterms_description",
    "dcat_Dataset-dcterms_description",
    "dcat_Distribution-dcterms_description",
    "dcat_DataService-dcterms_description",
    "dcat_Dataset-adms_versionNotes",
    "dcat_Dataset-dcterms_provenance"
  ]
};

rdforms.spec({
  language: document.targetLanguage,
  namespaces: {
    spdx: 'http://spdx.org/rdf/terms#',
    adms: 'http://www.w3.org/ns/adms#',
    prov: 'http://www.w3.org/ns/prov#',
    dcatap: 'http://data.europa.eu/r5r/',
    schema: 'http://schema.org/'
  },
  bundles: [
    ['../bundle.json']
  ],
  main: [
    'dcat:Catalog',
    'dcat:Dataset',
    'dcat:Distribution',
    'dcat:DataService',
    'dcat:foaf:Agent',
    'dcat:contactPoint',
  ],
  supportive: [
    'foaf:Document',
    'dcterms:LicenseDocument',
    'dcterms:Standard',
    'dcat:dcterms:spatial_bb_da',
    'dcat:dcterms:temporal_da',
    'dcat:odrs:RSSA',
    'dcat:prov:qualifiedAttribution',
    'dcat:qualifiedRelation',
    'dcat:dcterms:provenance_da',
    'dcat:spdx:checksum_di',
    'vc:hasTelephone',
    'vc:hasAddress',
    'schema:Offer'
  ],
  onDone: function() {
    window.addRecommendations(document.targetLanguage, spec2recs);
    var pos = document.location.hash;
    if (pos) {
      document.getElementById(pos.substr(1)).scrollIntoView();
    }
  }
});
