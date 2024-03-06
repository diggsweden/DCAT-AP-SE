# Kvalitet

De kataloger som skördas till Sveriges dataportal bedöms på två vis, dels med fokus på kvalitén på katalogens metadata, dels med fokus på det data som katalogen innehåller. Båda bedömningarna uppdateras nattligen.


## Metadatakvalitet: MQA

Metadatakvaliteten för kataloger på Sveriges dataportal bedöms utifrån den [metod](https://data.europa.eu/mqa/methodology?locale=sv) som den europeiska dataportalen har tagit fram, på engelska benämnd "The Metadata Quality Assessment" (MQA). I huvudsak kontrolleras metadatafälten för de datamängder och distributioner som ingår i katalogen, vilket avser att ge dataleverantörer bättre kontroll över katalogens metadatakvalitet, samt få förslag på förbättringar.

Bedömning sker utifrån fem dimensioner, bestående av ett antal indikatorer, till vilka vissa metadatafält hör. Varje indikator ges en vikt, varefter indikatorerna summeras till dimensionens poäng. Dimensionerna bildar sedan den totala poängen för katalogen. De fem dimensionerna, med deras respektive indikatorer, är: 

- Upptäckbarhet (Användning av nyckelord - Kategorier - Geosökning - Tidsbaserad sökning)

- Åtkomlighet (AccessURL-åtkomlighet - DownloadURL - DownloadURL-åtkomlighet)

- Interoperabilitet (Format - Medietyp - Format/medietyp från ordlista - Icke-proprietärt - Maskinläsbart - DCAT-AP-överensstämmelse)

- Återanvändbarhet (Licensinformation - Licensordlista - Åtkomstbegränsningar - Ordlista för åtkomstbegränsningar - Kontaktpunkter - Utgivare)

- Kontextualitet (Rättigheter - Filstorlek - Utfärdandedatum - Ändringsdatum)


Bedömningen av metadatakvalitet på Sveriges dataportal följer samma metod som den europeiska dataportalen, dock med två avsteg:

- DCAT-AP SHACL validering: under utvecklingen av denna tjänst fanns ännu ingen fungerande tjänst för denna validering. Indikatoren DCAT-AP-överensstämmelse under dimensionen Interoperabilitet saknar därför poäng.

- Accepterade format: vad som accepteras som format har utökats till att omfatta medietyper. För exempelvis formatet http://publications.europa.eu/resource/authority/file-type/CSV så accepteras även medietypen text/csv som ett icke-proprietärt format. Denna utökning har relevans för tre indikatorer under dimensionen Interoperabilitet (med respektive listning av accepterade format och medietyper):
    - Format/medietyp från ordlista - [länk 1](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/format-vocabulary.js), [länk 2](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/media-types.js)
    - Icke-proproetärt - [länk](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/non-proprietary.js)
    - Maskinläsbart - [länk](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/machine-readable.js).


## Datakvalitet: 5-stjärnemodellen

5-stjärnemodellen (eng. 5 Star Linked Data) togs fram av Tim Berners-Lee, skapare av Webben och initiavtagare till länkad data, för att bedöma hur väl data följer kriterierna för länkad data. Kriterierna är kumulativa, så att varje ny stjärna förutsätter att data uppfyller föregående stjärnor. 

☆ Tillgängligt på webben, med angivet format och öppen [licens](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/approved-licenses.js)

☆☆ Tillgängligt i strukturerad form i ett maskinläsbar [format](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/machine-readable.js) (t.ex. Excel istället för inskannad bild)

☆☆☆ Tillgängligt i ett icke-proprietärt [format](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/non-proprietary.js) (t.ex. CSV istället för Excel)

☆☆☆☆ Publicerat som RDF (den öppna W3C standarden för datamodellering) i någon dess vanliga [serialiseringar](https://bitbucket.org/metasolutions/mqa/src/main/data/formats/linked-data.js)

☆☆☆☆☆ Länkar till annan länkad data


Den metod som används för att bedöma dessa kriterier kring en katalogs datakvalitet använder det tillängliga metadatat för varje distribution i katalogen. Varje distribution betygsätts enligt kriterierna, varefter medelvärdet över alla katalogens distributioner bildar katalogens totala medelvärde.

I nuläget uppfyller metoden modellen med en reservation, gällande uppfyllandet av fem stjärnor. Då metoden inte har stöd för att ladda ned och granska datats innehåll, går det i nuläget inte att bedöma huruvida det finns länkar ut till annat länkat data. 
