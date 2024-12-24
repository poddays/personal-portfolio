---
title: Weather Dashboard
date: 01/02/2024
description: Piccola esercitazione di stile, integrare un api del meteo e
  visualizzarlo con un design moderno ed accattivante..
customer: Personal Project
workLink: null
websiteLink: https://weather-dashboard-lilac.vercel.app/
videoLink: /video/works/weather-dashboard.mp4
technologies:
  - React
  - Tailwind
  - Gsap
---

# Weather Dashboard

## Esercitazione

**Obiettivo:** Creare un'applicazione web che visualizzi le informazioni meteo per diverse città. L'applicazione deve essere reattiva, intuitiva e visivamente accattivante.

**Requisiti:**

- **Selezione Città:** L'utente deve poter selezionare una città da un elenco predefinito.
- **Visualizzazione Dati Meteo:** Visualizzare i dati meteo attuali per la città selezionata, inclusi:
  - Temperatura
  - Descrizione del tempo (es. soleggiato, nuvoloso, pioggia)
  - Icona meteo
  - Umidità
  - Velocità del vento
  - Precipitazioni
  - **Dettagli Aggiuntivi:** Includere una sezione espandibile per visualizzare informazioni meteo aggiuntive.
  - **Design:** L'interfaccia utente deve essere moderna e gradevole.
  -

## Soluzione Personale:

Per soddisfare i requisiti di animazione fluida e reattività, ho scelto di utilizzare la libreria \*\*GSAP (GreenSock Animation Platform)\*\*. GSAP offre un controllo preciso sulle animazioni e consente di creare effetti di transizione complessi con facilità.

**Esempi di animazioni implementate con GSAP:**

- **Transizioni fluide:** Al cambio di città, i dati meteo vengono aggiornati con una transizione graduale, evitando cambiamenti bruschi nell'interfaccia.
- **Effetto di "entrata":** Quando i dati meteo vengono caricati, gli elementi dell'interfaccia appaiono con un effetto di animazione (es. fade-in, slide-up).
- **Sezione espandibile:** La sezione con i dettagli meteo aggiuntivi si espande e si riduce fluidamente grazie a GSAP.
- **Icone meteo dinamiche:** Le icone meteo cambiano in modo reattivo in base alle condizioni meteo.

**Oltre a GSAP, ho curato l'interfaccia utente per renderla reattiva al tipo di meteo:**

- **Colori di sfondo:** Lo sfondo dell'applicazione cambia dinamicamente in base alle condizioni meteo (es. azzurro per cielo sereno, grigio per nuvoloso).
- **Effetti visivi:** Ho aggiunto effetti sottili come ombre e trasparenze per dare profondità all'interfaccia.
