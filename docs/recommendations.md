# Rekommendationer
Följande rekommendationer handlar om hur man ska tänka kring olika metadatafält i DCAT-AP-SE.

## 1. Bra namn ska vara korta och beskrivande
En datamängd bör ges ett namn som är någorlunda kort och beskrivande. Som en princip bör man hålla sig under 10 ord.

Det kan vara frestande att inkludera utgivaren i titeln, t.ex. "Luftkvalitet i Sala". Men betänk då att denna information endast blir sökbar som fritext, vilket blir problem när man har datamängder från liknande orter, t.ex. så kommer en fritextsökning efter datamängder från "sala" inkludera även datamängder från "Uppsala". En bättre lösning är att förlita sig på utgivaren (dcterms:publisher) för varje datamängd. På samma sätt kan man argumentera för att titeln inte behöver inkludera tidsspan (t.ex. år), format eller annan information som bättre uttrycks i andra fält. Om samma utgivare har många datamängder som är snarlika kan det ändå vara rimligt att uttrycka det som skiljer dem åt i titeln, men då måste denna information uttryckas dubbelt, den får inte tas bort från de andra fälten där den egentligen hör hemma då det skulle försämra möjligheter till mer avancerad filtrering.

## 2. Översätt fritextfält till andra språk
Det är en bra idé att översätta fritextfält som titel och beskrivning iallafall till engelska.
I dagsläget automatöversätter Europeiska Data Portalen ett antal fält, vilket har sina begränsningar, särskilt på korta och kärnfulla titlar. För de fält där man väljer mellan färdiga värden, t.ex. kategorier i form av URI:er, så finns redan översättningar till olika många språk.

## 3. Distributioner motsvarar samma data i olika format
En enskild datamängd kan man i många fall komma åt på olika sätt. Det vanligaste scenariot är att en datamängd finns uttryckt i flera format, t.ex. både i Excel och CSV. Men det kan också vara så att man kan komma åt en datamängd antingen genom en nattlig dump eller genom att göra slagningar mot ett API. I båda dessa två scenarior betraktar vi det som att det finns en datamängd med två olika distributioner. Distributionerna motsvarar samma data (samma datamängd) men i olika format eller via olika mekanismer för åtkomst.

