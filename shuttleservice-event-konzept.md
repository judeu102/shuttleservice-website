# shuttleservice-event.de -- Website-Konzept

---

## 1. Projektueberblick

| Feld | Wert |
|------|------|
| Domain | shuttleservice-event.de |
| Typ | Frontend-Prototyp (HTML/CSS/JS) |
| Ziel-CMS | WordPress + Bricks Builder |
| Primaeres Ziel | Anfragen fuer Event Shuttle und Premium Shuttle Services |
| Basis-Service | Powered by AYDEN (rideayden.com) |
| Sicherheits-Partner | amr-solutions.de |
| Sprache | Deutsch |
| Zielmarkt | Deutschland (Koeln, Duesseldorf, Berlin, Muenchen, Frankfurt) |

---

## 2. Strategische Layer

```
TRAFFIC LAYER          CONVERSION LAYER         PREMIUM LAYER           SECURITY LAYER
shuttle service        event shuttle service     vip shuttle             shuttle mit sicherheitsfahrer
flughafen shuttle      business shuttle          executive shuttle       verweis auf amr-solutions.de
                       airport transfer          luxus shuttle
```

**Flow:**
```
Traffic (SEO) --> Conversion (Anfrage) --> Premium (Upsell) --> Security (Differenzierung)
```

---

## 3. Vollstaendige Sitemap

### 3.1 Hauptnavigation

```
/                                    Startseite
/shuttle-service/                    Shuttle Service (Core)
/event-shuttle-service/              Event Shuttle Service (Core)
/services/                           Services Uebersicht
/fahrzeuge/                          Fahrzeuge
/branchen-anlaesse/                  Branchen und Anlaesse
/standorte/                          Standorte
/blog/                               Blog
/ueber-uns/                          Ueber uns
/kontakt/                            Kontakt
```

### 3.2 Service-Seiten

```
/services/flughafen-shuttle/
/services/airport-transfer-service/
/services/business-shuttle-service/
/services/vip-shuttle-service/
/services/executive-shuttle/
/services/luxus-shuttle-service/
/services/shuttle-mit-sicherheitsfahrer/
```

### 3.3 Branchen und Anlaesse

```
/branchen-anlaesse/event-shuttle-messe/
/branchen-anlaesse/event-shuttle-firmenfeier/
/branchen-anlaesse/event-shuttle-kongress/
/branchen-anlaesse/event-shuttle-hochzeit/
/branchen-anlaesse/event-shuttle-grossveranstaltung/
/branchen-anlaesse/event-shuttle-vip-gaeste/
```

### 3.4 Standorte

```
/standorte/shuttle-service-koeln/
/standorte/shuttle-service-duesseldorf/
/standorte/shuttle-service-berlin/
/standorte/shuttle-service-muenchen/
/standorte/shuttle-service-frankfurt/
/standorte/event-shuttle-koeln/
/standorte/event-shuttle-duesseldorf/
/standorte/event-shuttle-berlin/
/standorte/event-shuttle-muenchen/
/standorte/event-shuttle-frankfurt/
```

### 3.5 Blog

```
/blog/was-ist-ein-shuttle-service/
/blog/shuttle-service-kosten/
/blog/event-shuttle-kosten/
/blog/shuttle-vs-taxi/
/blog/event-logistik-mit-shuttle-service/
/blog/flughafen-transfer-fuer-events/
/blog/wie-plane-ich-einen-event-shuttle/
/blog/wie-viele-fahrzeuge-braucht-ein-event/
/blog/vip-shuttle-fuer-veranstaltungen/
```

### 3.6 Unternehmens- und technische Seiten

```
/ueber-uns/
/kontakt/
/referenzen/                         (optional)
/faq/                                (optional)
/impressum/
/datenschutz/
/cookies/
/sitemap.xml
/robots.txt
```

---

## 4. Seitenstruktur und Hierarchie

```
                            shuttleservice-event.de
                                      |
              +-----------+-----------+-----------+-----------+
              |           |           |           |           |
         Startseite   Services    Branchen    Standorte     Blog
              |           |           |           |           |
              |     +-----+-----+    |     +-----+-----+    |
              |     |     |     |    |     |     |     |    |
              |   Shuttle Event  7   6    10 Staedte    9
              |   Service Shuttle Service             Artikel
              |     |     |   Seiten  Anlaesse
              |     |     |
              |   Fahrzeuge
              |     |
              +-----+-----+
                    |
              Kontakt/Anfrage
```

---

## 5. Navigationskonzept

### 5.1 Desktop Header

```
+------------------------------------------------------------------------+
|  [LOGO]                                                    [CTA Button] |
|  shuttleservice-event.de                                                |
+------------------------------------------------------------------------+
|  Shuttle Service  |  Event Shuttle  |  Services v  |  Fahrzeuge  |     |
|                   |                 |  - Flughafen  |             |     |
|                   |                 |  - Airport    |             |     |
|                   |                 |  - Business   |             |     |
|                   |                 |  - VIP        |             |     |
|                   |                 |  - Executive  |             |     |
|                   |                 |  - Luxus      |             |     |
|                   |                 |  - Sicherheit |             |     |
|  Branchen v  |  Standorte v  |  Blog  |  Ueber uns  |  Kontakt   |     |
+------------------------------------------------------------------------+
```

**Header-Verhalten:**
- Sticky Header mit Scroll-Effekt (wird kompakter beim Scrollen)
- Weisser Hintergrund, dunkle Schrift
- Logo links, CTA-Button "Shuttle anfragen" rechts
- Mega-Menue fuer Services und Branchen
- Dezenter "Powered by AYDEN" Hinweis im Footer-Bereich des Headers oder als Badge

### 5.2 Mobile Navigation

```
+----------------------------------+
|  [LOGO]        [BURGER] [CTA]   |
+----------------------------------+
```

