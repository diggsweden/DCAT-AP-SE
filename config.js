rdforms.spec({
  language: document.targetLanguage,
  bundles: [
    ['../bundle.json']
  ],
  main: [
    'dcat:OnlyDataset',
    'dcat:OnlyCatalog',
    'dcat:OnlyDistribution'
  ],
  supportive: [
    'dcat:contactPoint',
    'dcat:foaf:Agent',
    'dcat:Documentish'
  ]
});
