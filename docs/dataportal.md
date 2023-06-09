# Sveriges dataportal

Sveriges dataportal samlar in information om datamängder via DCAT-AP-SE och tillhandahåller ett sökgränsnitt samt detaljvyer över varje datamängd.

## Metadata på dataportalen
### Vad visas
Alla metadatafält som följer DCAT-AP-SE visas upp på dataportalen. Viss metadata visas upp mer prominent, t.ex. titel, beskrivning, teman och format. Annan metadata kan man behöva klicka en gång till för att expandera eller gå till en detaljvy för att se.

### Vad visas inte
Inget hindrar olika aktörer att tillhandahålla ytterligare metadata som går bortom det som DCAT-AP-SE specificerar. Det kan vara metadata enligt andra profiler som Stat-DCAT-AP eller helt egna metadatafält.
Sådan ytterligare metadata skördas och finns tillgängligt via API:er men visas inte upp via användargränsnittet.

### Vilka fält är viktigast att tillhandahålla
De viktigaste fälten är de som är markerade som obligatoriska eller rekommenderade:

1. De är viktiga för att det ska vara lätt att söka efter och filtrera datamängder.
2. De lyfts fram i användargränsnittet för att ge användare en möjlighet till snabb överblick.
3. De är nyttiga för att ge användaren en möjlighet att bedömma om datamängden motsvarar vissa behov.

## Vilket stöd finns för mig som utvecklare

### Validera min metadata
På [sandbox.admin.dataportal.se/toolkit](https://sandbox.admin.dataportal.se/toolkit/catalog) finns en verktygslåda där man kan ladda upp sin metadata och validera den mot DCAT-AP-SE. Man kan även konvertera till nyare versioner av DCAT-AP-SE, utforska och slå samman två eller flera kataloger till en katalog.

### Testa att skörda
För att tillåta testskördningar finns en så kallad sandlåda (sandbox på engelska) uppsatt med både en Admin och en dataportal.

Dvs. på [https://sandbox.admin.dataportal.se](https://sandbox.admin.dataportal.se/start) finns det möjlighet att lägga upp en test-organisation och få den skördad med samma infrastruktur som skördar till den skarpa skördningen. Resultatet blir sen synligt på testinstansen av gränssnittet [www-sandbox.dataportal.se](https://www-sandbox.dataportal.se). 

## API Utforskning på distribution eller datatjänster
Om en datamängd eller datatjänst pekar ut en API beskrivning så kan man utforska API:et direkt på dataportalen. För att det ska fungera måste man peka ut antingen en Swagger eller en OpenAPI fil i antingen JSON eller Yaml formatet. Filen måste vara nåbar på en address där CORS för dataportal.se är påslaget.

* Uforska API på en distribution - använd fältet [länkade scheman](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcterms_conformsTo).
* Uforska API på en datatjänst - använd fältet [beskrivning åtkomstadress](https://docs.dataportal.se/dcat/sv/#dcat_DataService-dcat_endpointDescription).

Detektion av vilka API beskrivningar som finns görs en gång per dygn och rapporteras [i följande JSON rapport](https://admin.dataportal.se/detectedapis.json).

## API filtrering och självständiga datatjänster
På dataportalen söker man efter data och API:er. Det innebär att det man ser i träfflistan är en blandning av datamängder och datatjänster. Tyvärr innebär detta att det kan upplevas som att det finns dubletter i träfflistan då man får träff både på en datamängd och dess tillhörande datatjänst som ofta har är namngiven snarlikt.

För att komma runt detta problem filtrerar dataportalen bort alla datatjänster som enbart pekas ut av en enskild datamängd eftersom man ändå kan klicka sig vidare till datatjänsten via datamängdens distributioner.

Datatjänster som inte pekas ut av någon datamängd eller alternativt av många datamängder betraktas som självständiga datatjänster och visas alltid upp i träfflistan.

Dataportalen sätter en API markör på alla (självständiga) datatjänster samt på de datamängder (och distributioner) som har en koppling till en datatjänst. Det är möjligt att filtrera på denna markör för att få upp all data som är åtkomligt via API:er.

För de aktörer som inte har börjat använda datatjänster ännu finns en genväg. Inkludera förkortningen "API" (stora eller små bokstäver) någonstans i titeln på datamängden eller distributionen så sätts API markören.