# DCAT-AP-SE

I det här Github-arkivet hanterar vi den svenska anpassningen till DCAT-AP som pågår under hösten 2019 på uppdag av [Myndigheten för digital förvaltning (DIGG)](https://www.digg.se).

Resultatet av det pågående arbetet kan ses här: [https://diggsweden.github.io/DCAT-AP-SE/](https://diggsweden.github.io/DCAT-AP-SE/)

Startpunkten är den [tidigare specifikationen som togs fram på uppdrag av VINNOVA](https://lankadedata.se/spec/DCAT-AP-SE/)
och som för närvarande stöds av öppnadata.se. Till detta kommer följande att beaktas:

- [Data Catalog Vocabulary (DCAT) - W3C Recommendation 16 January 2014](https://www.w3.org/TR/vocab-dcat/) - stabil.
- [DCAT Application Profile for data portals in Europe Version 1.2.1](https://joinup.ec.europa.eu/release/dcat-ap/121) - stabil.
- [Rekommendation och svensk anpassning av DCAT-AP - 2018-06-20, Riksarkivet/SIS](https://oppnadata.se/wp-content/uploads/2018/06/Bilaga_8_DCAT-AP1.1-Svensk-rekommendation.pdf) - stabil
- [Data Catalog Vocabulary (DCAT) - Version 2, W3C Editor's Draft](https://w3c.github.io/dxwg/dcat/) - under utveckling, färdig oktober.
- [Major semantic release of DCAT-AP 1.3](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/news/dcat-ap-releases-2019)
- [D02.01 Draft specification BReg-DCAT-AP - 2019-07-01 Editor's Draft](https://joinup.ec.europa.eu/solution/abr-specification-registry-registries) - under utveckling.

(*) Driftsattes aldrig på registrera.oppnadata.se.

## Arbetsprocess
Se [separat dokument](process/index.md).

## Specifikationens delar

Specifikationen kan delas upp i två delar.

1. Markdown dokument i katalogen [docs](docs) som genereras av Jekyll på Github pages
2. Metadata specifikationen som drivs av en JSON konfiguration

Metadata specifikationen förvaltas på både engelska och svenska.

Observera att JSON konfigurationen är uppdelad i en mängd olika JSON filer (för ökad läsbarhet och förvaltning)
som byggs ihop med ett node.js script till en stor JSON fil för att göra renderingen snabbare (minska mängden requests).
Så här bygger man:

    node buildBundle.js
    
Resultatet är att filen `bundle.json` uppdateras vilken sedemera laddas av metadata specifikationen vid rendering.

## Hur man ger återkoppling

- Skapa nya ärenden
- Kommentera på existerande
- Skapa pull-requests för konkreta ändringar
- Delta i referensgruppen, hör av dig till [oppnadata@digg.se](mailto:oppnadata@digg.se) om du vill ingå där
- I slutet av processen är det möjligt att delta i ett möte med en större grupp med intressenter