- Hamburger-Menue links oder rechts
- Fester CTA-Button "Anfragen" im Header
- Accordion-Navigation fuer Unterpunkte
- Sticky Mobile Header

### 5.3 Footer

```
+------------------------------------------------------------------------+
|                                                                        |
|  [LOGO]              Services           Standorte         Kontakt      |
|  shuttleservice-     - Shuttle Service   - Koeln           Tel         |
|  event.de            - Event Shuttle     - Duesseldorf     Email       |
|                      - Flughafen         - Berlin          Adresse     |
|  Ihr Premium         - Business          - Muenchen                    |
|  Shuttle Service.    - VIP               - Frankfurt       [Social]    |
|  Powered by AYDEN.   - Executive                                       |
|                      - Sicherheit                                      |
|                                                                        |
|  Branchen            Blog                Unternehmen                   |
|  - Messe             - Kosten            - Ueber uns                   |
|  - Firmenfeier       - Planung           - Referenzen                  |
|  - Kongress          - Vergleich         - FAQ                         |
|  - Hochzeit                                                            |
|  - Grossveranstaltung                                                  |
|                                                                        |
+------------------------------------------------------------------------+
|  Impressum | Datenschutz | Cookies       Powered by AYDEN | amr        |
+------------------------------------------------------------------------+
```

---

## 6. Wireframes

### 6.1 Startseite

```
+========================================================================+
|                          HEADER / NAVIGATION                           |
+========================================================================+

+========================================================================+
|                                                                        |
|                        HERO SECTION                                    |
|                                                                        |
|  Hintergrundbild: cee3d379... (Frau steigt aus V-Klasse, Hotel)       |
|  Overlay: Dunkler Gradient von links                                   |
|                                                                        |
|     Ihr Premium Shuttle Service                                        |
|     fuer Events, Business und mehr.                                    |
|                                                                        |
|     Zuverlaessig. Diskret. Exklusiv.                                   |
|                                                                        |
|     [Shuttle anfragen]    [Event Shuttle planen]                       |
|                                                                        |
|     Powered by AYDEN                                                   |
|                                                                        |
+========================================================================+

+------------------------------------------------------------------------+
|                     TRUST BAR / KENNZAHLEN                             |
|                                                                        |
|   5 Standorte   |   24/7 Service   |   Premium Flotte   |   AYDEN     |
|                  |                  |                     |   powered   |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     SERVICES UEBERSICHT                                |
|                                                                        |
|  Was wir fuer Sie tun                                                  |
|                                                                        |
|  +------------------+  +------------------+  +------------------+      |
|  |                  |  |                  |  |                  |      |
|  |   [Icon]         |  |   [Icon]         |  |   [Icon]         |      |
|  |   Event          |  |   Business       |  |   Flughafen      |      |
|  |   Shuttle        |  |   Shuttle        |  |   Transfer       |      |
|  |                  |  |                  |  |                  |      |
|  |   Professionelle |  |   Zuverlaessige  |  |   Puenktlicher   |      |
|  |   Shuttle-       |  |   Transfers fuer |  |   Airport        |      |
|  |   Loesungen fuer |  |   Geschaefts-    |  |   Transfer mit   |      |
|  |   Veranstaltungen|  |   reisende       |  |   Chauffeur      |      |
|  |                  |  |                  |  |                  |      |
|  |   [Mehr erfahren]|  |   [Mehr erfahren]|  |   [Mehr erfahren]|      |
|  +------------------+  +------------------+  +------------------+      |
|                                                                        |
|  +------------------+  +------------------+  +------------------+      |
|  |   VIP Shuttle    |  |   Executive      |  |   Sicherheit     |      |
|  |                  |  |   Shuttle        |  |   + Shuttle       |      |
|  +------------------+  +------------------+  +------------------+      |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     HIGHLIGHT: EVENT SHUTTLE                           |
|                                                                        |
|  Bild links (ChatGPT-Image: Passagiere im Fahrzeug)                   |
|                                                                        |
|  +-------------------------+  +------------------------------------+   |
|  |                         |  |                                    |   |
|  |     [BILD]              |  |  Event Shuttle Service             |   |
|  |     Passagiere im       |  |                                    |   |
|  |     Premium Fahrzeug    |  |  Von der Messe bis zur Gala --     |   |
|  |                         |  |  wir sorgen dafuer, dass Ihre      |   |
|  |                         |  |  Gaeste stilvoll und puenktlich    |   |
|  |                         |  |  ankommen.                         |   |
|  |                         |  |                                    |   |
|  |                         |  |  - Individuelle Routenplanung      |   |
|  |                         |  |  - Koordination mehrerer Fahrzeuge |   |
|  |                         |  |  - Professionelle Chauffeure       |   |
|  |                         |  |  - Flexible Zeitplanung            |   |
|  |                         |  |                                    |   |
|  |                         |  |  [Event Shuttle planen]            |   |
|  +-------------------------+  +------------------------------------+   |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     FAHRZEUGKLASSEN PREVIEW                            |
|                                                                        |
|  Unsere Flotte                                                         |
|                                                                        |
|  +------------+  +------------+  +------------+  +------------+        |
|  |            |  |            |  |            |  |            |        |
|  | First      |  | Business   |  | Business   |  | Electric   |        |
|  | Class      |  | Class      |  | Van        |  | Class      |        |
|  |            |  |            |  |            |  |            |        |
|  | S-Klasse   |  | E-Klasse   |  | V-Klasse   |  | EQE        |        |
|  | A8, 7er    |  | A6, 5er    |  |            |  | Tesla      |        |
|  |            |  |            |  |            |  |            |        |
|  | ab 2 Pers  |  | ab 3 Pers  |  | ab 6 Pers  |  | ab 3 Pers  |        |
|  |            |  |            |  |            |  |            |        |
|  | [Details]  |  | [Details]  |  | [Details]  |  | [Details]  |        |
|  +------------+  +------------+  +------------+  +------------+        |
|                                                                        |
|  [Alle Fahrzeuge ansehen -->]                                          |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     SO FUNKTIONIERT ES                                  |
|                                                                        |
|      1                    2                    3                        |
|      O                    O                    O                        |
|   Anfrage              Planung              Transfer                   |
|   senden               erhalten             geniessen                  |
|                                                                        |
|   Teilen Sie uns       Wir erstellen        Ihr Chauffeur              |
|   Ihre Wuensche        Ihr individuelles    erwartet Sie               |
|   mit.                 Angebot.             puenktlich.                |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     BRANCHEN UND ANLAESSE                              |
|                                                                        |
|  Fuer jeden Anlass der richtige Shuttle                                |
|                                                                        |
|  +----------+ +----------+ +----------+ +----------+ +----------+     |
|  | Messe    | | Firmen-  | | Kongress | | Hochzeit | | Gross-   |     |
|  |          | | feier    | |          | |          | | veranst. |     |
|  +----------+ +----------+ +----------+ +----------+ +----------+     |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     STANDORTE                                          |
|                                                                        |
|  Verfuegbar in ganz Deutschland                                        |
|                                                                        |
|  Koeln  |  Duesseldorf  |  Berlin  |  Muenchen  |  Frankfurt          |
|                                                                        |
|  [Ihren Standort waehlen]                                              |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     AYDEN INTEGRATION                                  |
|                                                                        |
|  +------------------------------------+  +-------------------------+   |
|  |                                    |  |                         |   |
|  |  Powered by AYDEN                  |  |     [AYDEN LOGO]        |   |
|  |                                    |  |                         |   |
|  |  Unser operativer Partner fuer     |  |     Professionelle      |   |
|  |  Premium Mobilitaet. AYDEN steht   |  |     Chauffeur-Services  |   |
|  |  fuer hoechste Standards bei       |  |     auf hoechstem       |   |
|  |  Chauffeur-Services, Flotten-      |  |     Niveau.             |   |
|  |  management und Kundenbetreuung.   |  |                         |   |
|  |                                    |  |                         |   |
|  +------------------------------------+  +-------------------------+   |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     CTA SECTION                                        |
|                                                                        |
|  Hintergrundbild: Bildschirmfoto (Chauffeur am Flughafen)              |
|  Overlay: Dunkel                                                       |
|                                                                        |
|     Bereit fuer Ihren naechsten Transfer?                              |
|                                                                        |
|     [Shuttle anfragen]    [+49 XXX XXXXXXX]                           |
|                                                                        |
+------------------------------------------------------------------------+

+========================================================================+
|                          FOOTER                                        |
+========================================================================+
```

