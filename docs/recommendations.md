# Rekommendationer
Här kan du läsa rekommendationer om hur man bör tänka och tolka olika metadatafält i DCAT-AP-SE. 

## 1. Bra namn ska vara korta och beskrivande
En datamängd bör ges ett namn som är någorlunda kort och beskrivande. Som en princip bör man hålla sig under 10 ord.

Det kan vara frestande att inkludera utgivaren i titeln, t.ex. "Luftkvalitet i Sala". Men betänk då att denna information endast blir sökbar som fritext, vilket blir problem när man har datamängder från liknande orter, t.ex. så kommer en fritextsökning efter datamängder från "sala" inkludera även datamängder från "Uppsala". En bättre lösning är att förlita sig på utgivaren (dcterms:publisher) för varje datamängd. På samma sätt kan man argumentera för att titeln inte behöver inkludera tidsspan (t.ex. år), format eller annan information som bättre uttrycks i andra fält. Om samma utgivare har många datamängder som är snarlika kan det ändå vara rimligt att uttrycka det som skiljer dem åt i titeln, men då måste denna information uttryckas dubbelt, den får inte tas bort från de andra fälten där den egentligen hör hemma då det skulle försämra möjligheter till mer avancerad filtrering.

## 2. Översätt fritextfält till andra språk
Man ska översätta fritextfält som titel och beskrivning till åtminstone engelska. För de fält där man väljer mellan färdiga värden, t.ex. kategorier i form av URI:er, så finns redan översättningar till olika många språk.

## 3. Distributioner motsvarar samma data i olika format
En enskild datamängd kan man i många fall komma åt på olika sätt. Det vanligaste scenariot är att en datamängd finns uttryckt i flera format, t.ex. både i Excel och CSV. Men det kan också vara så att man kan komma åt en datamängd antingen genom en nattlig dump eller genom att göra slagningar mot ett API. I båda dessa två scenarior betraktar vi det som att det finns en datamängd med två olika distributioner. Distributionerna motsvarar samma data (samma datamängd) men i olika format eller via olika mekanismer för åtkomst.

## 4. Vissa datamängder delas med fördel upp i flera filer
**Denna rekommendation är överspelad, se istället rekommendation 19. Den ursprungliga rekommendationen står kvar nedan.**

