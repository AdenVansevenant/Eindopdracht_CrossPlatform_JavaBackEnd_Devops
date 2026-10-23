# Java-backend — WK Fantasy Team

Deze map is de aparte Spring Boot-backend voor de Cross-Platform-app in `../crossplatform/CrossPlatformApp`. De meegeleverde mock-ups tonen een WK Fantasy 2026-app met spelersmarkt, spelerdetail, elftal in een gekozen formatie, profiel en opgeslagen elftallen. De mock-ups zijn richtinggevend; bouw eerst de gegevens en flows die nodig zijn voor het examen en voor een werkende kernapp.

## Huidige start

De huidige stap volgt les 4: Spring Boot 4-project, Java 25, Maven, JPA/H2, H2 Console, DevTools, Actuator en een eerste REST-endpoint. De demo is vertaald naar de WK Fantasy-mock-ups: `Speler` wordt opgeslagen in H2 en `GET /api/spelers` geeft de zes voorbeeldspelers terug via een response-DTO. De database is tijdelijk en wordt bij herstart opnieuw opgebouwd. Dit is nog geen volledige CRUD of teamfunctionaliteit.

Vereist: JDK 25 en Maven 3.9+. Start vanuit deze map met `mvn spring-boot:run` en open `http://localhost:8080/api/health` of `http://localhost:8080/api/spelers`. H2 Console: `http://localhost:8080/h2-console`, JDBC URL `jdbc:h2:mem:wkfantasy`, username `sa`, leeg wachtwoord. Voer de tests uit met `mvn test`. De H2-database is in-memory en wordt bij herstart opnieuw opgebouwd; later configureren we aparte dev- en prod-databases.

## Examenopdracht: afvinklijst

- Spring Boot 4 en Java 25
- REST API met correcte HTTP-methodes, statuscodes, Location-header en zoek/filter-endpoints
- Minstens 3 gepersisteerde entiteiten en minstens één één-op-veel-relatie
- Minstens 2 controllers; volledige CRUD voor de parent-entiteit
- Controller-, service-, repository-, model- en DTO-lagen; entities nooit rechtstreeks als API-response
- Server-side validatie en centrale foutafhandeling met consistent foutformaat
- Minstens één zinvolle externe REST API-integratie via Spring HTTP Interface of RestClient, met configuratie en timeouts
- JWT-authenticatie met BCrypt, registratie/login, minstens 2 rollen, role-based authorization en standaardgebruikers
- Controller-, repository-, externe-client- en securitytests zonder productiedatabase of echte externe API
- Swagger/OpenAPI met authenticatie- en rolbeschrijving
- Gescheiden `dev`- en `prod`-profielen en aparte databases; productiegegevens en geheimen via environment variables
- Docker Compose voor de volledige stack en een publieke clouddeploy
- README met startinstructies, configuratie, testdata, standaardaccounts en publieke URLs

## Mock-ups vertaald naar backendfuncties

- **Spelersmarkt:** lijst met spelers, naamzoekfunctie, positie-filter, sortering/topspelers. Voorbeeldvelden: naam, land, positie (KPR/VER/MID/AAN), prijs, punten en foto.
- **Spelerdetail:** spelerprofiel, fantasy-punten en toernooistatistieken (wedstrijden, goals, assists, vorm), volgende wedstrijd en of de speler in jouw elftal staat.
- **Mijn elftal:** formatie, geselecteerde spelers op positie, bank, beschikbaar budget, teamwaarde en selectie-aantal. Deze berekende gegevens horen uit de backend of uit een backend-response te komen, niet als vaste mock-upwaarden.
- **Profiel:** registratie/login, gebruikersgegevens, totaalscore, wereldwijde ranking, gespeelde rondes en opgeslagen teams.
- **Instellingen:** thema en taal lijken lokale app-voorkeuren. Zet ze pas in de backend als je voorkeuren tussen apparaten wilt synchroniseren.
- **WK-tab:** de mock-up toont de navigatie maar geen detail van dat scherm. Voeg hiervoor pas endpoints toe als je concrete WK-functies uitwerkt.

## Voorgesteld domeinmodel

Begin met deze drie entiteiten:

1. `FantasyTeam` — naam, eigenaar/gebruiker, formatie, budgetlimiet. Dit is de parent en krijgt de volledige CRUD.
2. `TeamSelectie` — koppelt een team aan een speler en bewaart de status `BASIS` of `BANK` plus eventueel de gekozen veldpositie.
3. `Speler` — naam, land, positie, prijs, fantasy-punten en eventueel foto-URL.