## 4. Vissa datamängder delas med fördel upp i flera filer
Ibland vill man ge åtkomst till en datamängd via en mängd filer av samma slag, t.ex. uppdelade efter tid eller geografi. Det kan handla om att filerna blir för stora, att det över tid tillkommer nya filer eller bara att existerande system fungerar på det sättet. Som vi såg ovan är det inte lämpligt att ha en distribution per fil då filerna inte motsvarar olika sätt att komma åt samma data. Den lösningen vi istället valt i Sverige är att peka ut de olika filerna genom att upprepa `dcat:downloadURL` från en enskild distribution.Denna lösning är så länge specifik för Sverige i väntan på en mer permanent lösning i DCAT3, om du är nyfiken kan du läsa mer om [denna fråga i ärende 868](https://github.com/w3c/dxwg/issues/868#issuecomment-532769918). 

## 5. Att koppla samman en datamängd med en arkivredovisning
Datamängder som arkiveras hamnar i en arkivredovisning. Hur en datamängd arkiveras hur kan variera även om det finns så kallade Förvaltnings Gemensamma Specifikationer (FGS). För arkivinstitutioner som levererar till Nationella Arkiv Databasen (NAD) används standarden EAD som påbjuder användning av referenskoder. Referenskoder kan uppges på olika nivåer, exempelvis klassificeringsstruktur, strukturenhet, förvaringsenhet, beroende på hur informationen har strukturerats. Följande är ett exempel på en referenskod `SE/RA/420508.02`.
 
För att koppla samman en datamängd med arkivredovisningen finns två vägar att gå:
1. Man kan använda en referenskod till en nivå i arkivredovisningen som en identifierare (dcterms:identifier).
2. Man betraktar arkivet som ett annat sätt att komma åt datamängden, dvs en ytterligare distribution. Beroende på hur tillgängligt arkivet är får man antingen nöja sig med att ange en webbadress för åtkomst (dcat:accessURL) till en sida som ger vidare information om hur man kommer åt arkivet eller så kan man också ange en webbadress för nedladdning.  

Notera att man kan välja att använda båda alternativen.
Om man väljer alternativ 2 får man vara noga så man inte pekar på en gallrad version som isåfall måste representeras som en egen datamängd snarare än en distribution då den inte innehåller samma data. 

## 6. Hur en datatjänst används
I sin enklaste form kan man se en datatjänst som en beskrivning av ett API, dvs en digital tjänst som man kan anropa med olika parametrar för att få ut data från en eller flera datamängder. Innan introduktionen av datatjänst var enda sättet att beskriva ett API som en distribution där man endast kunde använda en kombination av beskrivande text, extern dokumentation och länkade scheman för att berätta om API:ets beskaffning. Med hjälp av en datatjänst kan man nu beskriva API:et i mer detalj och peka på det från distributionen.
Vän av ordning kanske tycker att ytterligare fält skulle kunna läggas till på en distribution istället för att introducera en datatjänst. Men det finns i huvudsak tre goda argument för modellen där datatjänst är separat från distribution:
1. Det motsvarar bättre hur information representeras inom geodata området vilket leder till bättre interoperabilitet.
2. Om ett enskilt API innehåller data för flera datamängder slipper man upprepa informationen.
3. Vissa datatjänster har en mer processande karaktär och kan inte ses som enbart åtkomst till en datamängd. Ett gott exempel är hur en valutakonverterare är en datatjänst som utför beräkningar utifrån kunskap om växelkurser snarare än ger åtkomst till en ändlig datamängd.

Utifrån detta kan vi beskriva två olika scenarior:

**A. Hur man använder datatjänster för datamängder**
1. Skapa en datamängd och peka ut den från katalogen.
2. Skapa en distribution och peka ut den från datamängden.
3. Beskriv ditt API som en datatjänst och peka ut den från distributionen.
4. Ange på distributionen vilket format man får tillbaka från API:et.

Obs 1, i detta fall pekar vi inte ut datatjänsten från katalogen. Det är möjligt att pekar från datatjänsten till datamängden, men då vi pekar från distributionen till datatjänsten är detta onödigt.

Obs 2, om möjligt bör man bara beskriva ett API som en datatjänst en gång och peka på samma instans från flera distributioner. 

**B. Hur man beskriver datatjänster oberoende av datamängder** 
1. Beskriv ditt API som en datatjänst
2. Peka ut datatjänsten från katalogen

För scenario B finns inget visningsstöd i den nationella dataportalen.

## 7. Utgivningsdatum, modifieringsdatum och uppdateringsfrekvens
Det är viktigt att notera att utgivningsdatum och modifieringsdatum motsvarar den tidpunkt då datat i datamängden gavs ut respektive senast uppdaterats. Datumen refererar alltså **inte** till när man ändrat beskrivningen av datamängden. Vidare handlar uppdateringsfrekvens om hur ofta datat uppdateras, t.ex. årligen, månatligen eller dagligen, inte hur ofta man ser över beskrivningen av datamängden.

För datamängder som har en hög uppdateringsfrekvens är det inte rimligt att hålla modifieringsdatumet korrekt, särskilt inte om datumet underhålls manuellt. För datamängder som uppdateras mer sällan eller oregelbundet (typiskt en gång om året) är det däremot relevant att ha ett modifieringsdatum satt.   

## 8. Tidsperiod och tidsupplösning
De flesta datamängder har en tidsaspekt då de antingen motsvarar data som är insamlat eller giltigt under en viss tidsperiod. För datamängder som inte är avslutade, dvs fortsätter att öka över tiden, anger man ingen sluttid. Utöver tidsperiod kan datamängdens data ha olika tidsupplösning, t.ex. en datamängd som visar energiförbrukning kan innehålla data som går ner på sekundnivå medans befolkningsstatistik från SCB endast beskriver hur befolkningen ändras per år.