### 6.2 Shuttle Service Seite (/shuttle-service/)

```
+========================================================================+
|                          HEADER / NAVIGATION                           |
+========================================================================+

+========================================================================+
|                        HERO SECTION (schmal)                           |
|                                                                        |
|  Bild: Bildschirmfoto (Chauffeur mit Gepaeck)                         |
|  Overlay: Gradient                                                     |
|                                                                        |
|     Shuttle Service                                                    |
|     Ihr zuverlaessiger Transfer -- puenktlich, komfortabel, diskret.   |
|                                                                        |
|     [Jetzt anfragen]                                                   |
|                                                                        |
+========================================================================+

+------------------------------------------------------------------------+
|                     INTRO TEXT                                          |
|                                                                        |
|  Was ist ein Shuttle Service?                                          |
|                                                                        |
|  Ein professioneller Shuttle Service bietet Ihnen zuverlaessige,       |
|  geplante Transfers mit Chauffeur. Ob zum Flughafen, zum Meeting       |
|  oder zum Event -- unser Service kombiniert Puenktlichkeit,            |
|  Komfort und Diskretion auf hoechstem Niveau.                          |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     SERVICE-VARIANTEN                                  |
|                                                                        |
|  +-------------------------+  +-------------------------+              |
|  | Flughafen Shuttle       |  | Business Shuttle        |              |
|  | Puenktlich zum Terminal |  | Fuer Geschaeftsreisende |              |
|  | [Mehr]                  |  | [Mehr]                  |              |
|  +-------------------------+  +-------------------------+              |
|                                                                        |
|  +-------------------------+  +-------------------------+              |
|  | VIP Shuttle             |  | Executive Shuttle       |              |
|  | Exklusiver Transfer     |  | Hoechste Ansprueche     |              |
|  | [Mehr]                  |  | [Mehr]                  |              |
|  +-------------------------+  +-------------------------+              |
|                                                                        |
|  +-------------------------+  +-------------------------+              |
|  | Luxus Shuttle           |  | Shuttle + Sicherheit    |              |
|  | Premium Erlebnis        |  | Personenschutz inklusive|              |
|  | [Mehr]                  |  | [Mehr]                  |              |
|  +-------------------------+  +-------------------------+              |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     VORTEILE                                           |
|                                                                        |
|  Warum unser Shuttle Service?                                          |
|                                                                        |
|  [Icon] Puenktlichkeit     [Icon] Premium Fahrzeuge                    |
|  [Icon] Professionelle     [Icon] 24/7 Verfuegbarkeit                  |
|         Chauffeure         [Icon] Flexible Buchung                     |
|  [Icon] Diskretion         [Icon] Powered by AYDEN                     |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     FAHRZEUG-TEASER                                    |
|                                                                        |
|  Fahrzeugklassen im Ueberblick                                         |
|  [Kompakte Kartenansicht der 4 Klassen]                                |
|  [Alle Fahrzeuge ansehen -->]                                          |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     FAQ SECTION                                        |
|                                                                        |
|  Haeufige Fragen zum Shuttle Service                                   |
|                                                                        |
|  [Accordion]                                                           |
|  + Was kostet ein Shuttle Service?                                     |
|  + Wie buche ich einen Shuttle?                                        |
|  + Welche Fahrzeuge stehen zur Verfuegung?                             |
|  + Wie frueh sollte ich buchen?                                        |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     CTA SECTION                                        |
+------------------------------------------------------------------------+

+========================================================================+
|                          FOOTER                                        |
+========================================================================+
```

