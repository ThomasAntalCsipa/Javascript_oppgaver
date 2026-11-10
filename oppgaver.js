// =====================================================
// Steg 1 - Oppgaver: Grunnleggende JS
// Kjør fila i terminalen:   node steg1-grunnlag.js
//
// Under hver oppgave står det hva som skal komme i konsollen.
// Sammenlign med det du får. Likt? Gå videre.
//
// Tips: skriv oppgavenummeret i console.log, så ser du hva som er hva:
//   console.log("Oppgave 2:", hp);
// =====================================================


// ---------------- VARIABLER ----------------
// En variabel er en navngitt boks som lagrer en verdi.
//   const by = "Tromsø";   -> kan IKKE endres (standardvalget)
//   let alder = 17;        -> kan endres:  alder = 18;  (ikke let andre gang)

// Oppgave 1 (grunnleggende)
// Lag let firstname og let lastname med ditt eget navn.
// Skriv ut begge på samme linje.
// Forventet: Ola Nordmann  (men ditt navn)
console.log("\nOppgave_1:");
let firstname = "Thomas Antal";
let lastname = "Csipa";
console.log(firstname, lastname);


// Oppgave 2 (grunnleggende)
// Lag let hp = 100. Spilleren blir truffet av en isbjørn og mister 30 hp.
// Endre hp (uten let foran) og skriv den ut.
// Forventet: 70
console.log("\nOppgave_2:");
let hp = 100;
hp -= 30;
console.log(hp);


// Oppgave 3 (grunnleggende)
// Lag const PI = 3.14159. Prøv deretter å skrive PI = 3; og kjør fila.
// Skriv i oppgavearket hva feilmeldingen betyr, og fjern linja igjen.
// Forventet: TypeError: Assignment to constant variable.
console.log("\nOppgave_3:");
const PI = 3.14159;
// feilen viste til at jeg prøvde å skrive om verdien til en variabel som det ikke var tilatt å endre
// const betyr jo at den må være konsistant

// Oppgave 4 (middels)
// Et spill på Steam koster 200 kr før moms. Lag const MOMS = 0.25 og let pris = 200.
// Skriv ut prisen med moms.
// Forventet: Pris med moms: 250 kr
console.log("\nOppgave_4:");
let pris = 200;
const MOMS = 0.25;
console.log(pris + pris * MOMS);


// Oppgave 5 (avansert)
// Lag disse som const eller let. Begrunn valgene i oppgavearket:
// maks antall spillere på serveren (16), antall liv igjen (3),
// høyden på Fløya (671), temperaturen i Tromsø nå (-4).
// Forventet: ingenting i konsollen
console.log("\nOppgave_5:");
const max_spillere = 16; // det er stilt inn på serveren, det forandrer ikke seg lett
let mengde_liv = 3;      // liv skal være en resurs som man mister og får
const Fløya = 671;       // et fjell kan man ikke lett forandre høyden på den
let temperatur = -4;     // tempratur måler man, avhengig av når og kor man måler den kan man få forskelige resultat

// ---------------- TEKST OG TALL ----------------
// Tekst (string) står i anførselstegn: "Kari". Tall (number) står uten: 17.
//   + - * /   pluss, minus, gange, dele
//   %         rest etter deling: 7 % 2 gir 1
//   `${navn} er ${alder} år`   setter variabler inn i tekst (backticks)

// Oppgave 6 (grunnleggende)
// Skriv ut typeof hp og typeof firstname.
// Forventet: number
//            string
console.log("\nOppgave_6:");
console.log(typeof(hp), typeof(firstname));


// Oppgave 7 (grunnleggende)
// Bruk backticks og ${} til å skrive ut en setning med firstname og hp.
// Forventet: Ola har 70 hp
console.log("\nOppgave_7:");
console.log(`${firstname} har ${hp} hp`);



// Oppgave 8 (middels)
// Skriv ut 5 + 5, deretter "5" + 5, deretter Number("5") + 5.
// Forklar i oppgavearket hvorfor svar nummer to blir annerledes.
// Forventet: 10
//            55
//            10
console.log("\nOppgave_8:");
console.log(5 + 5);
console.log("5" + 5);
console.log(Number("5") + 5);



// Oppgave 9 (middels)
// 17 elever skal deles i lag på 4. Bruk / og % .
// Skriv ut hvor mange hele lag det blir, og hvor mange som blir til overs.
// Tips: Math.floor(17 / 4) runder ned.
// Forventet: 4 lag
//            1 til overs
console.log("\nOppgave_9:");
let elever = 17;
let elever_per_lag = 4;
const elver_til_overs = elever % elever_per_lag;
const mengde_lag = (elever - elver_til_overs) / elever_per_lag;
console.log(mengde_lag, "lag");
console.log(elver_til_overs, "til overs");


