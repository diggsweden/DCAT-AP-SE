rdforms.spec({
  language: document.targetLanguage,
  namespaces: {
    spdx: 'http://spdx.org/rdf/terms#',
    adms: 'http://www.w3.org/ns/adms#',
    prov: 'http://www.w3.org/ns/prov#'
  },
  bundles: [
    ['../bundle.json']
  ],
  main: [
    'dcat:Dataset',
    'dcat:DataService',
    'dcat:Catalog',
    'dcat:Distribution'
  ],
  supportive: [
    'dcat:contactPoint',
    'dcat:foaf:Agent',
    'dcat:Documentish'
  ]
});