### 6.3 Event Shuttle Service Seite (/event-shuttle-service/)

```
+========================================================================+
|                          HEADER / NAVIGATION                           |
+========================================================================+

+========================================================================+
|                        HERO SECTION                                    |
|                                                                        |
|  Bild: cee3d379 (Hotel-Eingang, V-Klasse)                             |
|  Overlay: Gradient                                                     |
|                                                                        |
|     Event Shuttle Service                                              |
|     Professionelle Shuttle-Loesungen fuer Ihre Veranstaltung.          |
|                                                                        |
|     [Event Shuttle planen]                                             |
|                                                                        |
+========================================================================+

+------------------------------------------------------------------------+
|                     USP BAR                                            |
|                                                                        |
|  Individuelle    |  Mehrere         |  Professionelle  |  Flexible     |
|  Routenplanung   |  Fahrzeuge       |  Chauffeure      |  Zeiten       |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     ERKLAERUNG                                         |
|                                                                        |
|  Bild rechts (ChatGPT-Image: Passagiere)                              |
|                                                                        |
|  +------------------------------------+  +-------------------------+   |
|  |                                    |  |                         |   |
|  |  Was ist ein Event Shuttle?        |  |     [BILD]              |   |
|  |                                    |  |                         |   |
|  |  Ein Event Shuttle Service         |  |                         |   |
|  |  koordiniert den reibungslosen     |  |                         |   |
|  |  Transport Ihrer Gaeste. Von der   |  |                         |   |
|  |  Planung ueber die Durchfuehrung   |  |                         |   |
|  |  bis zur Nachbereitung -- alles    |  |                         |   |
|  |  aus einer Hand.                   |  |                         |   |
|  |                                    |  |                         |   |
|  |  [Event Shuttle planen]            |  |                         |   |
|  +------------------------------------+  +-------------------------+   |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     ANLAESSE GRID                                      |
|                                                                        |
|  Fuer welchen Anlass planen Sie?                                       |
|                                                                        |
|  +----------+ +----------+ +----------+                                |
|  | Messe    | | Firmen-  | | Kongress |                                |
|  |          | | feier    | |          |                                |
|  +----------+ +----------+ +----------+                                |
|                                                                        |
|  +----------+ +----------+ +----------+                                |
|  | Hochzeit | | Gross-   | | VIP      |                                |
|  |          | | veranst. | | Gaeste   |                                |
|  +----------+ +----------+ +----------+                                |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     PROZESS                                            |
|                                                                        |
|  So planen wir Ihren Event Shuttle                                     |
|                                                                        |
|  1. Anfrage         2. Beratung       3. Angebot                       |
|  4. Planung         5. Durchfuehrung  6. Nachbereitung                 |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     STANDORTE                                          |
|                                                                        |
|  Event Shuttle in Ihrer Stadt                                          |
|  Koeln | Duesseldorf | Berlin | Muenchen | Frankfurt                  |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     CTA SECTION                                        |
|                                                                        |
|     Ihr Event verdient den besten Shuttle Service.                     |
|     [Event Shuttle planen]    [Jetzt anrufen]                          |
|                                                                        |
+------------------------------------------------------------------------+

+========================================================================+
|                          FOOTER                                        |
+========================================================================+
```

### 6.4 Fahrzeuge Seite (/fahrzeuge/)

```
+========================================================================+
|                          HEADER / NAVIGATION                           |
+========================================================================+

+========================================================================+
|                        HERO SECTION (schmal)                           |
|                                                                        |
|     Unsere Fahrzeuge                                                   |
|     Premium Flotte fuer hoechste Ansprueche.                           |
|                                                                        |
+========================================================================+

+------------------------------------------------------------------------+
|                     FIRST CLASS                                        |
|                                                                        |
|  +-------------------------+  +------------------------------------+   |
|  |                         |  |                                    |   |
|  |     [Fahrzeugbild]      |  |  First Class                      |   |
|  |     S-Klasse / A8       |  |                                    |   |
|  |                         |  |  Erleben Sie unvergleichlichen     |   |
|  |                         |  |  Luxus und Komfort mit unserer     |   |
|  |                         |  |  First-Class-Kategorie, mit       |   |
|  |                         |  |  Fahrzeugen wie der Mercedes       |   |
|  |                         |  |  Benz S-Klasse oder dem Audi A8.  |   |
|  |                         |  |                                    |   |
|  |                         |  |  Modelle:                          |   |
|  |                         |  |  Mercedes-Benz S Klasse            |   |
|  |                         |  |  Audi A8 | BMW 7L                  |   |
|  |                         |  |                                    |   |
|  |                         |  |  [2 Pers] [2 Gepaeck]             |   |
|  |                         |  |  [Wasser] [WiFi]                   |   |
|  |                         |  |                                    |   |
|  |                         |  |  [Jetzt buchen]                    |   |
|  +-------------------------+  +------------------------------------+   |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     BUSINESS CLASS                                     |
|                                                                        |
|  [Gleicher Aufbau, Bild rechts, Text links -- alternierend]            |
|                                                                        |
|  +------------------------------------+  +-------------------------+   |
|  |                                    |  |                         |   |
|  |  Business Class                    |  |     [Fahrzeugbild]      |   |
|  |                                    |  |     E-Klasse / A6       |   |
|  |  Erstklassiger Komfort und Stil    |  |                         |   |
|  |  fuer Geschaeftsreisende.          |  |                         |   |
|  |                                    |  |                         |   |
|  |  Modelle:                          |  |                         |   |
|  |  Mercedes-Benz E Klasse            |  |                         |   |
|  |  Audi A6 | BMW 5er                 |  |                         |   |
|  |                                    |  |                         |   |
|  |  [3 Pers] [2 Gepaeck] [Wasser]    |  |                         |   |
|  |                                    |  |                         |   |
|  |  [Jetzt buchen]                    |  |                         |   |
|  +------------------------------------+  +-------------------------+   |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     BUSINESS VAN                                       |
|                                                                        |
|  [Bild links, Text rechts]                                             |
|                                                                        |
|  Modell: Mercedes-Benz V Klasse                                        |
|  [6 Pers] [6 Gepaeck] [Wasser]                                        |
|  [Jetzt buchen]                                                        |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     ELECTRIC CLASS                                     |
|                                                                        |
|  [Bild rechts, Text links]                                             |
|                                                                        |
|  Modelle: Mercedes-Benz EQE | Tesla Model S / Y                       |
|  [3 Pers] [2 Gepaeck] [Wasser]                                        |
|  [Jetzt buchen]                                                        |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     VERGLEICHSTABELLE (optional)                       |
|                                                                        |
|              | First   | Business | Van     | Electric                 |
|  Personen    | 2       | 3        | 6       | 3                        |
|  Gepaeck     | 2       | 2        | 6       | 2                        |
|  Wasser      | ja      | ja       | ja      | ja                       |
|  WiFi        | ja      | --       | --      | --                       |
|  Modelle     | S,A8,7L | E,A6,5er | V-Kl.  | EQE,Tesla                |
|                                                                        |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
|                     CTA SECTION                                        |
|                                                                        |
|     Welches Fahrzeug passt zu Ihrem Anlass?                            |
|     [Jetzt beraten lassen]                                             |
|                                                                        |
+------------------------------------------------------------------------+

+========================================================================+
|                          FOOTER                                        |
+========================================================================+
```

