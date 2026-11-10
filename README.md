# Praktisk informasjon om oppgaven

## Kom i gang

1. Lag et repo på GitHub som heter `js-intro`, og sett repo til public
2. Pakk ut innholdet i repoet og åpne mappen i VS Code.
3. Skriv `node --version` i terminalen. Får du et versjonsnummer, er du klar.
4. Åpne `oppgaveark_introark_hint.md` og start på steg 1. Dette arket vil du også finne informasjon om js og hint til noen oppgaver. 

### Hjelpemidler/litteratur:

- [NDLA: Lær de grunnleggende konseptene i JavaScript](https://ndla.no/nb/r/konseptutvikling-og-programmering-im-ikm-vg1/lar-de-grunnleggende-konseptene-i-javascript/8b50527e89)
- [W3Schools: js](https://www.w3schools.com/js/)


### Tips
Fremover kommer vi til å bygge videre på det vi har lært i HTML og CSS, så det er viktig at du holder denne kunnskapen ved like. Hvis du trenger en oppfriskning eller vil bryne deg på praktiske prosjektoppgaver, anbefaler jeg [The Odin Project](https://www.theodinproject.com/). De har svært gode kurs i både HTML, CSS og JavaScript

## Levering

Commit og push etter hver del, og fyll ut loggen i `docs`. Hver del avsluttes med noen spørsmål du skal svare på muntlig, uten å se i koden. Det er innsatsen og forståelsen som teller, ikke at alt er feilfritt.


----

# Introduksjon til javascript 

Oppgavene er delt i tre nivåer: **grunnleggende**, **middels** og **avansert**. Start med de grunnleggende og gå videre når du får det til. Prøv selv før du åpner hintene.

Arkene er også svararket ditt. Der det står **Svar**, skriver du svaret rett i dette dokumentet. Kodeoppgavene løser du i kodefilene.

---

## Hvorfor JavaScript?

Hver gang du trykker på en like-knapp, ser et kart som zoomer eller får søkeforslag mens du skriver, er det JavaScript som gjør jobben. Det er det eneste programmeringsspråket alle nettlesere forstår uten noe ekstra, og derfor brukes det på nesten alle nettsider i verden.

For dere betyr det tre ting. Nettsidene dere har laget med HTML og CSS kan endelig *gjøre* noe. Firebase, som vi skal bruke senere i år, styres med JavaScript. Og JavaScript er et av de mest etterspurte språkene i IT-bransjen.

## Python og JavaScript

Mange av dere kjenner Python fra før. Grunntankene er de samme: variabler, `if`, løkker, lister og funksjoner. Forskjellen ligger mest i skrivemåten og i hvor språkene brukes. Python er mye brukt til dataanalyse, KI og små skript. JavaScript er språket for nettsider, og kjører rett i nettleseren.

| | Python | JavaScript |
|---|---|---|
| Brukes mest til | Data, KI, skript | Nettsider og webapper |
| Kjører i | Terminalen | Nettleseren (og terminalen med Node) |
| Lage variabel | `navn = "Ola"` | `let navn = "Ola";` eller `const` |
| Skrive ut | `print("Hei")` | `console.log("Hei");` |
| Kodeblokker | Innrykk | Krøllparenteser `{ }` |
| If | `if alder > 17:` | `if (alder > 17) { }` |
| For-løkke | `for i in range(5):` | `for (let i = 0; i < 5; i++) { }` |
| Liste | `byer = ["Tromsø", "Bodø"]` | `const byer = ["Tromsø", "Bodø"];` |
| Legge til i liste | `byer.append("Alta")` | `byer.push("Alta");` |
| Lengde | `len(byer)` | `byer.length` |
| Funksjon | `def pluss(a, b):` | `function pluss(a, b) { }` |
| Sant og usant | `True`, `False` | `true`, `false` |
| Kommentar | `# kommentar` | `// kommentar` |

**Svar:** Du skal lage en nettside der brukeren kan søke etter turer. Hvilket språk ville du brukt, og hvorfor?

> _Skriv svaret ditt her._


--- 

## Kommentere i javascript

Vi bruker // for å legge til en linjekommenar eller for å midlertidig deaktivere en linje. Skal du legge til større tekst anbefales bruk av /* Tekst */, eks: 



/*
Tekst
Tekst
*/


---
## Node.js

For å kjøre oppgavene lokalt i vscode må du installere Node. Merk at du kan kjøre javascript i alle nettlesere uten tillegg, men dette skal vi gjøre på et senere tidspunkt.


**Slik installerer du Node**

1. Gå til [nodejs.org](https://nodejs.org) og last ned versjonen merket **LTS**.
2. Kjør installasjonsfila og trykk *Next* til den er ferdig. Standardvalgene er riktige.
3. Lukk VS Code helt og åpne det igjen.
4. Åpne terminalen: *Terminal* → *New Terminal*.
5. Skriv `node --version` og trykk Enter. Ser du et tall som `v22.11.0`, virker det.

**Får du `'node' is not recognized` eller `command not found`?** Start maskinen på nytt og prøv igjen.


---


## Del 1 – Introduksjon til grunnleggende begreper

I denne delen av teksten finner du nyttig informasjomn om de ulike oppgavene og forklaringer av ulike konsepter av javascript. 

### Begreper du skal lære

| Begrep | Hva det betyr | Eksempel |
|---|---|---|
| **variabel** | En navngitt boks som lagrer en verdi | `let alder = 17;` |
| **`let`** | Variabel som kan endres | `alder = 18;` |
| **`const`** | Variabel som ikke kan endres | `const PI = 3.14159;` |
| **string** | Tekst, i anførselstegn | `"Tromsø"` |
| **number** | Tall, uten anførselstegn | `42` |
| **array** | En liste med verdier | `[-4, -6, -2]` |
| **indeks** | Plassnummer i en array, starter på 0 | `liste[0]` |
| **funksjon** | Navngitt kode som kan brukes flere ganger | `function pluss(a, b) { ... }` |
| **parameter** | Verdi funksjonen tar inn | `a` og `b` |
| **`return`** | Sender svaret ut av funksjonen | `return a + b;` |
| **`if`** | Kjører kode bare hvis noe er sant | `if (temp < 0) { ... }` |
| **`for`-løkke** | Gjentar kode | `for (let i = 0; i < 3; i++)` |
| **`console.log`** | Skriver ut en verdi i terminalen | `console.log(alder);` |
| **feilmelding** | Sier hvor og hva som er galt | `SyntaxError` på linje 103 |
| **objekt** | Samling av verdier med navn (nøkler) | `{ navn: "Fløya", hoyde: 671 }` |
| **algoritme** | Fremgangsmåte for å løse et problem | Finne største tall |

### Etter denne delen skal du kunne

- lage variabler med `let` og `const`, og forklare når du bruker hvilken
- se forskjell på tekst (string), tall (number) og lister (array)
- lese en feilmelding og finne riktig linje
- skrive egne funksjoner med parametre og `return`
- bruke `if` og `for`-løkker til å gå gjennom en liste
- lage en enkel algoritme, f.eks. finne største verdi i en liste
- lage objekter, lese og endre egenskapene, og bruke en array med objekter

### Slik leser du en feilmelding

```
/js-intro/del1-grunnlag/steg3-feilsok.js:103    ← fil og linjenummer
const arrayCars = ["Saab", "Volvo", "BMW"];      ← linja med feil
      ^                                          ← pila peker på problemet
SyntaxError: Identifier 'arrayCars' has already been declared   ← hva som er galt
```

### Litt om oppgaven

Oppgaven er delt inn i fire kategorier. Gjør dem i rekkefølge.

- Grunnleggende
- Funksjoner 
- Feilsøking
- Objekter 

Når vi er ferdig med dette skal vi bevege oss videre på neste del kalt "dom". Da skal vi integrere javascript i html. 

### 1 – Oppgaver: Grunnleggende JS



#### Variabler

**Kort repetisjon**

En variabel er en navngitt boks som lagrer en verdi.

| Ord | Betyr | Bruk når |
|---|---|---|
| `const` | Kan ikke endres | Standardvalget |
| `let` | Kan endres | Verdien skal oppdateres |
| `var` | Gammel måte | Ikke bruk |

Eksempel. 

```js
const by = "Tromsø";
let alder = 17;
alder = 18;         // OK: let kan endres. Ikke skriv let andre gang.
by = "Bodø";        // FEIL: const kan ikke endres
```

Med `const` endres ikke verdien ved et uhell, og koden blir lettere å lese. I eksempelet ovenfor prøvde vi å endre navnet på byen fra Tromsø til Bodø, men det går ikke da vi har brukt **const**. 

| Nr | Nivå | Oppgave | Forventet i konsollen |
|---|---|---|---|
| 1 | Grunnleggende | Lag `let firstname` og `let lastname`. Skriv ut begge. | `Ola Nordmann` (ditt navn) |
| 2 | Grunnleggende | `let hp = 100`. Spilleren mister 30 hp. Skriv ut. | `70` |
| 3 | Grunnleggende | `const PI = 3.14159`. Prøv `PI = 3`. | `TypeError: Assignment to constant variable.` |
| 4 | Middels | Spill på Steam: 200 kr pluss 25 % moms. | `Pris med moms: 250 kr` |
| 5 | Avansert | Velg `const` eller `let` for fire verdier og begrunn. | Ingenting. Svar under. |

**Hint oppgave 2**

Ikke skriv `let` andre gang. Skriv `hp = hp - 30;`

**Svar oppgave 3:** Hva betyr feilmeldingen?

> _Skriv svaret ditt her._

**Svar oppgave 5:**

| Verdi | `const` eller `let` | Hvorfor |
|---|---|---|
| Maks antall spillere på serveren (16) |  |  |
| Antall liv igjen (3) |  |  |
| Høyden på Fløya (671) |  |  |
| Temperaturen i Tromsø nå (-4) |  |  |

#### Tekst og tall

**Kort repetisjon**

Tekst (*string*) står i anførselstegn. Tall (*number*) står uten.

```js
const navn = "Kari";            // string
const alder = 17;               // number
console.log(typeof alder);      // number
```

| Tegn | Betyr | Eksempel | Svar |
|---|---|---|---|
| `+` | pluss | `7 + 3` | `10` |
| `-` | minus | `7 - 3` | `4` |
| `*` | gange | `7 * 3` | `21` |
| `/` | dele | `7 / 2` | `3.5` |
| `%` | rest etter deling | `7 % 2` | `1` |

Tekst og variabler settes sammen med backticks og `${}`:

```js
console.log(`${navn} er ${alder} år`);   // Kari er 17 år
```

Pass på: brukt på tekst skjøter `+` tekst sammen i stedet for å regne.

| Nr | Nivå | Oppgave | Forventet i konsollen |
|---|---|---|---|
| 6 | Grunnleggende | Skriv ut `typeof hp` og `typeof firstname`. | `number`, `string` |
| 7 | Grunnleggende | Lag en setning med backticks og `${}`. | `Ola har 70 hp` |
| 8 | Middels | `5 + 5`, `"5" + 5` og `Number("5") + 5`. | `10`, `55`, `10` |
| 9 | Middels | 17 elever i lag på 4. Bruk `/` og `%`. | `4 lag`, `1 til overs` |

**Hint oppgave 9**

`Math.floor(17 / 4)` runder ned. `17 % 4` gir resten.

**Svar oppgave 8:** Hvorfor blir `"5" + 5` annerledes enn `5 + 5`?

> _Skriv svaret ditt her._

#### Valg med if

**Kort repetisjon**

`if` kjører kode bare når en betingelse er sann. `else` kjører når den ikke er det.

```js
const temp = -3;

if (temp < 0) {
  console.log("Kuldegrader");
} else {
  console.log("Plussgrader");
}
```

| Tegn | Betyr |
|---|---|
| `===` | er lik |
| `!==` | er ikke lik |
| `<` `>` | mindre enn, større enn |
| `<=` `>=` | mindre eller lik, større eller lik |
| `&&` | og (begge må være sanne) |

To loddrette streker, `||`, betyr «eller» (minst én må være sann).

Bruk `===` når du sammenligner. Ett `=` betyr «gi verdi».

Flere valg etter hverandre: `if`, så `else if`, så `else`. Den første som er sann, kjøres.

| Nr | Nivå | Oppgave | Forventet i konsollen |
|---|---|---|---|
| 10 | Grunnleggende | `const temp = -8`. Skriv «Kuldegrader» hvis under 0. | `Kuldegrader` |
| 11 | Grunnleggende | Er `hp` 0 eller mindre: «Game over». Ellers: «Spillet fortsetter». | `Spillet fortsetter` |
| 12 | Middels | `const klokka = 21`. God morgen / God dag / God kveld. | `God kveld` |
| 13 | Middels | Nordlys hvis skydekke under 30 **og** klokka 18 eller mer. Bruk `&&`. | `Gode sjanser for nordlys` |
| 14 | Avansert | Billett til Fjellheisen: under 12 år 50 kr, 67 og eldre 60 kr, ellers 100 kr. | `50 kr` når alder er 8 |

**Hint oppgave 12**

```js
if (klokka < 10) {
  // ...
} else if (klokka < 18) {
  // ...
} else {
  // ...
}
```

#### Løkker

**Kort repetisjon**

En løkke gjentar kode. Bruk `for` når du vet hvor mange ganger. Bruk `while` når løkka skal gå så lenge noe er sant.

```js
for (let i = 1; i <= 3; i++) {
  console.log(i);          // 1, 2, 3
}
```

| Del | Betyr |
|---|---|
| `let i = 1` | Start på 1 |
| `i <= 3` | Fortsett så lenge dette er sant |
| `i++` | Øk `i` med 1 etter hver runde |

```js
let liv = 3;
while (liv > 0) {
  console.log("Liv igjen:", liv);
  liv--;                   // uten denne går løkka for alltid
}
```

| Nr | Nivå | Oppgave | Forventet i konsollen |
|---|---|---|---|
| 15 | Grunnleggende | Skriv ut 1 til 5 med `for`. | `1` `2` `3` `4` `5` |
| 16 | Grunnleggende | Rakett fra Andøya: tell ned fra 10 til 1, så «Liftoff!». | `10` … `1`, `Liftoff!` |
| 17 | Middels | Summen av 1 til 100. | `5050` |
| 18 | Middels | `let bossHp = 100`, hvert slag tar 15. Tell slag med `while`. | `7 slag` |
| 19 | Avansert | 1 til 15: «Nord» for delelig med 3, «Lys» for 5, «Nordlys» for begge. | `1, 2, Nord, 4, Lys` … `Nordlys` |

**Hint oppgave 16**

Tell baklengs: `for (let i = 10; i >= 1; i--)`

**Hint oppgave 19**

`i % 3 === 0` betyr at `i` er delelig med 3. Sjekk «begge» først.

#### Arrays

**Kort repetisjon**

En array er en liste med verdier i `[ ]`. Hver verdi har en plass (indeks) som starter på 0.

```js
const fag = ["Utvikling", "Driftstøtte", "Brukerstøtte"];

console.log(fag[0]);        // Utvikling (første)
console.log(fag.length);    // 3 (antall)
fag.push("YFF");            // legger til bakerst
```

Gå gjennom alle verdiene med en `for`-løkke:

```js
for (let i = 0; i < fag.length; i++) {
  console.log(fag[i]);
}
```

| Nr | Nivå | Oppgave | Forventet i konsollen |
|---|---|---|---|
| 20 | Grunnleggende | Skriv ut første by og antall byer. | `Tromsø`, `5` |
| 21 | Grunnleggende | `push("Hammerfest")`. Skriv ut siste by og antall. | `Hammerfest`, `6` |
| 22 | Middels | Skriv ut alle byene med `for`. | Seks byer, én per linje |
| 23 | Middels | Tell dager kaldere enn -5 i `temperaturer`. | `3` |
| 24 | Avansert | Tell «drikk» i `inventory`, og lag ny array uten dem. | `3`, `[ 'sverd', 'skjold', 'fiskestang' ]` |
| 25 | Avansert | Hvorfor virker `push` på en `const`-array? | Ingenting. Svar under. |

**Hint oppgave 21**

Siste element: `byer[byer.length - 1]`

**Hint oppgave 23**

```js
let kaldeDager = 0;
for (let i = 0; i < temperaturer.length; i++) {
  if (temperaturer[i] < -5) {
    // tell opp
  }
}
```

**Svar oppgave 25:** Hvorfor virker `push` på en `const`-array?

> _Skriv svaret ditt her._

### Steg 2 – Oppgaver: Funksjoner

Fil: `steg2-funksjoner.js`. Du lager funksjonene til en værapp for Tromsø. Fyll ut funksjonene der det står `// TODO`. Nederst i fila sjekkes svarene automatisk. Kjør fila ofte og se om `FEIL` blir til `OK`.

**Minimum:** oppgave 1–3.

**Kort repetisjon**

En funksjon er kode med et navn som du kan bruke mange ganger. Den tar inn verdier (parametre) og sender et svar ut med `return`.

```js
function pluss(a, b) {      // a og b er parametre
  return a + b;             // svaret sendes ut
}

console.log(pluss(2, 3));   // 5
console.log(pluss(10, 1));  // 11
```

Uten `return` gir funksjonen `undefined`.

Data: temperaturer i Tromsø en uke i mørketida.
```js
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
```

#### Grunnleggende

| Oppgave | Funksjon | Situasjon | Skal returnere |
|---|---|---|---|
| 1 | `hilsen("Ola")` | Spiller logger inn på serveren | `"Hei, Ola!"` |
| 2 | `rektangelAreal(4, 5)` | Gulv i en Minecraft-hytte | `20` |
| 3 | `celsiusTilFahrenheit(100)` | Vennen i USA spør hvor kaldt det er | `212` (formel: `C * 9/5 + 32`) |

**Hint**

Alle funksjonene trenger bare én linje: `return ...;`. Se på `pluss` i repetisjonen over.

For hilsen: bruk backticks og `${}`:
```js
return `Hei, ${navn}!`;
```

#### Middels

| Oppgave | Funksjon | Situasjon | Skal returnere |
|---|---|---|---|
| 4 | `sum(tall)` | Første steg mot ukas snitt | Summen av alle tallene. Bruk `for`-løkke. |
| 5 | `gjennomsnitt(tall)` | Ukas snittemperatur | Gjennomsnittet. Gjenbruk `sum()`. |
| 6 | `antallUnderNull(tall)` | Trenger du vinterdekk? | Hvor mange tall som er under 0. |

**Hint oppgave 4**

1. Lag en variabel `total` som starter på 0. (Bruk `let` – den skal endres.)
2. Gå gjennom alle tallene med en `for`-løkke.
3. Legg hvert tall til `total`.
4. Returner `total` *etter* løkka.

```js
for (let i = 0; i < tall.length; i++) {
  // tall[i] er tallet du står på nå
}
```

**Hint oppgave 6**

Samme oppskrift som sum, men i stedet for å legge til tallet, teller du opp med `antall++` – men bare `if (tall[i] < 0)`.

#### Avansert

| Oppgave | Funksjon | Situasjon | Krav |
|---|---|---|---|
| 7 | `storste(tall)` | Varmeste dag | **Uten** `Math.max` og `.sort()` |
| 8 | `bareKuldegrader(tall)` | Bare kalde dager | Ny array med tall under 0. Originalen skal ikke endres. |
| 9 | `sorterStigende(tall)` | Rangering fra kaldest til varmest | **Uten** `.sort()`. Originalen skal ikke endres. |

**Hint oppgave 7**

Ta vare på «største hittil». Hvilken startverdi er trygg? (0 er *ikke* trygt når alle tallene er negative.)

**Hint oppgave 9**

Boblesortering: gå gjennom lista og sammenlign hvert par av naboer. Står de i feil rekkefølge, bytt dem. Gjenta til du går gjennom hele lista uten å bytte noe.

Lag en kopi først, så du ikke endrer originalen: `const kopi = [...tall];`

### Steg 3 – Oppgaver: Feilsøking

Fil: `steg3-feilsok.js`. Denne fila er skrevet av en elev for noen år siden. Den skal vise variabler, funksjoner, arrays og JSON, men den krasjer.

**Minimum:** oppgave 1.

#### Grunnleggende

**Oppgave 1.** Få fila til å kjøre uten feilmelding. Det er tre feil. Node viser bare én om gangen: fiks, kjør på nytt, finn neste.

**Hint 1**

To av feilene handler om at du ikke kan lage en ny `const` med et navn som allerede er brukt. Gi den nye variabelen et annet navn, eller bruk den gamle.

**Hint 2**

Den tredje feilen er i JSON-delen. Et objekt kan ikke stå «løst» i en `.js`-fil. Det må lagres i en variabel: `const skole = { ... };`. Sjekk også at det er komma mellom objektene i lista.

#### Middels

**Oppgave 2.** Fyll ut tabellen for de tre feilene du fant.

**Svar oppgave 2:**

| Linje | Feilmelding | Hva var galt? | Hvordan fikset du det? |
|---|---|---|---|
|  |  |  |  |
|  |  |  |  |
|  |  |  |  |

#### Avansert

**Oppgave 3.** Det finnes en fjerde feil som *ikke* gir feilmelding. Se på de to funksjonene `toCelsius`. Endre første versjon slik at den returnerer `"metode 1"` og kjør. Hva skjer, og hvorfor?

**Hint**

Søk opp «JavaScript function hoisting». Hva skjer med funksjoner før koden kjøres?

**Svar oppgave 3:**

> _Skriv svaret ditt her._

### Steg 4 – Oppgaver: Objekter

Fil: `steg4-objekter.js`. Øverst i fila ligger et eksempel med et elev-objekt som du skal lese og kjøre først. Kjør `node steg4-objekter.js` og sammenlign med forventet utskrift, akkurat som i steg 1.

**Minimum:** oppgave 1–4.

**Kort repetisjon**

Et **objekt** samler verdier som hører sammen. Hver verdi har et navn, en **nøkkel**. Der en array er en nummerert liste, er et objekt en samling med navngitte felt.

```js
const fjell = {
  navn: "Fløya",
  hoyde: 671
};

console.log(fjell.navn);      // Fløya  (les med punktum)
fjell.hoyde = 672;            // endre en verdi
fjell.kommune = "Tromsø";     // legg til en ny egenskap
```

En array kan inneholde objekter. Da henter du først plassen, så egenskapen:

```js
const byer = [
  { navn: "Tromsø", fylke: "Troms" },
  { navn: "Bodø", fylke: "Nordland" }
];

console.log(byer[1].navn);    // Bodø
```

**Objekt og JSON:** JSON er et objekt skrevet som tekst, med anførselstegn rundt alle nøklene. Det er derfor `JSON.parse` gjør JSON-tekst om til et objekt i del 2 og 3.

Klasser, som er en mal for å lage mange like objekter, kommer i del 4.

Les mer om objekter på NDLA: [Objekter og klasser](https://ndla.no/en/r/utvikling-im-itk-vg2/objekter-og-klasser/56056b4594).

| Nr | Nivå | Oppgave | Forventet i konsollen |
|---|---|---|---|
| 1 | Grunnleggende | Lag `spiller`-objektet og skriv ut navnet. | `NordlysNinja` |
| 2 | Grunnleggende | Skriv ut navn og hp i en setning. | `NordlysNinja har 100 hp` |
| 3 | Grunnleggende | Trekk 30 fra `spiller.hp`. | `70` |
| 4 | Grunnleggende | Legg til `klasse = "magiker"`. Skriv ut hele objektet. | `{ navn: 'NordlysNinja', hp: 70, level: 1, klasse: 'magiker' }` |
| 5 | Middels | Lag et objekt for Fløya og skriv en setning. | `Fløya i Tromsø er 671 moh.` |
| 6 | Middels | Lag `lag`-arrayen og skriv ut det andre laget. | `Ishavsulvene` |
| 7 | Middels | Skriv ut alle lagene med poeng med `for`. | Tre linjer, f.eks. `Tromsø Titans: 12 poeng` |
| 8 | Avansert | Finn laget med flest poeng. | `Polarnatt Gaming leder med 15 poeng` |
| 9 | Avansert | Legg til en `inventory`-array i spilleren og push en ting. | `3` |
| 10 | Avansert | Skriv ut alle nøklene med `Object.keys`. | `[ 'navn', 'hp', 'level', 'klasse', 'inventory' ]` |

**Hint oppgave 6**

`lag[1]` er det andre laget. `lag[1].navn` er navnet.

**Hint oppgave 8**

Samme fremgangsmåte som «største hittil» i steg 1, men lagre hele objektet:

```js
let leder = lag[0];
// løkke: hvis lag[i].poeng > leder.poeng, sett leder = lag[i]
```

**Svar:** Når er det lurere å bruke et objekt enn en array?

> _Skriv svaret ditt her._

### Sjekk før du går videre

Forklar for læreren eller sidemannen, uten å se i koden:

1. Hva er forskjellen på `let` og `const`?
2. Hva gjør en `for`-løkke du har skrevet, linje for linje?
3. Hva skjer hvis en funksjon mangler `return`?

**Avslutt delen:** commit og push. Fyll ut del 1 i loggen.
