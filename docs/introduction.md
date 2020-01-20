# Introduktion till DCAT-AP-SE

Svenska myndigheter är enligt PSI-lagen skyldiga att upprätta förteckningar över de typer av handlingar som
vanligen kan tillhandahållas elektroniskt för vidareutnyttjande. Dessa så kallade PSI-förteckningar ska
dessutom kunna skördas och tillgänggöras via den nationella dataportalen öppnadata.se i enlighet med kraven
i PSI-lagen. Syftet med att samla PSI-förteckningar i en gemensam dataportal är att underlätta för både de som
vill publicera datamängder och de som vill använda dem. Notera att även organisationer som inte berörs av PSI-lagen kan välja att publicera en förteckningar till öppnadata.se.


En förutsättning för att dataportalen ska kunna skörda och tillgängliggöra PSI-förteckningar är att de publiceras enligt en gemensam metadataspecifikation. Den metadataspecifikation som ska användas kallas för DCAT-AP-SE och är en anpassning (en så kallad profil) av den europeiska metadataspecifikationen DCAT-AP. DCAT-AP är i sin tur är en anpassning (profil) av den internationella rekommendationen DCAT som utges av W3C.

## Bakgrund lagar och direktiv

EU-kommissionen antog 2003 det så kallade [PSI-direktivet (2003/98/EG)](https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX:32003L0098) i syfte att göra offentlig information mer tillgänglig. Det innebär bland annat att olika aktörer i samhället ska kunna använda offentlig information för att skapa nya produkter och tjänster. Direktivet införlivades i svensk lagstiftning genom [PSI-lagen (Lag (2010:566) om vidareutnyttjande av handlingar från den offentliga förvaltningen)](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/lag-2010566-om-vidareutnyttjande-av-handlingar_sfs-2010-566)

Enligt 11:e paragrafen i PSI-lagen ska en myndighet informera om avgifter, inklusive beräkningsgrund, samt andra villkor för vidareutnyttjande av handlingar.

## Bakgrund metadataspecifikationen

Under hösten 2014 togs en första [nationell metadataspecifikation fram på uppdrag av VINNOVA](https://lankadedata.se/spec/DCAT-AP-SE/) vilken baserades på:
- [DCAT Application Profile for data portals in Europe Version 1.01](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/release/10) - stabil.
- [Data Catalog Vocabulary (DCAT) - W3C Recommendation 16 January 2014](https://www.w3.org/TR/vocab-dcat/) - stabil.

Under hösten 2019 har en arbetsgrupp jobbat på att uppdatera denna specifikation vilket baserats på:
- [DCAT Application Profile for data portals in Europe Version 1.2.1](https://joinup.ec.europa.eu/release/dcat-ap/121) - stabil.
- [Rekommendation och svensk anpassning av DCAT-AP - 2018-06-20, Riksarkivet/SIS](https://oppnadata.se/wp-content/uploads/2018/06/Bilaga_8_DCAT-AP1.1-Svensk-rekommendation.pdf) - stabil (*)
- [Major semantic release of DCAT-AP 2.0](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/news/dcat-ap-releases-2019) - stabil.
- [Data Catalog Vocabulary (DCAT) - Version 2, W3C Editor's Draft](https://w3c.github.io/dxwg/dcat/) - under utveckling.
- [D02.01 Draft specification BReg-DCAT-AP - 2019-07-01 Editor's Draft](https://joinup.ec.europa.eu/solution/abr-specification-registry-registries) - under utveckling.

(*) Driftsattes aldrig på registrera.oppnadata.se.

## Syfte och behov

DCAT-AP-SE har som huvudsyfte att möta de behoven som uppkommer ur PSI-direktivet och den svenska PSI-lagen. Detta innebär rent konkret:

1. Regler kring hur tillgång till data ges vilket ställer krav på icke-diskriminering, avgifter, och hur eventuell exklusiv tillgång får ges.
2. Krav på tillgängligörande av så kallade PSI-förteckningar om vilka data som finns. 

Samtidigt är det viktigt att också främja de målsättningar som ligger grunden till lagen, t.ex:

1. Transparans för medborgare.
2. Effektiviering inom den offentliga sektorn.
3. Främja innovation genom en ny data-marknad.

Då DCAT-AP-SE används för att samla in information till en nationell dataportal är det viktigt att den metadata som samlas in är relevant för de aktörer som använder portalen, vilket innefattar både privat och offentlig sektor såväl som enskilda medborgare. Man ska enkelt kunna hitta det man söker efter och också förstå om data passar för de syften man har både innehållsmässigt och tekniskt.

## Avgränsningar

DCAT-AP-SE syftar **inte** till att stödja insamling av:
1. datamängderna själva då en sådan central hantering skulle vara problematisk ur många perspektiv
2. information om renodlade tjänster (såvida inte tjänsterna är ett sätt att komma åt datamängder).

Dock för att kunna möta syfte och behov kring DCAT-AP-SE kan insamling / förteckningar av följande behövas:
1. Standarder / specifikationer som beskriver datamängdernas uttryck
2. Begrepp och informationsmodeller som beskriver innehållet i datamängderna
3. Showcases / goda exempel av hur datamängder har använts 
4. Förslag på användning av datamängder
5. Förfrågningar efter datamängder