---

## 7. Wiederverwendbare Sections (Bricks-Komponenten)

### 7.1 Komponentenbibliothek

| Nr | Komponente | Verwendung | Bricks-Template |
|----|-----------|------------|-----------------|
| 01 | Hero Section (gross) | Startseite | section-hero-full |
| 02 | Hero Section (schmal) | Unterseiten | section-hero-slim |
| 03 | Trust Bar | Startseite, Service-Seiten | section-trust-bar |
| 04 | Service Cards (3er/6er Grid) | Startseite, Shuttle Service | section-service-grid |
| 05 | Bild-Text Split (alternierend) | Event Shuttle, Fahrzeuge | section-image-text |
| 06 | Fahrzeugkarte | Fahrzeuge, Teaser | card-vehicle |
| 07 | Fahrzeug-Grid | Startseite, Shuttle Service | section-vehicle-grid |
| 08 | Prozess-Steps | Event Shuttle, Startseite | section-process |
| 09 | Anlass-Grid | Event Shuttle, Branchen | section-occasion-grid |
| 10 | Standort-Bar | Startseite, Event Shuttle | section-locations |
| 11 | FAQ Accordion | Alle Seiten | section-faq |
| 12 | CTA Section (Bild-Hintergrund) | Seitenende | section-cta-image |
| 13 | CTA Section (einfach) | Seitenende | section-cta-simple |
| 14 | Kontaktformular | Kontakt, Modals | section-contact-form |
| 15 | AYDEN Badge/Section | Startseite, Footer | section-ayden |
| 16 | Blog-Teaser Grid | Startseite, Blog | section-blog-grid |
| 17 | Vorteile/USP Grid | Service-Seiten | section-usp-grid |
| 18 | Vergleichstabelle | Fahrzeuge | section-comparison |
| 19 | Standort-Detail | Standort-Seiten | section-location-detail |
| 20 | Blog-Artikel Layout | Blog-Posts | template-blog-single |

### 7.2 Komponentenlogik

```
SECTION-HERO-FULL
  Props: background_image, headline, subline, cta_primary, cta_secondary, badge_text
  Verhalten: Fullscreen, Overlay-Gradient, responsive Textgroesse
  Bricks: Section > Container > Heading + Text + Button Group

SECTION-HERO-SLIM
  Props: background_image, headline, breadcrumb
  Verhalten: 40vh Hoehe, zentrierter Text
  Bricks: Section > Container > Breadcrumb + Heading

SECTION-IMAGE-TEXT
  Props: image, headline, text, list_items, cta, reversed (bool)
  Verhalten: 2-Spalten, alternierend, auf Mobile gestapelt
  Bricks: Section > Container > Div (flex) > Image + Content

CARD-VEHICLE
  Props: image, class_name, description, models[], features[], cta
  Verhalten: Hover-Effekt, responsive
  Bricks: Div > Image + Heading + Text + Tag Group + Button

SECTION-PROCESS
  Props: steps[] {number, title, description}
  Verhalten: Horizontale Timeline Desktop, vertikal Mobile
  Bricks: Section > Container > Div (flex) > Step Items

SECTION-FAQ
  Props: items[] {question, answer}
  Verhalten: Accordion, Schema.org FAQ Markup
  Bricks: Section > Container > Accordion Element

SECTION-CTA-IMAGE
  Props: background_image, headline, cta_primary, cta_secondary
  Verhalten: Parallax optional, dunkles Overlay
  Bricks: Section (bg-image) > Container > Heading + Button Group
```

---

## 8. Design-System

### 8.1 Farbpalette

```
PRIMARY
  --color-white:          #FFFFFF
  --color-offwhite:       #F8F7F5
  --color-light-gray:     #EDEDED
  --color-medium-gray:    #B0B0B0

TEXT
  --color-text-primary:   #1A1A1A     (fast Schwarz, Anthrazit)
  --color-text-secondary: #4A4A4A     (dunkelgrau)
  --color-text-muted:     #888888     (gedaempft)

AKZENT (dezent, optional)
  --color-accent-gold:    #C5A47E     (warmes Gold/Beige)
  --color-accent-hover:   #B08D68     (Gold dunkel)

CTA
  --color-cta-bg:         #1A1A1A     (dunkel)
  --color-cta-text:       #FFFFFF
  --color-cta-hover:      #333333

OVERLAY
  --color-overlay-dark:   rgba(0, 0, 0, 0.55)
  --color-overlay-light:  rgba(255, 255, 255, 0.85)
```