Ibland vill man ge åtkomst till en datamängd via en mängd filer av samma slag, t.ex. uppdelade efter tid eller geografi. Det kan handla om att filerna blir för stora, att det över tid tillkommer nya filer eller bara att existerande system fungerar på det sättet. Som vi såg ovan är det inte lämpligt att ha en distribution per fil då filerna inte motsvarar olika sätt att komma åt samma data. Den lösningen vi istället valt i Sverige är att peka ut de olika filerna genom att upprepa `dcat:downloadURL` från en enskild distribution.Denna lösning är så länge specifik för Sverige i väntan på en mer permanent lösning i DCAT3, om du är nyfiken kan du läsa mer om [denna fråga i ärende 868](https://github.com/w3c/dxwg/issues/868#issuecomment-532769918).

För den som upprepar `dcat:downloadURL` kan det vara lämpligt att tillhandahålla en `dcterms:title` på varje URL för att ge användare en möjlighet att särskilja de olika filerna. Till exempel, om filerna motsvarar en tidsserie där varje fil innehåller ett år kan titeln helt enkelt vara året.

## 5. Att koppla samman en datamängd med en arkivredovisning
Datamängder som arkiveras hamnar i en arkivredovisning. Hur en datamängd arkiveras hur kan variera även om det finns så kallade Förvaltnings Gemensamma Specifikationer (FGS). För arkivinstitutioner som levererar till Nationella Arkiv Databasen (NAD) används standarden EAD som påbjuder användning av referenskoder. Referenskoder kan uppges på olika nivåer, exempelvis klassificeringsstruktur, strukturenhet, förvaringsenhet, beroende på hur informationen har strukturerats. Följande är ett exempel på en referenskod `SE/RA/420508.02`.
 
För att koppla samman en datamängd med arkivredovisningen finns två vägar att gå:

1. Man kan använda en referenskod till en nivå i arkivredovisningen som en identifierare (dcterms:identifier).
2. Man betraktar arkivet som ett annat sätt att komma åt datamängden, dvs en ytterligare distribution. Beroende på hur tillgängligt arkivet är får man antingen nöja sig med att ange en webbadress för åtkomst (dcat:accessURL) till en sida som ger vidare information om hur man kommer åt arkivet eller så kan man också ange en webbadress för nedladdning.  

Notera att man kan välja att använda båda alternativen.
Om man väljer alternativ 2 får man vara noga så man inte pekar på en gallrad version som isåfall måste representeras som en egen datamängd snarare än en distribution då den inte innehåller samma data. 

## 6. Hur en datatjänst används
I sin enklaste form kan man se en datatjänst som en beskrivning av ett API, dvs en digital tjänst som man kan anropa med olika parametrar för att få ut data från en eller flera datamängder. Rekommendationen är att för alla datamängder som är nåbara via API:er ska detta uttryckas med hjälp av en datatjänst som beskriver API:et i mer detalj. Kopplingen mellan datamängden och datatjänsten görs via en distribution som pekar ut datatjänsten via relationen [Åtkomst via datatjänst](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcat_accessService).

Flera datamängder kan peka ut samma datatjänst (via distributioner). Ibland kan en enskild datamängd peka ut samma datatjänst via flera olika distributioner. Detta händer framförallt när man vill berätta om att datatjänsten kan leverera flera olika format då detta bara kan uttryckas på distributionen, inte på datatjänsten.

I vissa fall finns datatjänster som är mer av processande karaktär och kan inte ses som enbart åtkomst till en datamängd. Ett gott exempel är hur en valutakonverterare är en datatjänst som utför beräkningar utifrån kunskap om växelkurser snarare än ger åtkomst till en ändlig datamängd. I dessa fall beskriver man datatjänsten utan att det finns en förbindelse via en distribution. Observera att i denna situation är det viktigt att tillhandahålla den information som behövs för att datatjänsten ska vara lätt att hitta och utvärdera självständigt, t.ex. utgivare, landningssida, dokumentation, tema, nyckelord etc.

## 7. Utgivningsdatum, modifieringsdatum och uppdateringsfrekvens
Det är viktigt att notera att utgivningsdatum och modifieringsdatum motsvarar den tidpunkt då datat i datamängden gavs ut respektive senast uppdaterats. Datumen refererar alltså **inte** till när man ändrat beskrivningen av datamängden. Vidare handlar uppdateringsfrekvens om hur ofta datat uppdateras, t.ex. årligen, månatligen eller dagligen, inte hur ofta man ser över beskrivningen av datamängden.

För datamängder som har en hög uppdateringsfrekvens är det inte rimligt att hålla modifieringsdatumet korrekt, särskilt inte om datumet underhålls manuellt. För datamängder som uppdateras mer sällan eller oregelbundet (typiskt en gång om året) är det däremot relevant att ha ett modifieringsdatum satt.   

## 8. Tidsperiod och tidsupplösning
De flesta datamängder har en tidsaspekt då de antingen motsvarar data som är insamlat eller giltigt under en viss tidsperiod. För datamängder som inte är avslutade, dvs fortsätter att öka över tiden, anger man ingen sluttid. Utöver tidsperiod kan datamängdens data ha olika tidsupplösning, t.ex. en datamängd som visar energiförbrukning kan innehålla data som går ner på sekundnivå medans befolkningsstatistik från SCB endast beskriver hur befolkningen ändras per år.

## 9. Utgivare, producent och andra aktörsroller

Med `utgivare` menas den organisation som är ansvarig för en datamängd. Ett sådant ansvar kan ta sitt uttryck på flera sätt, ofta innebär det att några av följande påståenden är sanna:

1. man har en utpekad informationsägare inom den egna organisationen.
2. man ansvarar för att göra säkerhetsklassning.
3. man levererar till Kungliga Biblioteket enligt lagen om e-plikt.
4. man svarar på begäran om utlämning av handlingar ur datamängden enligt tryckfrihetsförordningen.

Det är utgivaren som ansvarar att datamängden kommer med i en PSI-förteckning som därmed gör datamängden synlig på vår nationella dataportal.

I vissa situationer är producenten av datamängden inte samma som utgivaren. Det kan vara så att en myndighet tar hjälp av en annan organisation för att ta fram hela eller delar av datamängden. I de fallen kan man ange att den organisation är producent (eng. creator) av datamängden. Om man just producentrollen inte passar för att beskriva hur en annan organisation hjälper till i hantering av datamängden kan man använda fältet [övrig aktör](/dcat/sv/#prov%3AAttribution) för att ange detta. De aktörsroller som finns att välja på där är användare, distributör, förvaltare, leverantör, undersökningsledare, upphovsman, vidareförädlare, ägare.

Dessa aktörsroller kommer från INSPIRE-standarden där utgivare, prodcuent och kontaktuppgift är bortrensade för att inte möjliggöra två olika sätt att uttrycka samma aktörsroll.

Notera att om inget annat anges antas att producent (och alla övriga aktörsroller) är densamma som utgivaren, du behöver alltså inte ange detta explicit.

## 10. Tema och nyckelord

Det är rekommenderat att ange ett eller flera teman för varje datamängd. Dessa teman är framtagna för att kunna skapa en första grov indelning på en dataportal. De teman som etablerats syftar till att vara lättförståeliga, hänga samman ämnesmässigt samt också skapar en någorlunda jämn fördelning av datamängder.

Tyvärr räcker dessa 13 teman inte särskilt långt för att kategorisera datamängder, t.ex. det är helt klart att det finns många olika subkategorier inom trafik eller miljö som skulle kunna användas för att filtrera fram liknande datamängder. För detta syfte kan man komplettera tema med nyckelord. Nyckelord bör anges i singular, med små bokstäver och varje nyckelord bör bestå av ett eller om nödvändigt ett fåtal ord. Om det inte går att få in nyckelordet på ett fåtal ord är det sannolikt att du bör uttrycka det som en beskrivning istället.

Om man har nyckelord som motsvarar "ekonomi" och "faktura" ska de uttryckas som två separata literaler i RDF, inte som ett nyckelord med komma imellan. Ett nyckelord kan upprepas på flera olika språk, följaktligen är det alltid viktigt att ange språk per nyckelord. Om du har möjlighet så återanvänd gärna nyckelord mellan datamängder. T.ex. kan du se vilka nyckelord som redan används på datamängder genom att söka på vår nationella dataportal. 

## 11. Licenser

Det är rekommenderat att ange en licens per distribution. Att man inte anger det på datamängdsnivån har att göra med att olika licenser kan ha olika licenser, t.ex. olika upplösningar i en karttjänst.

När man anger en licens måste man peka ut en webbadress (URI) där licensen beskrivs. Då det finns väldigt många licenser kan vi inte tillhandahålla en komplett lista med alla möjliga licenser. Däremot har vi som en del av specifikationen listat de [vanligaste licenserna från Creative Commons](/dcat/sv/#dcat_Distribution-dcterms_license) för att tillhandahålla viss vägledning.

I vissa situationer kan en licens ha flera olika webbadresser, t.ex. CC BY 4.0 (CC är en förkortning av Creative Commons) kan läsas på svenska här:

    https://creativecommons.org/licenses/by/4.0/deed.sv   <-- FEL
    
Men, den korrekta webbadressen som man ska använda är den utan språk angivet, dvs denna:

     https://creativecommons.org/licenses/by/4.0/   <-- RÄTT
     
Det finns två huvudsakliga skäl till detta. Det första är att man vill kunna visa filtrera och visa upp ett kortare namn för licensen på olika dataportaler och då är det svårt att hålla koll på olika adresser som ska behandlas likvärdigt. Även om det skulle vara hanterligt på den Svenska nivån blir det ohanterligt på den Europeiska nivån dit all information skördas.
Det andra skälet är mer semantiskt, det ska vara tydligt CC-BY 4.0 är samma license i Sverige som i Tyskland. Hela syftet med att etablera välkända licenser som vi återanvänder är att minska behovet av att läsa långa licenstexter då vi redan har gjort det en gång och vet vad de innebär. Att behöva läsa CC-BY 4.0 på tyska bara för att försäkra sig om att det är samma villkor som på svenska skapar både merarbete och barriärer.

## 12. Språkangivelse

Många av fält, inklusive datamängdens titel, beskrivning, nyckelord och ursprung ska uttryckas med en kombination av text och språkangivelse. Språkangivelsen är en förutsättning för att man ska kunna välja rätt värde i olika presentationsgränssnitt. Dvs. på en engelsk webbsida vill man kunna plocka den titel som är på engelska och på en svensk webbsida det värde som är på svenska, se också rekommendation 2 om flerspråkighet.

Notera att även om det bara finns ett värde, t.ex en titel, är det viktigt ur ett tillgänglighetsperspektiv att ha en språkangivelse. (En skärmläsare som läser upp en engelsk sida kan bättre hantera att växla över och läsa upp titel på svenska om språket är satt korrekt för den delen.)

**Observation 1:** Språkangivelse på datamängden och distribution ska inte blandas samman med språkangivelse per fält. Språkangivelse på datamängden och distribution motsvarar vilket språk som används i själva datat (om något språk används där över huvud taget).

**Observation 2:** Språkangivelse på katalogen är lätt förvirrande då den på ytan tycks ersätta språkangivelse per fält. Men den är en indikation om vilka språk som katalogens metadata är översatt till och ersätter inte språkangivelse per fält. Språkangivelse på katalogen som helhet hjälper oss inte att avgöra vilken av två titlar som är på engelska och vilken som är på svenska.

## 13. Ange API beskrivning
En API beskrivning är en resurs som beskriver hur API:et fungerar. De två vanligaste uttrycken för API beskrivningar är Swagger och OpenAPI i formatet json eller yaml. Det är rekommenderat att man anger API beskrivningen som en webbadress på två ställen:

* På distributionen - använd fältet [länkade scheman](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcterms_conformsTo).
* På datatjänsten (om man har en) - använd fältet [beskrivning åtkomstadress](https://docs.dataportal.se/dcat/sv/#dcat_DataService-dcat_endpointDescription).

Observera att det INTE är lämpligt att ange API beskrivningen i fältet [Uppfyller](https://docs.dataportal.se/dcat/sv/#dcat_Dataset-dcterms_conformsTo).

## 14. Värdefulla datamängder
Enligt öppna datalagen, se [DIGGs vägledning](https://www.digg.se/kunskap-och-stod/oppna-och-delade-data/offentliga-aktorer/vagledning-om-oppna-datalagen), och dess [genomförandeförordning](https://eur-lex.europa.eu/legal-content/SV/TXT/?uri=PI_COM:C(2022)9562) är det ett krav för vissa aktörer att redovisa värdefulla datamängder. I samband med DCAT-AP-SE2.2.0 infördes stöd för hur man ska redovisa värdefulla datamängder. En fullständig beskrivning av hur man uttrycker värdefulla datamängder i DCAT-AP ges i specifikationen [DCAT-AP High Value Datasets](https://semiceu.github.io/DCAT-AP/releases/2.2.0-hvd), nedan följer en sammanfattning:

* Markerar de datamängder, distributioner och datatjänster som är värdefulla genom att peka på en [stabil adress](https://docs.dataportal.se/dcat/sv/#http%3A%2F%2Fdata.europa.eu%2Feli%2Freg_impl%2F2023%2F138%2Foj) för genomförandeförodningen i fältet [tillämpbar lagstiftning](https://docs.dataportal.se/dcat/sv/#dcat_Dataset-dcatap_applicableLegislation) (obs, fält med samma namn på [distribution](https://docs.dataportal.se/dcat/sv/#dcat_Distribution-dcatap_applicableLegislation) och [datatjänst](https://docs.dataportal.se/dcat/sv/#dcat_DataService-dcatap_applicableLegislation)).
* För de datamängder och datatjänster som är värdefulla måste man också ange en speciell [kategorisering](https://docs.dataportal.se/dcat/sv/#5.5) i fältet [kategori för värdefulla datamängder](https://docs.dataportal.se/dcat/sv/#dcat_Dataset-dcatap_hvdCategory), se också motsvarande [fält på datatjänst](https://docs.dataportal.se/dcat/sv/#dcat_DataService-dcatap_hvdCategory). Observera att denna kategori inte behöver anges på distributioner.
* Varje värdefull datamängd måste ha minst en distribution som är markerad som värdefull.
* För datatjänster som är värdefulla är det ett krav att man anger en kontakt och pekar ut dokumentation som informerar om tjänstens kvalitet (quality of service).
* För värdefulla datatjänster måste man peka ut den datamängd som datatjänst stödjer via fältet [försörjer datamängd](https://docs.dataportal.se/dcat/sv/#dcat_DataService-dcat_servesDataset) (det finns inga krav på självständiga datatjänster).

## 15. Datamängdsseriers dimensioner
De enskilda datamängder som ingår i en datamängdsserie ska alla ha samma karaktär men samtidigt vara självständiga. Det ska också vara givet hur man kombinerar datamängderna i en serie för att få tillgång till en större mängd data. Uppdelningen i enskilda datamängder förväntas ske enligt en enhetlig princip, en dimension. Följande dimensioner har beaktats och bedömts som lämpliga att dela upp data enligt:

1. Tidsdimension - varje datamängd i serien motsvarar typiskt data för ett tidsintervall, t.ex. en månad, ett kvartal eller ett år.
2. Rumsdimension - varje datamängd motsvarar ett avskilt geografiskt område, t.ex. en kommun, en region eller landsdel.
3. Kategoridimension - varje datamängd motsvarar en mängd data som kan särskiljas unikt från andra data, t.ex. statistik för olika åldersgrupper, elproduktion per energislag eller koldioxidutsläpp per fordonsslag.

Däremot är det inte tillrådligt att låta datamängder i en datamängdsserie ha olika karaktär som komplettera varandra. T.ex. om man har en datamängd som innefattar information om fastigheter och fastighetsägare så är det inte lämpligt att dela upp så att en datamängd innehåller fastigheter och en datamängd innehåller fastighetsägare och att de tillsammans utgör en datamängdsserie. Orsaken är att dessa två datamängderna inte har samma karaktär och att de inte heller är självständiga.

En följd av att alla datamängder i en datamängdsserie har samma karaktär och är självständiga är att om en specifikation anges (via `dcterms:conformsTo`), ska det vara samma för alla datamängder i serien.

## 16 Överlappande data i en datamängdsserie
Datamängderna i en i datamängdsserie kan innehålla samma data. Till exempel kan samma datamängdsserie innehålla datamängder som innehåller data per månad och även datamängder som innehåller data per år. Syftet kan vara att förenkla åtkomst till olika partitioner av data.

## 17. Antalet datamängder i en datamängdsserie
Man bör inte ha fler än 50 datamängder i en datamängdsserie. Till exempel innebär det för tidsdimensioner att man inte bör dela upp i mer än månatliga datamängder. Vid behov kan slå samman tidigare års månatliga datamängder till årliga datamängder och på det sättet minska mängden datamängder i en datamängdsserie.

Denna rekommendation syftar till att:

1. Förenkla för användare att hitta till rätt data.
2. Förenkla gränssnittet i dataportalen.

## 18. Inga datamängdsserier i datamängdsserier
Enligt DCAT är en datamängdsserie också en datamängd och därmed är det tillåtet att datamängdsserier får ingå i andra datamängdsserier. I Sverige har vi valt att inte tillåta detta av samma skäl som vi begränsat antalet datamängder i en datamängdsserie (rekommendation 17). Dvs vi vill förenkla för använvändare att hitta till rätt data och också förenkla gränssnittet i dataportalen.

## 19. Alternativ till datamängdsserier
Datamängdsserier är ibland exakt vad man behöver. Men i vissa situationer kan det upplevas som onödigt komplext, till exempel på grund av den extra metadata som behöver skapas / underhållas. Det innebär att datamängdsserier inte alltid är det bästa valet för data som uppdateras periodiskt, låt oss kort lista andra alternativ:

1. Uppdatera en distributionen som motsvarar en fil så den innefattar mera data (uppdatera filen).
2. Uppdatera en distributionen som motsvarar en packetering genom att lägga till fler filer (typiskt en zip-fil som byts ut mot en ny zip-fil med fler filer).
3. Lägg upp flera filer på en publik delningsyta och peka ut den (via `dcat:accessURL` och inte `dcat:downloadURL`).
4. Skapa ett specifikt API (som beskrivs som en datatjänst som pekas ut från datamängdens distribution via `dcat:accessService`) där man kan få ut olika stora mängder data beroende på hur man frågar.
5. Lägg till flera filer på en distribution (upprepa `dcat:accessURL` och `dcat:downloadURL`)

Obs, alternativ 5 motsvarar den lösning som togs fram i Sverige i väntan på att arbetet med datamängdsserier mognade och beskrivs i rekommendation 4. Detta alternativ kommer fortsättningsvis att stödjas av dataportalen för att vara bakåtkompatibel med DCAT-AP-SE v. 2.2.0 under en tid framåt. Dataportalen kan eventuellt komma att göra en automatisk transform till datamängdsserier för att vara kompatibel med skördning till data.europa.eu. Därmed är det rekommenderat för mjukvaruleverantörer att migrera över till antingen datamängdsserier eller alternativ 1-4. 

Notera att vilket angreppsätt man än tar bör man tänka på att man inte tappar bort det ursprungliga syftet med uppdelningen, oftast är det en av följande tre:

1. Dela upp stora datamängder för mer hanterlig åtkomst.
2. Ge direkt åtkomst till partitioner av data som är efterfrågade var för sig.
3. Förenkla uppdatering av data för dataägaren.

## 20. Datatjänster för datamängdsserier
När man vill erbjuda en datatjänst (API) för all data i en datamängdsserie är det inte lämpligt att skapa en distribution på varje datamängd i serien (som är rekommendationen för datamängder som inte ligger i datamängdsserier). Istället räcker det att man skapar en datatjänst och pekar ut datamängdsserien via `dcat:servesDataset`.

## 21. Egenskaper med samma värde på datamängder i datamängdsserier
Datamängder som är i samma datamängdsserie ska ha samma karaktär (se rekommendation 15). Det medför att för alla datamängder i en datamängdsserie finns ett antal fält som inte bör skilja sig åt sinsemellan. Om samma fält uttrycks på datamängdsserien själv bör de vara samma även där. Detta inkluderar fälten utgivare, nyckelord, kategori, tillämplig lagstiftning, kategori för värdefulla datamängder, kategori för grunddata, uppfyller, ingångssida, relaterad resurs, kvalificerad relaterad resurs samt dokumentation.

## 22. Publicering av skyddade data enligt dataförvaltningsförordningen
Du som behöver berätta om datamängder, datatjänster eller datamängdsserier enligt dataförvaltningsförordningen måste följa vissa regler för att dyka upp i EUs register över skyddade data. Följande krav gäller:

1. På datamängden, datatjänsten eller datamängdsserien behöver `titel`, `beskrivning`, `utgivare` och minst en distribution tillhandahållas.
2. På datamängden, datatjänsten eller datamängdsserien behöver `åtkomsträttigheter` vara satt till antingen `begränsad` eller `ej offentlig`.
3. För distributioner på datamängder behöver minst `webbadress för åtkomst`, `format`, `storlek` samt antingen `licens` eller en `rättighetsförklaring` anges.