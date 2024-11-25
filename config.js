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
  ],
  "13-ange-api-beskrivning": [
    "dcat_Distribution-dcterms_conformsTo",
    "dcat_DataService-dcat_endpointDescription"
  ],
  "14-vardefulla-datamangder": [
    "dcat_Dataset-dcatap_applicableLegislation",
    "dcat_Dataset-dcatap_hvdCategory",
    "dcat_Dataset-dcat_distribution",
    "dcat_Distribution-dcatap_applicableLegislation",
    "dcat_DataService-dcatap_applicableLegislation",
    "dcat_DataService-dcatap_hvdCategory",
    "dcat_DataService-dcat_contactPoint",
    "dcat_DataService-foaf_page",
    "dcat_DataService-dcat_servesDataset"
  ],
  "21-egenskaper-med-samma-varde-pa-datamangder-i-datamangdsserier": [
    "dcat_DatasetSeries-dcterms_publisher",
    "dcat_Dataset-dcterms_publisher",
    "dcat_DatasetSeries-dcat_keyword",
    "dcat_Dataset-dcat_keyword",
    "dcat_DatasetSeries-dcat_theme",
    "dcat_Dataset-dcat_theme",
    "dcat_DatasetSeries-dcatap_applicableLegislation",
    "dcat_Dataset-dcatap_applicableLegislation",
    "dcat_DatasetSeries-dcatap_hvdCategory",
    "dcat_Dataset-dcatap_hvdCategory",
    "dcat_DatasetSeries-dcterms_subject",
    "dcat_Dataset-dcterms_subject",
    "dcat_DatasetSeries-dcterms_conformsTo",
    "dcat_Dataset-dcterms_conformsTo",
    "dcat_DatasetSeries-dcat_landingPage",
    "dcat_Dataset-dcat_landingPage",
    "dcat_DatasetSeries-dcterms_relation",
    "dcat_Dataset-dcterms_relation",
    "dcat_DatasetSeries-dcat_qualifiedRelation",
    "dcat_Dataset-dcat_qualifiedRelation",
    "dcat_DatasetSeries-foaf_page",
    "dcat_Dataset-foaf_page",
  ]
};

rdforms_specs.init({
  language: document.targetLanguage,
  namespaces: {
    spdx: 'http://spdx.org/rdf/terms#',
    adms: 'http://www.w3.org/ns/adms#',
    prov: 'http://www.w3.org/ns/prov#',
    dcatap: 'http://data.europa.eu/r5r/',
    schema: 'http://schema.org/',
    org: 'https://www.w3.org/ns/org#'
  },
  bundles: [
    ['../bundle.json']
  ],
  main: [
    'dcat:Catalog',
    'dcat:Dataset',
    'dcat:Distribution',
    'dcat:DataService',
    'dcat:DatasetSeries',
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