Relaties: `FantasyTeam 1—N TeamSelectie` en `Speler 1—N TeamSelectie`. Voeg later eventueel `Gebruiker` toe voor login/eigenaarschap (of maak de gebruiker zelf de eigenaar van één of meer teams). Bewaar geen vaste lijsten met spelers in de mobiele app als eindoplossing; de app haalt ze uit de API.

Een selectie-regel als aparte entiteit is nuttig omdat één speler bij een team een status (basis/bank) heeft, maar dezelfde speler ook in andere fantasyteams kan voorkomen. De service controleert domeinregels: maximaal 11 basisplaatsen, maximaal 4 bankplaatsen, speler niet dubbel in hetzelfde team, en som van spelerprijzen binnen het budget.

Voeg `Gebruiker` toe voor authenticatie en profiel. Voeg `SpelerStatistiek` of `Wedstrijd` pas toe wanneer de detailpagina echt toernooistatistieken en de volgende wedstrijd moet tonen. Zo voldoe je eerst met een beheersbare kern aan minstens drie entiteiten en breid je uit vanuit de zichtbare schermen.

## Gefaseerd stappenplan

### Fase 1 — Scope en API-contract

1. Leg vast wat de app echt moet kunnen: spelers bekijken/zoeken, team maken, spelers selecteren/verwijderen en basis/bank indelen.
2. Teken de drie entiteiten en hun relaties. Schrijf eerst voorbeelden van JSON request- en response-DTO's.
3. Bepaal endpoints, bijvoorbeeld `GET /api/spelers?naam=...&positie=...`, `GET/POST /api/teams`, `GET/PUT/DELETE /api/teams/{id}` en `POST/DELETE /api/teams/{id}/selecties`.
4. Definieer autorisatie: ingelogde gebruiker beheert eigen team; beheerder kan spelers/catalogus beheren. Pas dit aan aan de concrete appflow.

### Fase 2 — Spring Boot-project en eenvoudige REST API

1. Maak in deze map een Spring Boot 4-project met Java 25 en Maven (via Spring Initializr of IDE). Kies dependencies: Spring Web, Validation, Spring Data JPA, H2 voor dev en PostgreSQL-driver voor prod. Voeg security, JWT, OpenAPI en testdependencies toe wanneer je aan die fasen begint.
2. Maak packages `controller`, `service`, `repository`, `model`, `dto`, `exception` en later `security` en `client`.
3. Start eerst met `Speler` en `GET /api/spelers`, zodat de app haar lijst via HTTP kan ophalen.
4. Maak daarna `FantasyTeam` en `TeamSelectie`, met request/response-DTO's. Laat controller alleen HTTP afhandelen; service bevat regels/transacties; repository doet databasebewerkingen.
5. Bouw volledige CRUD voor teams en zoek/filter/sortering voor spelers. Bij `POST` stuur je `201 Created` met `Location`; gebruik `404` voor ontbrekende ids.

### Fase 3 — Persistente databank

De databank is nodig zodra je teams, selecties en spelers tussen requests en app-herstarts wil bewaren. Gebruik JPA-entiteiten en repositories. Begin lokaal met H2 in `dev`, maar gebruik vanaf het begin dezelfde relaties en constraints als in PostgreSQL. Kies voor `prod` PostgreSQL op disk, lokaal in Docker of als beheerde cloud-database. Houd de dev- en prod-databaseconfiguratie gescheiden in profielen.

Voeg constraints toe waar die betrouwbaar op databankniveau kunnen: unieke username en bijvoorbeeld uniek `(team_id, speler_id)`. Regels als budgetlimiet en maximum aantal plaatsen horen ook in de service, zodat je bruikbare foutmeldingen kunt geven.

### Fase 4 — Validatie en fouten

Gebruik Jakarta Bean Validation op request-DTO's (`@NotBlank`, `@Positive`, `@Size`, enz.) en `@Valid` op controllerparameters. Maak centrale `@RestControllerAdvice` die fouten omzet naar `ProblemDetail`: `400` voor ongeldige velden, `404` voor niet gevonden, `409` voor duplicaten/conflicten. Gebruik geen JPA-entity als request- of response-object.

### Fase 5 — Externe API (verplichte examenvereiste)

Je moet zelf minstens één externe REST API zinvol gebruiken. Voor dit WK-domein is een voetbal-/toernooidata-API geschikt om landenteams, wedstrijden of echte spelersinformatie op te halen en je eigen spelerscatalogus aan te vullen. Zoek pas een API nadat je de velden en use case kent; controleer dekking, licentie/voorwaarden, rate limits, gratis limiet en of een API-key nodig is. Kies niet zomaar een willekeurige API.

