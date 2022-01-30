"use strict";

// HTML-element
const menubtnEl = document.getElementById("mobilemenubtn");
const menuulEl = document.getElementById("mobilemenuul");

// Dölj mobilmenyn när JavaScript är tillgängligt (för mindre skärmar)
if (window.matchMedia("(max-width: 900px)").matches) {
    menuulEl.style.display = "none";
    menubtnEl.innerHTML = "Meny";
}

// Kontrollera skärmbredd vid ändring av fönsterstorlek
window.onresize = () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        menuulEl.style.display = "none";
        menubtnEl.innerHTML = "Meny";
    } else {
        menuulEl.style.display = "";
    }
}

// Eventhanterare, lyssna efter klick på menyknappen
menubtnEl.addEventListener("click", toggleMenu);

function toggleMenu() {
    // Kontrollera om menyn är dold
    if (menuulEl.style.display == "none") {
        // Visa menyn
        menuulEl.style.display = "";
        menubtnEl.innerHTML = "Stäng menyn";
    } else {
        //Dölj menyn
        menuulEl.style.display = "none";
        menubtnEl.innerHTML = "Meny";
    }
}