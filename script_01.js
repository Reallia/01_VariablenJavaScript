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

// let firstName,familyName;
// firstName = prompt("Bitte Vornamen eingeben: "); // Prompt erzeugt ein modales Fenster zur Eingabe
// familyName = prompt("Bitte Nachnamen eingeben: ");; // die Daten werden entgegengenommen und bei wieder aufruf der Variable ausgegeben
// console.log(firstName + " " + familyName); // concatenation, hier werden die daten wieder ausgegeben.

// JS ist eine untypisierte Sprache! | untyped

// let test;
// test = "Hi";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);

/***** 03 Konstanten *******/

// const test = "hallo";   // Variablen mit KONSTANTEM Inhalt
// // test = "hi";         // Keine neue Zuweisung zur LZ möglich! --> Fehler
// console.log(test);

/***** 04 Beispiel *******/

let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

/*let year = new Date().getFullYear();
console.log(year);*/                    // zusammenfasung

let date = new Date();
let year = date.getFullYear();
console.log(year);

//Wertzuweisung
ageJohn = 25;
ageMark = 30;

//Berechnung
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

//Ausgabe
console.log("birthYearJohn:" + birthYearJohn);
console.log("birthYearMark:" + birthYearMark);