### 8.2 Typografie

```
HEADLINE FONT:    "Playfair Display" oder "Cormorant Garamond" (Serif)
                  Alternativ: "DM Serif Display"
                  Fuer Eleganz und Premium-Wirkung

BODY FONT:        "Inter" oder "DM Sans" (Sans-Serif)
                  Fuer Lesbarkeit und Modernit

GROESSEN:
  Hero Headline:    clamp(2.5rem, 5vw, 4.5rem)    font-weight: 500
  Section Headline: clamp(1.75rem, 3vw, 2.75rem)   font-weight: 500
  Sub Headline:     clamp(1.25rem, 2vw, 1.5rem)     font-weight: 400
  Body Text:        1rem (16px)                      font-weight: 400
  Small Text:       0.875rem (14px)                  font-weight: 400
  Label/Badge:      0.75rem (12px)                   font-weight: 600
                    letter-spacing: 0.1em            text-transform: uppercase

ZEILENHOEHE:
  Headlines:  1.2
  Body:       1.7
```

### 8.3 Spacing

```
  --space-xs:   0.5rem     (8px)
  --space-sm:   1rem       (16px)
  --space-md:   2rem       (32px)
  --space-lg:   4rem       (64px)
  --space-xl:   6rem       (96px)
  --space-2xl:  8rem       (128px)

SECTION PADDING:
  Desktop:  var(--space-xl) 0        (96px oben/unten)
  Tablet:   var(--space-lg) 0        (64px)
  Mobile:   var(--space-md) 0        (32px)

CONTAINER:
  Max-Width:  1200px
  Padding:    0 var(--space-md)      (32px seitlich)
```

### 8.4 CTA Buttons

```
PRIMARY BUTTON
  Background: var(--color-cta-bg)    (#1A1A1A)
  Color:      var(--color-cta-text)  (#FFFFFF)
  Padding:    16px 40px
  Border:     none
  Radius:     0 (kantig) oder 4px (minimal)
  Font:       Body Font, 14px, uppercase, letter-spacing: 0.1em
  Hover:      background: var(--color-accent-gold)

SECONDARY BUTTON (Ghost)
  Background: transparent
  Color:      var(--color-text-primary)
  Border:     1px solid var(--color-text-primary)
  Hover:      background: var(--color-text-primary), color: white

TEXT LINK
  Color:      var(--color-text-primary)
  Border-bottom: 1px solid var(--color-accent-gold)
  Hover:      color: var(--color-accent-gold)
```

---

## 9. Bild-Zuordnung und Empfehlungen

### 9.1 Vorhandene Bilder

| Datei | Motiv | Empfohlene Verwendung |
|-------|-------|----------------------|
| `cee3d379-b6aa-4d6f-a541-25bdb0a1fabf.png` | Frau steigt aus schwarzer V-Klasse, Chauffeur haelt Tuer, Luxus-Hotel-Eingang, warmes Abendlicht | **Hero Section Startseite**, Fahrzeuge (Business Van), Event Shuttle |
| `ChatGPT-Image-4.-Maerz-2026-12_53_16-1024x683.webp` | Business-Passagiere im Fond eines Premium-Fahrzeugs, beige Ledersitze, Sonnenbrillen | **Event Shuttle Highlight**, Bild-Text Split, Ueber uns |
| `Bildschirmfoto 2026-03-24 um 08.59.45.png` | Chauffeur hilft Frau mit Gepaeck an dunkler Limousine, Business-/Flughafen-Kontext | **CTA Section**, Flughafen Shuttle, Shuttle Service Hero |

### 9.2 Zusaetzlich benoetigte Bilder

| Motiv | Verwendung | Prioritaet |
|-------|-----------|------------|
| Mercedes S-Klasse Exterieur (schwarz, seitlich) | Fahrzeuge: First Class | Hoch |
| Mercedes E-Klasse Exterieur | Fahrzeuge: Business Class | Hoch |
| Mercedes V-Klasse Exterieur (anderer Winkel) | Fahrzeuge: Business Van | Mittel |
| Mercedes EQE oder Tesla Model S | Fahrzeuge: Electric Class | Mittel |
| Messegelaende / Kongress-Eingang | Branchen: Messe, Kongress | Mittel |
| Elegante Hochzeitslocation | Branchen: Hochzeit | Mittel |
| Firmengebaeude / Lobby | Business Shuttle | Niedrig |
| Flughafen-Terminal Eingang | Flughafen Shuttle | Niedrig |
| Stadtansichten (Koeln, Ddf, etc.) | Standort-Seiten | Niedrig |

---

## 10. SEO-Struktur

### 10.1 Title Tags

```
/                          Premium Shuttle Service | Event & Business Transfer | shuttleservice-event.de
/shuttle-service/          Shuttle Service -- Professioneller Chauffeur-Transfer | shuttleservice-event.de
/event-shuttle-service/    Event Shuttle Service -- Shuttle fuer Veranstaltungen | shuttleservice-event.de
/fahrzeuge/                Unsere Fahrzeuge -- Premium Flotte | shuttleservice-event.de
/services/flughafen-shuttle/  Flughafen Shuttle -- Airport Transfer mit Chauffeur
/services/vip-shuttle-service/  VIP Shuttle Service -- Exklusiver Transfer
/services/shuttle-mit-sicherheitsfahrer/  Shuttle mit Sicherheitsfahrer -- Diskreter Personenschutz
```

### 10.2 H1-Struktur (eine H1 pro Seite)

