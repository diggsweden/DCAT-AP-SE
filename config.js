rdforms.spec({
  language: document.targetLanguage,
  namespaces: {
    spdx: 'http://spdx.org/rdf/terms#',
    adms: 'http://www.w3.org/ns/adms#',
    prov: 'http://www.w3.org/ns/prov#',
    dcatap: 'http://data.europa.eu/r5r/'
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
    'vc:hasAddress'
  ]
});
