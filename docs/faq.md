# Vanliga frågor


## Kommer data laddas upp till dataportal.se?
Nej, bara beskrivande information (metadata) som gör det enklare att finna den data man söker skördas i dagsläget.

## Min data behöver beskrivas med fler fält, kan dessa läggas till i metadataspecifikationen?
Det finns två kriterier som behöver vara uppfyllda för att ett visst fält ska läggas till:

1. Det måste vara ett någorlunda vanligt behov, dvs många datamängder skulle behöva beskrivas med dessa fält.
2. Det är av intresse för de som söker / utvärderar datamängder, notera att det finns fält för att peka på ytterligare dokumentation som kan användas när detta inte räcker.

## Skördas datamängder som inte beskrivs med alla obligatoriska / rekommenderade fält?
I dagsläget är skördningsmekanismen väldigt liberal och accepterar allt den kan förstå. Men det ser förstås inte bra ut i gränssnittet om obligatoriska fält saknas. Eventuellt kommer det ändras i framtiden så alla obligatoriska fält krävs för att skördningen ska fungera.

## Varför använder man inte schema.org istället för DCAT-AP?
DCAT-AP är en Europeisk standard som är rikare än det som schema.org erbjuder. Vi jobbar på att ta fram en mappning till schema.org som gör att datamängderna kan hittas bättre av olika sökmaskiner.

## Jag vill uttrycka mer information om mina datamängder är det ok?
Ja, det som inte ingår i DCAT-AP-SE kommer helt enkelt att ignoreras. Informationen kommer också sparas och skickas vidare till Europeiska dataportalen.

## Vår data uttrycks i format X enligt specifikation Y, är det ok?
Ja, DCAT-AP-SE gör det möjligt att tala om i vilket format och i enlighet med vilken specifikation din data uttrycks och tar inte ställning för eller emot enskilda format eller specifikationer. Med detta sagt finns det starka skäl för att hålla sig till öppna (och välkända) format och specifikationer när så är möjligt.

## Kommer det finnas en guide för hur man ska uttrycka sin data?
Att ge rådgivning för enskilda datamängder är ett mer långtgående åtagande som inte ryms inom arbetet med DCAT-AP-SE. Däremot utvecklar DIGG under våren 2020 två stödjande tjänster för att hjälpa olika aktörer att beskriva sina data på ett mer stabilt sätt:

1. Stöd för att lägga upp dataspecifikationer läggs till på dataportal.se. Förhoppning är att detta kommer göra det enklare att hitta och dela med sig av hur man ska uttrycka sin data.
2. Stöd för att förvalta begrepp och terminologier läggs till på dataportal.se. Detta gör det möjligt att beskriva olika kodlistor / värdelistor som används i data. 

## Finns det en plan för hur ofta DCAT-AP-SE kommer uppdateras?
Då DCAT-AP-SE följer den europeiska versionen DCAT-AP så är vår förhoppning att denna specifikation kan uppdateras med ungefär samma regelbundenhet. Framförallt är det de större uppdatering som är planerade för DCAT-AP vartannat år som är prioriterade att hålla sig kompatibel med.

## Jag levererar redan DCAT-AP-SE till portalen, kommer jag behöva ändra något?
Det finns ett fåtal fält som inte är bakåtkompatibla som du bör åtgärda för att din information ska synas på rätt sätt. Men att uppdatera till DCAT-AP2.0.0 ger möjlighet att beskriva dina datamängder på ett rikare sätt och bör inte endast involvera att åtgärda de ej bakåtkompatibla ändringarna.
Läs mer på sidan om [avvikelser och ändringslogg](changes)

Med det sagt så följer Sveriges dataportal i dagsläget principen om att varna dataägare när information om datamängder och kataloger är fel eller saknas snarare än att blockera deras information från att synas.

Så även om du inte gör något kommer den information du leverar nu fortsätta att synas.
