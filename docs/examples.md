# Exempel på DCAT-AP-SE

Nedan länkas till två exempel med obligatorisk och rekommenderad metadata ifylld respektive. Båda exemplena finns uttryckta i de två vanligaste RDF formaten, dvs Turtle (medietyp `text/turtle`) och RDF/XML (medietyp `application/rdf+xml`).

**Exempel 1 - Obligatoriska metadata**
1. [Uttryckt i RDF/XML](../exempel/obligatoriskt.rdf)
2. [Uttryckt i Turtle](../exempel/obligatoriskt.ttl)

**Exempel 2 - Rekommenderade metadata**
1. [Uttryckt i RDF/XML](../exempel/rekommenderat.rdf)
4. [Uttryckt i Turtle](../exempel/rekommenderat.ttl)

Observera att exempel 2 innefattar både rekommenderade och obligatoriska metadata.
 
Notera också att i båda exemplen har instanser av alla de primära klasserna [Katalog](../sv/#dcat%3ACatalog), [Datamängd](../sv/#dcat%3ADataset), [Distribution](../sv/#dcat%3ADistribution), [Datatjänst](../sv/#dcat%3ADataService), [Aktör](../sv/#foaf%3AAgent) och [Kontaktuppgift](../sv/#vcard%3AOrganization) inkluderats för att visa vilken metadata som är obligatorisk / rekommenderad på dessa. Detta innebär dock att några relationer som inte är obligatoriska / rekommenderade har lagts till för att göra exemplena mer kompletta (så de hänger samman). Avvikelserna är:

1. Exempel 1 - att ha en kontaktuppgift är bara rekommenderat
2. Exempel 1 - att ha en distribution är bara rekommenderat
3. Exempel 1 & 2 - att peka ut en datatjänst från en distribution är valfritt