```
/                          Ihr Premium Shuttle Service fuer Events, Business und mehr
/shuttle-service/          Shuttle Service
/event-shuttle-service/    Event Shuttle Service
/fahrzeuge/                Unsere Fahrzeuge
/services/flughafen-shuttle/  Flughafen Shuttle
/services/vip-shuttle-service/  VIP Shuttle Service
/kontakt/                  Kontakt
```

### 10.3 Schema.org Markup

```json
{
  "@type": "LocalBusiness",
  "name": "shuttleservice-event.de",
  "description": "Premium Shuttle Service fuer Events und Business",
  "@type": "Service",
  "serviceType": "Shuttle Service",
  "areaServed": ["Koeln", "Duesseldorf", "Berlin", "Muenchen", "Frankfurt"]
}
```

Zusaetzlich:
- FAQ Schema auf Service-Seiten
- BreadcrumbList Schema auf allen Unterseiten
- Organization Schema mit AYDEN-Verbindung

---

## 11. Interne Verlinkungsstrategie

### 11.1 Primaere Flows

```
CONVERSION FLOW (Hauptpfad):
Startseite --> /shuttle-service/ --> /event-shuttle-service/ --> /fahrzeuge/ --> /kontakt/

PREMIUM FLOW:
/shuttle-service/ --> /services/vip-shuttle-service/ --> /services/executive-shuttle/
--> /services/shuttle-mit-sicherheitsfahrer/ --> amr-solutions.de (extern)

LOKALER FLOW:
/standorte/shuttle-service-koeln/ --> /event-shuttle-service/ --> /kontakt/

BLOG FLOW:
/blog/was-ist-ein-shuttle-service/ --> /shuttle-service/
/blog/event-shuttle-kosten/ --> /event-shuttle-service/
/blog/vip-shuttle-fuer-veranstaltungen/ --> /services/vip-shuttle-service/
```

### 11.2 Kontextuelle Verlinkung

Jede Service-Seite verlinkt auf:
- Fahrzeuge (Welches Fahrzeug passt?)
- Mindestens 1 Branchen-Seite
- Kontaktseite / Anfrageformular
- 1-2 relevante Blog-Artikel

Jede Standort-Seite verlinkt auf:
- Alle Services
- Lokale Branchen-Seiten (z.B. Event Shuttle Koeln --> Messe)
- Kontaktseite

---

## 12. CTA-Strategie

### 12.1 CTA-Typen nach Seite

| Seite | Primaerer CTA | Sekundaerer CTA |
|-------|--------------|-----------------|
| Startseite | Shuttle anfragen | Event Shuttle planen |
| Shuttle Service | Jetzt anfragen | Fahrzeuge ansehen |
| Event Shuttle | Event Shuttle planen | Jetzt anrufen |
| Fahrzeuge | Jetzt buchen (pro Klasse) | Jetzt beraten lassen |
| VIP / Executive | Premium Transfer anfragen | -- |
| Sicherheit | Sicherheitsloesung anfragen | -- |
| Standort-Seiten | Shuttle in [Stadt] anfragen | -- |
| Blog | Shuttle anfragen (Sidebar/Footer) | -- |

### 12.2 CTA-Platzierung

- Hero Section: 1-2 CTAs
- Nach Erklaerungstext: 1 CTA
- Fahrzeugkarten: je 1 CTA
- Seitenende: CTA-Section mit Bild-Hintergrund
- Sticky Mobile: Fester CTA-Button am unteren Bildschirmrand

---

## 13. Bricks Builder Logik

### 13.1 Template-Struktur

```
BRICKS TEMPLATES:
  templates/
    header.json                    (globaler Header)
    footer.json                    (globaler Footer)
    page-home.json                 (Startseite)
    page-shuttle-service.json      (Shuttle Service)
    page-event-shuttle.json        (Event Shuttle)
    page-fahrzeuge.json            (Fahrzeuge)
    page-kontakt.json              (Kontakt)
    page-ueber-uns.json            (Ueber uns)
    template-service-single.json   (Service-Unterseiten)
    template-branche-single.json   (Branchen-Seiten)
    template-standort-single.json  (Standort-Seiten)
    template-blog-archive.json     (Blog Uebersicht)
    template-blog-single.json      (Blog Artikel)

SECTIONS (Saved Templates / Global Elements):
    section-hero-full.json
    section-hero-slim.json
    section-trust-bar.json
    section-service-grid.json
    section-image-text.json
    section-vehicle-grid.json
    section-process.json
    section-occasion-grid.json
    section-locations.json
    section-faq.json
    section-cta-image.json
    section-cta-simple.json
    section-contact-form.json
    section-ayden.json
    section-blog-grid.json
    section-usp-grid.json
    section-comparison.json
```

### 13.2 Custom Post Types (WordPress)

```
CPT: services
  Felder: service_title, service_description, service_features, service_image, service_cta
  Template: template-service-single

CPT: fahrzeuge (optional, alternativ ACF auf Page)
  Felder: class_name, description, models, passengers, luggage, amenities, image

CPT: standorte
  Felder: city_name, city_description, city_image, available_services
  Template: template-standort-single

CPT: branchen
  Felder: occasion_name, occasion_description, occasion_image
  Template: template-branche-single
```

### 13.3 ACF Field Groups

```
FIELD GROUP: Hero Section
  - hero_image (image)
  - hero_headline (text)
  - hero_subline (textarea)
  - hero_cta_primary_text (text)
  - hero_cta_primary_url (url)
  - hero_cta_secondary_text (text)
  - hero_cta_secondary_url (url)

FIELD GROUP: Fahrzeugklasse
  - vehicle_class_name (text)
  - vehicle_description (wysiwyg)
  - vehicle_models (repeater: model_name)
  - vehicle_passengers (number)
  - vehicle_luggage (number)
  - vehicle_amenities (checkbox: wasser, wifi)
  - vehicle_image (image)
  - vehicle_cta_url (url)

FIELD GROUP: Service Detail
  - service_intro (wysiwyg)
  - service_features (repeater: icon, title, description)
  - service_faq (repeater: question, answer)
```

