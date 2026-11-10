# Refleksjon: Grunnleggende JavaScript

Svar når du er ferdig med oppgavene i `oppg1_grunnleggende.js`. Skriv med egne ord, og ikke se i koden mens du svarer på del A. Korte svar er helt greit.

---

## A. Forklar med egne ord

**1. Hva er forskjellen på `let` og `const`? Når bruker du hvilken?**

> let lar en variebel eksistere med vilken som helst verdi og const lager en variabel med konsistant verdi.  
let bruker man når man jobber noe uskjent og/eller dynamiskt og const bruker man når man trenger at en verdi skal altid være den samme.  

**2. Hvorfor ble `"5" + 5` til `55`, mens `5 + 5` ble `10`?**

> "5" + 5 blir 55 siden når du gjør + 5 så ser den på den forige verdien og ser at det er en string, så js legger til str(5) til arrayen "5" og vi får "55".  
Når man gjør 5 + 5 så ser js at begge er tall, så da plusses dem sammen matematiskt i vårt ti talls system og gir oss 10.  

**3. Hva gjør `%`? Gi et eksempel fra oppgavene der du brukte den.**

> % er modulo opperatoren (også kalt rest), den er en binær opperator så den bruker to matematiskke verdier og gir en matematiskk verdi tilbake.  
Når du har verdi A foran % og verdi B bakom % så spør du ett enkelt spørsmål, gjenta å trekke B fra A til A blir mindre enn B, hvor mye er A?  
Et eksempel fra en oppgave er:

> let elever = 17;  
let elever_per_lag = 4;  
const elver_til_overs = elever % elever_per_lag;  

> Her lager jeg to variabler for mengde elever og hvor mange elever det er per lag.  
Når jeg lager konstanten elver_til_overs så setter jeg verdien dens til 17 % 4  
Og 17 % 4 er
17 - 4 = 13  
13 - 4 = 9  
9  - 4 = 5  
5  - 4 = 1  
1 er mindre enn 4 så 17 % 4 = 1

```js
// forventer at a og b er to positive tall  
function modulo (a, b) {  
  for (; a > = b; a -= b){}  
  return a;  
}
```

**4. Hva er forskjellen på `=` og `===`?**

> = bruker man for å sette en variabels verdi og  
=== burker man når man vil se om begge sidene er lik og er samme data type  
"0" ==  0 gir true selv om den ene er en string og den andre er ett tall  
"0" === 0 gir false selv om begge sidene representerer 0, men siden de er forskjelig data typer så er dem ikke fult det samme

**5. Forklar de tre delene i denne linja:** `for (let i = 1; i <= 5; i++)`

> for () lager en for løkke  
let i = 1;  lager en variabel på forløkken sin stack
i <= 5; er spørsmålet for løkken stiller for vær gang den skjører igjenom innholdet dens så lenge uttrykket er sant  
i++ gjør at variabelen i blir en strørre, dette skjer hver gang forløkken er ferdig med en rundre

**6. Når er en `while`-løkke bedre enn en `for`-løkke? Hva kan gå galt med en `while`-løkke?**

> En while løkke er bedre hvis man skal bruke alerede etablerte variabler sånn et man trenger å skrive mindre  
Siden en for løkke har det så lett å besteme hva som skjer når den har gått igjenom en runde, så er det vanskeligere å få den til å loope uendeligt  
men for en while løkke så trengere du bare å si om at den skal loope eller ikke, ikke noe om hva den skal gjøre før loopen og etter hver loop.

**7. Hvorfor er den første byen i lista `byer[0]` og ikke `byer[1]`?**

> Siden datamaskiner starter å telle fra 0 som den minste verdi.

---

## B. Bruk det du har lært

**8. Hva skrives ut her? Svar før du tester.**

```js
const temp = -3;
if (temp < -5) {
  console.log("Veldig kaldt");
} else if (temp < 0) {
  console.log("Kaldt");
} else {
  console.log("Mildt");
}
```

> Kaldt

**9. Hva skrives ut her? Svar før du tester.**

```js
const lag = ["Titans", "Ulvene", "Polarnatt"];
lag.push("Nordlys");
console.log(lag.length);
console.log(lag[1]);
```

> 4  
'Ulvene'

**10. Denne koden skal skrive ut 1, 2 og 3, men gjør det ikke. Hva er feil?**

```js
for (let i = 1; i < 3; i++) {
  console.log(i);
}
```

> Du skrev at i skal bli printet hvis i er mindre enn 3  
Du må se om at i er mindre eller lik 3 for å få 3 også printa ut

---

## C. Om din egen læring

**11. Hvilken oppgave var vanskeligst, og hvordan løste du den?**

> Oppgave 19  
Den var ikke vanskelig, men den fikk meg til å tenke mest  
Jeg prøvde å tenke ut hvordan jeg kunne få til å ha en buffer som var "" og hvist i % 3 === 0 så ble "nord" plussa in i bufferen og hvist i % 5 === 0 så ble "lys" plussa på og gjøre bufferen sin første bokstav til en stor bokstav og eller skulle buffere være lik i  
Dette fant jeg ikke ut hvordan jeg kunne skrive på en måte som ville vært kortere enn den enkle måte jeg valgte å løse den på


**12. Hvilken feilmelding fikk du oftest? Hva betydde den?**

> TypeError: Assignment to constant variable  
siden det hva en oppgave som bede meg skrive kode på feil måte.  
Den forteller meg at jeg prøver å skrive om verdien på en konstant, og det er ikke tilatt.

**13. Hva gjorde du når du sto fast? Hva vil du gjøre annerledes neste gang?**

> Satte meg ikke fast

**14. Hvor langt kom du?**

| Nivå          | Kryss av |
|---------------|----------|
| Grunnleggende |x         |
| Middels       |x         |
| Avansert      |x         |

**15. Kryss av for det du kan nå.**

| Jeg kan...                                         | Ja | Litt | Nei |
|----------------------------------------------------|----|------|-----|
| lage variabler med `let` og `const`                |x   |      |     |
| bruke tekst og tall, og sette dem sammen med `${}` |x   |      |     |
| ta valg med `if`, `else if` og `else`              |x   |      |     |
| skrive en `for`-løkke                              |x   |      |     |
| hente, legge til og gå gjennom verdier i en array  |x   |      |     |
| lese en feilmelding og finne riktig linje          |x   |      |     |

**16. Hva vil du øve mer på før vi går videre til funksjoner?**

> C og kansje å lære meg hvordan JS blir brukt kombinert med HTML og CSS