// ---------------- VALG MED IF ----------------
// if kjører koden bare når betingelsen er sann. else kjører ellers.
//   if (temp < 0) { ... } else if (temp < 10) { ... } else { ... }
//   ===  er lik      !==  er ikke lik      <  >  <=  >=
//   &&   og (begge må være sanne)          ||   eller (minst én)

// Oppgave 10 (grunnleggende)
// const temp = -8. Skriv ut "Kuldegrader" hvis temp er under 0.
// Forventet: Kuldegrader
console.log("\nOppgave_10:");
const temp = -8;
if (temp < 0) {
    console.log("Kuldegrader");
}


// Oppgave 11 (grunnleggende)
// Bruk hp fra oppgave 2. Hvis hp er 0 eller mindre: "Game over".
// Ellers: "Spillet fortsetter".
// Forventet: Spillet fortsetter
console.log("\nOppgave_11:");
if (hp <= 0) {
    console.log("Game over");
} else if (hp > 0) {
    console.log("Spillet fortsetter");
} else {
    console.log("error: hp is an invalid value");
}

// Oppgave 12 (middels)
// const klokka = 21. Bruk if, else if og else:
// før 10: "God morgen", før 18: "God dag", ellers: "God kveld".
// Forventet: God kveld
// Test også: endre klokka til 8 og kjør på nytt. Da skal det stå God morgen.
console.log("\nOppgave_12:");
const klokka = 8;
if (klokka < 10) {
    console.log("God morgen");
} else if (klokka < 18) {
    console.log("God dag");
} else {
    console.log("God kveld");
}



// Oppgave 13 (middels)
// Det er gode sjanser for nordlys når skydekket er under 30 OG klokka er 18 eller mer.
// const skydekke = 20 og const time = 22. Bruk &&.
// Forventet: Gode sjanser for nordlys
// Test også: skydekke = 80 skal gi: Dårlige sjanser i kveld
console.log("\nOppgave_13:");
const skydekke = 80;
const time = 22
if (skydekke < 30 && time >= 18) {
    console.log("Gode sjanser for nordlys");
} else {
    console.log("Dårlige sjanser i kveld");
}




// Oppgave 14 (avansert)
// Billett til Fjellheisen: barn under 12 betaler 50 kr, 67 år og eldre betaler 60 kr,
// alle andre betaler 100 kr. Lag let alder og skriv ut prisen.
// Forventet: alder 8 -> 50 kr,  alder 30 -> 100 kr,  alder 70 -> 60 kr
console.log("\nOppgave_14:");
function fra_alder_til_pris(alder){
    if (alder < 0){
        console.log("Gratis")
    } else if (alder < 12) {
        console.log("50kr");
    } else if (alder >= 67) {
        console.log("60kr");
    } else if (alder >= 12 && alder < 67) {
        console.log("100kr");
    } else {
        console.log("error: alder er ikke et tall");
    }
}
fra_alder_til_pris(8)
fra_alder_til_pris(30)
fra_alder_til_pris(70)

// ---------------- LØKKER ----------------
// En løkke gjentar kode.
//   for (let i = 1; i <= 3; i++) { ... }   start; fortsett så lenge; øk med 1
//   while (liv > 0) { liv--; }              så lenge noe er sant (husk å endre verdien!)

// Oppgave 15 (grunnleggende)
// Bruk en for-løkke som skriver ut tallene 1 til 5.
// Forventet: 1
//            2
//            3
//            4
//            5
console.log("\nOppgave_15:");
for(let i = 1; i <= 5; i++) {
    console.log(i);
}


// Oppgave 16 (grunnleggende)
// En rakett skal skytes opp fra Andøya. Tell ned fra 10 til 1 med en for-løkke,
// og skriv ut "Liftoff!" etter løkka.
// Forventet: 10, 9, 8 ... 1 (én per linje), så Liftoff!
console.log("\nOppgave_16:")
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("Liftoff!");


// Oppgave 17 (middels)
// Regn ut summen av alle tallene fra 1 til 100 med en løkke.
// Tips: let sum = 0; før løkka.
// Forventet: 5050
console.log("\nOppgave_17:")
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum)


