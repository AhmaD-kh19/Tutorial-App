function Kategorie(name) {
    this.name = name;
    this.tutorials = []; // Array für Tutorials
    this.bild = null; // Ein Bild für die Kategorie

    // Methode zum Hinzufügen eines Tutorials
    this.fuegeTutorialHinzu = function (tutorial) {
        this.tutorials.push(tutorial);
    };

    // Methode zum Hinzufügen eines Bildes
    this.fuegeBildHinzu = function (bild) {
        this.bild = bild; // Es kann nur ein Bild pro Kategorie geben
    };
}


function Tutorial(name, sprache, beschreibung, dauer, datum, url, embedecode) {
    this.name = name;
    this.sprache = sprache;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = new Date(datum);
    this.url = url;
    this.embedecode = embedecode;
    this.kategorien = [];
    this.kapitelliste = [];
    this.bild = null;

    // Methode zum Hinzufügen einer Kategorie
    this.fuegeKategorieHinzu = function (kategorie) {
        if (!this.kategorien.includes(kategorie)) {
            this.kategorien.push(kategorie);
        }
    };

    // Methode zum Hinzufügen eines Kapitels
    this.fuegeKapitelHinzu = function (kapitel) {
        this.kapitelliste.push(kapitel);
    };

    // Methode zum Hinzufügen eines Bildes
    this.fuegeBildHinzu = function (bild) {
        this.bild = bild; // Es kann nur ein Bild pro Tutorial geben
    };
}


function Bild(url, name) {
    this.url = url;
    this.name = name;

}

function Kapitel(name, beschreibung, dauer) {
    this.name = name;
    this.beschreibung = beschreibung;
    this.dauer = dauer;


}

// Hilfsfunktion zur Umwandlung der Dauer im Format "HH:MM" in "x Std. y Min."
function getDauerInStundenUndMinuten(dauer) {
    // Dauer wird aufgeteilt
    let [stunden, minuten] = dauer.split(":");
    return `${stunden} Std. ${minuten} Min.`;
}


// Erstellen von Kategorie-Objekten
let kategorie1 = new Kategorie("JavaScript");
let kategorie2 = new Kategorie("Webentwicklung");
let kategorie3 = new Kategorie("Programmierung");
let kategorie4 = new Kategorie("Datenbanken");
let kategorie5 = new Kategorie("ssss");

// Bilder für Kategorien erstellen
let bild1 = new Bild("https://example.com/js_bild.jpg", "JavaScript Bild");
let bild2 = new Bild("https://example.com/webdev_bild.jpg", "Webentwicklung Bild");
let bild3 = new Bild("https://example.com/prog_bild.jpg", "Programmierung Bild");
let bild4 = new Bild("https://example.com/db_bild.jpg", "Datenbank Bild");

// Füge Bilder zu Kategorien hinzu
kategorie1.fuegeBildHinzu(bild1);
kategorie2.fuegeBildHinzu(bild2);
kategorie3.fuegeBildHinzu(bild3);
kategorie4.fuegeBildHinzu(bild4);

// Erstellen von Tutorial-Objekten
let tutorial1 = new Tutorial("Einführung in JavaScript", "Deutsch", "Ein grundlegendes Tutorial über JavaScript.", "01:30", "2025-02-06", "https://example.com/tutorial1", "embed_code_1");
let tutorial2 = new Tutorial("Grundlagen der Webentwicklung", "Deutsch", "Lernen Sie die Grundlagen der Webentwicklung.", "02:00", "2025-02-07", "https://example.com/tutorial2", "embed_code_2");

// Erstellen von Kapitel-Objekten für das Tutorial "Einführung in JavaScript"
let kapitel1_1 = new Kapitel("Kapitel 1", "Einführung in Variablen", "00:30");
let kapitel1_2 = new Kapitel("Kapitel 2", "Funktionen und Schleifen", "00:30");
let kapitel1_3 = new Kapitel("Kapitel 3", "Objektorientierung in JavaScript", "00:30");

// Erstellen von Kapitel-Objekten für das Tutorial "Grundlagen der Webentwicklung"
let kapitel2_1 = new Kapitel("Kapitel 1", "HTML und CSS", "00:40");
let kapitel2_2 = new Kapitel("Kapitel 2", "JavaScript für Webentwickler", "00:40");
let kapitel2_3 = new Kapitel("Kapitel 3", "Webentwicklung mit Node.js", "00:40");

