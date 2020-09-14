# Publicera metadata på Sveriges dataportal

Det ska vara enkelt för potentiella användare att hitta det man söker efter och förstå om data passar för de ändamål man har, både innehållsmässigt och tekniskt. Därför är det viktigt att den metadata som samlas in är standardiserad, relevant och aktuell för de aktörer som använder portalen.

Sveriges dataportal synliggör information om datamängder (d.v.s. metadata) där själva datamängderna och åtkomstpunkterna finns publicerade hos olika aktörer. Detta går till genom att Sveriges dataportal automatiskt inhämtar, ”skördar”, informationen hos publicerande aktör. En aktör kan vara både från offentlig och privat sektor samt från civilsamhället.

En förutsättning för att dataportalen ska kunna skörda och därmed synliggöra information om datamängder är att aktörerna upprättar och publicerar informationen enligt en gemensam och standardiserad metadataspecifikation. Den specifikationen heter DCAT-AP-SE och är speciellt framtagen för att passa Sveriges dataportal på grund av den är tillräckligt övergripande för att passa inhämtning av metadata från olika typer av organisationer och datadomäner. Det möjliggör en enhetlig beskrivning av datamängder för att förenkla insamling, sökning och presentation av data på Sveriges dataportal.

Specifikationen är uppbyggd av olika klasser. Klasserna innehåller obligatoriska, rekommenderade och valfria fält.

## Syfte och målgrupp

Den här dokumentationen syftar till att ge riktlinjer och rekommendationer för det tekniska ramverk som ligger till grund för hur metadata ska publiceras till Sveriges dataportal. Målgruppen är primärt utvecklare och metadataexperter. Även andra målgrupper kan ha nytta av informationen. 

# Innehåll och förklaringar

- [Skördningsspecifikation](docs/harvesting.md) - instruktioner för hur man blir skördad till [Sveriges dataportal](https://dataportal.se)
- [Metadata på dataportalen](docs/dataportal.md) - så visas metadata på Sveriges dataportal och information om validering och sandlåda
- [Exempel](docs/examples.md) - exempel som visar obligatorisk och rekommenderad metadata uttryckt i Turtle och RDF/XML
- [Metadataspecifikation](/dcat/sv){target=_blank} - information om det exakta metadatauttrycket, finns också på [engelska](/dcat/en){target=_blank}.
- [Rekommendationer](docs/recommendations.md) - information om hur man bör beskriva och tolka de olika fälten i metadatan.
- [Vanliga frågor](docs/faq.md) - frågor kring specifikationen, skördning och kopplingen till portalen.

## Fördjupningar
- [Interoperabilitet, standarder och profiler](docs/standards.md) - likheter och skillnader till DCAT-AP, BREG, DCAT etc.
- [Avvikelser och ändringslogg](docs/changes.md) - vad som skiljer sig i den svenska profilen visavi DCAT-AP och vad som ändrats sedan förra versionen.
