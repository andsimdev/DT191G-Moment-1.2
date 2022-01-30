"use strict";
// HTML-element
const logoEl = document.getElementById("logo");
const dateEl = document.getElementById("datebox");
const mainmenuEl = document.getElementById("mainnav");
const headerEl = document.getElementById("mainheader");
const containerEl = document.getElementById("content");

// Eventhanterare triggad av skrollning
window.onscroll = function () {
    // Kontrollera om positionen är längre ner än toppen
    if (scrollY > 0) {
        // Anpassa sidhuvud och element
        logoEl.style.width = "175px";
        headerEl.style.position = "fixed";
        headerEl.style.top = "0";
        headerEl.style.width = "100vw";
        mainmenuEl.style.display = "none";
        dateEl.style.display = "none";
        containerEl.style.marginTop = "100px";
    } else {
        // Återställ sidhuvud och element
        logoEl.style.width = "";
        headerEl.style.position = "";
        headerEl.style.top = "";
        headerEl.style.width = "";
        mainmenuEl.style.display = "";
        dateEl.style.display = "";
        containerEl.style.marginTop = "";
    }
}