// Füge Kapitel zu Tutorials hinzu
tutorial1.fuegeKapitelHinzu(kapitel1_1);
tutorial1.fuegeKapitelHinzu(kapitel1_2);
tutorial1.fuegeKapitelHinzu(kapitel1_3);

tutorial2.fuegeKapitelHinzu(kapitel2_1);
tutorial2.fuegeKapitelHinzu(kapitel2_2);
tutorial2.fuegeKapitelHinzu(kapitel2_3);

// Füge Kategorien zu Tutorials hinzu
tutorial1.fuegeKategorieHinzu(kategorie1);
tutorial1.fuegeKategorieHinzu(kategorie3);
tutorial1.fuegeKategorieHinzu(kategorie5);

tutorial2.fuegeKategorieHinzu(kategorie2);
tutorial2.fuegeKategorieHinzu(kategorie4);

// Bilder zu Tutorials hinzufügentutorial1.fuegeKategorieHinzu(kategorie3);
tutorial1.fuegeBildHinzu(bild1);
tutorial2.fuegeBildHinzu(bild2);

// Arrays zur Verwaltung der Objekte
let kategorien = [kategorie1, kategorie2, kategorie3, kategorie4];
let tutorials = [tutorial1, tutorial2];

// Ausgabe der Daten
// console.log("Kategorien:");
// kategorien.forEach(kat => console.log(kat));

// Sortieren der Kategorien nach dem Namen (aufsteigend) unter Verwendung von localeCompare
kategorien.sort((a, b) => a.name.localeCompare(b.name));

// Ausgabe der Daten
// console.log("Kategorien:");
// kategorien.forEach(kat => console.log(kat));

// // Ausgabe der Tutorials
// console.log("\nTutorials:");
// tutorials.forEach(tut => {
//     console.log(tut.name);
//     tut.kapitelliste.forEach(kap => console.log(` - ${kap.name}: ${kap.beschreibung}, Dauer: ${kap.dauer}`));
// });



// Funktion getTutorialsZuKategorie(kategorieName)
function getTutorialsZuKategorie(kategorieName) {
    let result = [];

    // Durchlaufe alle Tutorials
    tutorials.forEach(tutorial => {
        // Überprüfe, ob eine der Kategorien des Tutorials dem gesuchten Namen entspricht
        tutorial.kategorien.forEach(kat => {
            if (kat.name === kategorieName) {
                result.push(tutorial); // Füge das Tutorial zum Ergebnis hinzu
            }
        });
    });

    return result;
}

// Beispielaufruf der Funktion
// let tutorialsZuWebEntwicklung = getTutorialsZuKategorie("Webentwicklung");

// // Ausgabe der Tutorials, die zur Kategorie "Webentwicklung" gehören
// console.log("Tutorials zur Kategorie 'Webentwicklung':");
// tutorialsZuWebEntwicklung.forEach(tut => {
//     console.log(tut);
// });



// Funktion, um alle Tutorials in Kategorien auszugeben
function printTutorials() {
    // Durchlaufe alle Kategorien
    kategorien.forEach(kategorie => {
        // Gebe die Kategorie aus
        console.log(`Kategorie: ${kategorie.name}`);
        console.log(`Bild: ${kategorie.bild.name}`);

        // Hole alle Tutorials der Kategorie
        let tutorialsZuKategorie = getTutorialsZuKategorie(kategorie.name);

        // Gehe durch jedes Tutorial in dieser Kategorie
        tutorialsZuKategorie.forEach(tut => {
            // Gebe die allgemeinen Infos zum Tutorial aus
            console.log(`${tut.name} (${tut.sprache}) ${tut.datum.toLocaleDateString()}`);
            console.log(tut.beschreibung);
            console.log(getDauerInStundenUndMinuten(tut.dauer));
            console.log(`${tut.embedecode} bzw. ${tut.url}`);
            // Gehe durch alle Kapitel des Tutorials
            tut.kapitelliste.forEach(kapitel => {
                // Gebe Kapitelinformationen aus
                console.log(`${getDauerInStundenUndMinuten(kapitel.dauer)} ${kapitel.name}:`);
                console.log(`${kapitel.beschreibung}`);
            });
        });
        console.log("..............................................");
    });
}

printTutorials();