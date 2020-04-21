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
På [registrera.oppnadata.se](https://registrera.oppnadata.se) finns en verktygslåda där man kan ladda upp sin metadata och validera den mot DCAT-AP-SE. Man kan även konvertera till nyare versioner av DCAT-AP-SE, utforska och slå samman två eller flera kataloger till en katalog.

### Testa att skörda
För att tillåta testskördningar finns en så kallad sandlåda (sandbox på engelska) uppsatt med både en registrera och en dataportal.

Dvs. på [registrera.sandbox.dataportal.se](https://registrera.sandbox.dataportal.se) finns det möjlighet att lägga upp en test-organisation och få den skördad med samma infrastruktur som skördar till den skarpa skördningen. Resultatet blir sen synligt på [www.sandbox.dataportal.se](https://www.sandbox.dataportal.se).