// Oppgave 18 (middels)
// Lag let bossHp = 100. Hvert slag tar 15 hp. Bruk en while-løkke og tell
// hvor mange slag som trengs før bossHp er 0 eller mindre.
// Forventet: 7 slag
console.log("\nOppgave_18:");
let boss_hp = 100;
let slag_skade = 15;
let antall_slag = 0;
while (boss_hp > 0) {
    boss_hp -= slag_skade;
    antall_slag++;
}
/*
for (let i = boss_hp; i > 0; i -= slag_skade) {
    antall_slag++;
}
console.log(antall_slag);
*/

// Oppgave 19 (avansert)
// Skriv ut tallene 1 til 15. Er tallet delelig med 3, skriv "Nord" i stedet.
// Delelig med 5: "Lys". Delelig med både 3 og 5: "Nordlys".
// Tips: tall % 3 === 0 betyr delelig med 3.
// Forventet: 1, 2, Nord, 4, Lys, Nord, 7, 8, Nord, Lys, 11, Nord, 13, 14, Nordlys
console.log("\nOppgave_19:");
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Nordlys");
    } else if ( i % 3 === 0) {
        console.log("Nord");
    } else if ( i % 5 === 0) {
        console.log("Lys");
    } else {
        console.log(i);
    }
}

// ---------------- ARRAYS ----------------
// En array er en liste: const fag = ["Utvikling", "Driftstøtte"];
//   fag[0]          første verdi (indeks starter på 0)
//   fag.length      antall verdier
//   fag.push("YFF") legger til bakerst
//   fag.length      gir anallet variabler i array
//   for (let i = 0; i < fag.length; i++) { console.log(fag[i]); }



// Oppgave 20 (grunnleggende)
// const byer = ["Tromsø", "Bodø", "Alta", "Harstad", "Narvik"];
// Skriv ut den første byen og hvor mange byer det er.
// Forventet: Tromsø
//            5
console.log("\nOppgave_20:");
const byer = ["Tromsø", "Bodø", "Alta", "Harstad", "Narvik"];
console.log(byer[0]);
console.log(byer.length);



// Oppgave 21 (grunnleggende)
// Legg til "Hammerfest" med push, og skriv ut den siste byen og det nye antallet.
// Tips: siste element er byer[byer.length - 1]
// Forventet: Hammerfest
//            6
console.log("\nOppgave_21:");
byer.push("Hammerfest");
console.log(byer[byer.length - 1]);

// Oppgave 22 (middels)
// Skriv ut alle byene med en for-løkke.
// Forventet: Tromsø, Bodø, Alta, Harstad, Narvik, Hammerfest (én per linje)
console.log("\nOppgave_22:");
for (let i = 0; i < byer.length; i++) {
    console.log(byer[i]);
}


// Oppgave 23 (middels)
// const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
// Tell hvor mange dager det var kaldere enn -5. Bruk for og if.
// Forventet: 3
console.log("\nOppgave_23:");
const temperaturer = [-4, -6, -2, 1, -8, -11, -3];
let cold_counter = 0
for (let i = 0; i < temperaturer.length ; i++){
    if (temperaturer[i] < -5) {
        cold_counter += 1;
    }
}
console.log(cold_counter)

// Oppgave 24 (avansert)
// const inventory = ["sverd", "drikk", "skjold", "drikk", "fiskestang", "drikk"];
// a) Tell hvor mange "drikk" spilleren har.
// b) Lag en ny array uten "drikk" ved å bruke en løkke og push.
// Forventet: 3
//            [ 'sverd', 'skjold', 'fiskestang' ]
console.log("\nOppgave_24:");
const inventory = ["sverd", "drikk", "skjold", "drikk", "fiskestang", "drikk"];
let drikk_counter = 0;
for (let i = 0; i < inventory.length ; i++){
    if (inventory[i] === "drikk") {
        drikk_counter += 1;
    }
}
console.log(drikk_counter);
let inventory_uten_drikk = []
for (let i = 0, item = 0; i < inventory.length ; i++){
    item = inventory[i];
    if (item !== "drikk") {
        inventory_uten_drikk.push(item);
    }
}
console.log(inventory_uten_drikk);


// Oppgave 25 (avansert)
// inventory er const, men push virker likevel. Hvorfor?
// Skriv svaret i oppgavearket.
// Forventet: ingenting i konsollen
console.log("\nOppgave_25:");
// den er en const siden ingen av verdiene inne den kan bli forandret,
// const er bare for de inviduele verdiene inne arrayen, arrayen i seg selv kan bli forandret som man vill