Maak eerst een `ExternalFootballClient` met Spring `RestClient` of declaratieve `@HttpExchange`, configureer base URL en eventuele key buiten code, en stel connect/read timeouts in. Roep de externe service aan vanuit een service, vertaal het antwoord naar eigen DTO's en gebruik die data aantoonbaar in je domein (bijvoorbeeld importeren/aanvullen van spelers of matchpunten). Behandel onbruikbare data als `422` en onbereikbaarheid/remote fouten als `502`. Cache/importeer waar passend; laat de mobiele app niet direct de externe API aanspreken.

### Fase 6 — JWT en rollen

1. Maak gebruikerspersistentie, BCrypt password encoder en veilige registratie waarbij de server altijd de laagste rol toekent.
2. Bouw login die na correcte gebruikersnaam/wachtwoord een JWT teruggeeft. Bewaar signing secret en token-duur in configuratie/environment variables.
3. Laat Spring Security tokens op elke beveiligde request controleren; geef `401` bij ontbrekende/ongeldige/verlopen token en `403` bij onvoldoende rol.
4. Voorzie minimaal twee rollen, bijvoorbeeld `USER` en `ADMIN`. Beperk teamoperaties tot de eigenaar en catalogusbeheer tot admin.
5. Seed bij opstarten één standaardaccount per rol. Gebruik alleen BCrypt-hashes; documenteer bruikbare testinloggegevens in de README en wijzig geheimen voor productie.

### Fase 7 — Tests en API-documentatie

Test controllergedrag met `@WebMvcTest` (happy paths, validatie, 404/409, JWT en rolchecks). Test eigen repositoryqueries met `@DataJpaTest`. Test de externe client met `@RestClientTest` en mock responses, nooit met de echte API. Gebruik voor tests H2 of mocks zodat tests losstaan van de productiedatabase en het internet.

Voeg Springdoc OpenAPI toe. Beschrijf endpoints, DTO's, foutresponses en welke rol/authenticatie nodig is. Configureer Swagger UI om Bearer JWT te kunnen invoeren.

### Fase 8 — Mobiele app koppelen

Vervang de hardcoded arrays in `SpelersOverzicht.js` door requests naar jouw backend. Haal spelers op via `GET /api/spelers`; stuur acties met `Authorization: Bearer ...`; toon loading-, lege- en foutstatussen. Bewaar de API-base-URL in appconfig en gebruik de publieke backend-URL voor de uiteindelijke mobiele build.

### Fase 9 — Docker, profielen en deploy

Maak Dockerfile en `compose.yaml` voor backend + PostgreSQL in het Docker-netwerk. `dev` gebruikt aparte ontwikkelingsinstellingen; `prod` gebruikt eigen on-disk PostgreSQL-configuratie en environment variables voor DB-credentials, JWT-secret en externe API-key. Zet secrets nooit in Git. Test de Compose-stack, deploy backend en database naar een cloudprovider en zet publieke API- en Swagger-URLs in deze README.

## Wanneer heb ik een API of databank nodig?

- **Eigen REST API bouwen:** vanaf fase 2, zodat de mobiele app één contract heeft om mee te werken.
- **Databank bouwen:** zodra gebruikersdata en teamselecties bewaard moeten blijven; begin met H2, maar structureer voor PostgreSQL.
- **Externe API zoeken:** in fase 5, nadat je een concrete voetbaldata-use case hebt gekozen. Dit is verplicht voor het examen; alleen een zelfgebouwde API voldoet niet.
- **Cloud-API URL:** pas na deploy nodig voor mobiel gebruik buiten je lokale netwerk.

## Cursus

Volg de cursus stap voor stap voor de Spring Boot-basis en pas elk voorbeeld toe op het WK Fantasy-domein. Bouw CRUD, lagen, JPA-relaties, validatie, testen, security en deploy in bovenstaande volgorde; de exameneisen hierboven blijven leidend als de cursus een onderdeel niet behandelt.

Cursusrepository: [vives-backendprogramming/spring-boot-backend-course](https://github.com/vives-backendprogramming/spring-boot-backend-course)

## Nog in te vullen vóór indiening

- Java/Spring Boot opstartcommando's en vereiste versies
- Docker Compose gebruik
- Profiel- en databaseconfiguratie
- Standaardaccounts voor beide rollen
- Externe API, licentie/limieten en configuratie
- Tests uitvoeren
- Publieke backend-URL en Swagger UI URL
