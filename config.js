rdforms.spec({
  language: document.targetLanguage,
  namespaces: {
    spdx: 'http://spdx.org/rdf/terms#',
    adms: 'http://www.w3.org/ns/adms#'
  },
  bundles: [
    ['../bundle.json']
  ],
  main: [
    'dcat:Dataset',
    'dcat:Catalog',
    'dcat:Distribution'
  ],
  supportive: [
    'dcat:contactPoint',
    'dcat:foaf:Agent',
    'dcat:Documentish'
  ]
});
