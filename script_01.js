"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Zeilen-Kommentar
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung *******/

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); //Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName); //Ausgabe
// console.log(firstName + " " + familyName); // concatenation

/***** 03 Deklaration + Wertzuweisung II *******/

let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben: "); // Prompt erzeugt ein modales Fenster zur Eingabe
familyName = prompt("Bitte Nachnamen eingeben: ");; // die Daten werden entgegengenommen und bei wieder aufruf der Variable ausgegeben
console.log(firstName + " " + familyName); // concatenation, hier wwerden die daten wieder ausgegeben.