---

## 14. Responsive Breakpoints

```
Desktop:     >= 1200px    Container: 1200px
Tablet:      768-1199px   Container: 100% - 64px
Mobile:      < 768px      Container: 100% - 32px

GRID-VERHALTEN:
  4-Spalten Grid (Fahrzeuge):     Desktop 4 | Tablet 2 | Mobile 1
  3-Spalten Grid (Services):      Desktop 3 | Tablet 2 | Mobile 1
  2-Spalten Bild-Text:            Desktop 2 | Tablet 1 (gestapelt) | Mobile 1
  6-Spalten Anlass-Grid:          Desktop 3 | Tablet 2 | Mobile 1
```

---

## 15. Kontaktformular Felder

```
STANDARD FORMULAR:
  - Name *
  - Unternehmen
  - E-Mail *
  - Telefon
  - Service (Dropdown: Shuttle Service, Event Shuttle, Flughafen, Business, VIP, Executive, Sicherheit)
  - Anlass (Dropdown: Messe, Firmenfeier, Kongress, Hochzeit, Sonstiges)
  - Datum / Zeitraum
  - Anzahl Personen
  - Nachricht
  - Datenschutz Checkbox *
  - [Anfrage senden]

KURZ-FORMULAR (fuer Modals/Sidebar):
  - Name *
  - E-Mail *
  - Service (Dropdown)
  - Nachricht
  - [Anfrage senden]
```

---

## 16. Performance und Technik

```
LADEZEIT-OPTIMIERUNG:
  - Bilder: WebP Format, lazy loading, srcset fuer responsive
  - Fonts: Font-Display: swap, WOFF2 Format, maximal 2 Font-Familien
  - CSS: Kritisches CSS inline, Rest deferred
  - JS: Minimal, defer/async, kein jQuery wenn moeglich
  - Caching: Browser-Caching fuer statische Assets

SEO-TECHNIK:
  - Semantisches HTML5 (header, main, section, article, footer)
  - Schema.org JSON-LD
  - Breadcrumbs mit Schema
  - Canonical URLs
  - hreflang (falls spaeter Englisch)
  - Open Graph und Twitter Cards
  - XML Sitemap
  - robots.txt

BARRIEREFREIHEIT:
  - Alt-Texte fuer alle Bilder
  - Kontrastverhaeeltnis mindestens 4.5:1
  - Keyboard-Navigation
  - ARIA Labels fuer interaktive Elemente
```

---

## 17. Tonalitaet und Textbeispiele

### Stil

| Eigenschaft | Beschreibung |
|------------|-------------|
| Ton | Ruhig, souveraen, serviceorientiert |
| Haltung | Professionell, nicht aufdringlich |
| Sprache | Klar, modern, ohne Floskeln |
| Vermeiden | Taxijargon, Billigsprache, Superlative, Ausrufezeichen |

### Textbeispiele

**Hero Headline:**
> Ihr Premium Shuttle Service fuer Events, Business und mehr.

**Hero Subline:**
> Zuverlaessig. Diskret. Exklusiv. -- Powered by AYDEN.

**Service Intro:**
> Ein professioneller Shuttle Service geht ueber den reinen Transport hinaus. Wir koordinieren Ihren Transfer so, dass Sie sich auf das Wesentliche konzentrieren koennen.

**CTA Section:**
> Bereit fuer Ihren naechsten Transfer? Wir planen Ihren Shuttle -- individuell, zuverlaessig und auf Premium-Niveau.

**AYDEN Integration:**
> Unser Service wird operativ durch AYDEN ermoeglicht -- einem der fuehrenden Anbieter fuer professionelle Chauffeur-Services in Deutschland.

**Sicherheit (dezent):**
> Fuer besonders sensible Einsaetze bieten wir in Zusammenarbeit mit unserem Partner amr-solutions.de diskrete Sicherheitsloesungen -- vom geschulten Sicherheitsfahrer bis zum umfassenden Personenschutz.

---

## 18. Zusammenfassung der Prioritaeten

### Muss (MVP / Prototyp Phase 1)

1. Startseite mit Hero, Services, Fahrzeuge-Teaser, CTA
2. /shuttle-service/ mit Service-Varianten
3. /event-shuttle-service/ mit Anlass-Grid und Prozess
4. /fahrzeuge/ mit allen 4 Klassen
5. /kontakt/ mit Formular
6. Header und Footer (global)
7. Mobile Optimierung
8. AYDEN Integration (visuell)

### Soll (Phase 2)

9. Alle 7 Service-Unterseiten
10. Alle 6 Branchen-Seiten
11. Alle 10 Standort-Seiten
12. /ueber-uns/
13. Blog-Template
14. FAQ-Seite
15. amr Integration (Sicherheitsseite)

### Kann (Phase 3)

16. 9 Blog-Artikel
17. /referenzen/
18. Erweiterte Animationen
19. Chatbot / WhatsApp Integration
20. Buchungssystem-Anbindung

---

## 19. Dateistruktur Prototyp

```
shuttleservice-website/
  index.html                       Startseite
  shuttle-service.html             Shuttle Service
  event-shuttle-service.html       Event Shuttle Service
  fahrzeuge.html                   Fahrzeuge
  kontakt.html                     Kontakt
  css/
    style.css                      Hauptstylesheet
    variables.css                  CSS Custom Properties
    components.css                 Wiederverwendbare Komponenten
    responsive.css                 Media Queries
  js/
    main.js                        Navigation, Accordion, Scroll
  images/
    hero-hotel-vklasse.png         (cee3d379...)
    passengers-premium.webp        (ChatGPT-Image...)
    chauffeur-airport.png          (Bildschirmfoto...)
  shuttleservice-event-konzept.md  Dieses Dokument
```
