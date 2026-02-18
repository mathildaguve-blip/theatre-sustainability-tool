// Skapa listor för kostymer, masker och rekvisita
let kostymer = [];
let masker = [];
let rekvisita = [];

// Vänta tills sidan är laddad
document.addEventListener("DOMContentLoaded", function () {

    // Lägg till en kostym
    document.getElementById("addKostym").addEventListener("click", function () {
        let kostymName = prompt("Skriv in kostymens namn:");
        if (kostymName) {
            let kostym = { name: kostymName };
            kostymer.push(kostym);
            renderList();
        }
    });

    // Lägg till en mask
    document.getElementById("addMask").addEventListener("click", function () {
        let maskName = prompt("Skriv in maskens namn:");
        if (maskName) {
            let mask = { name: maskName };
            masker.push(mask);
            renderList();
        }
    });

    // Lägg till rekvisita
    document.getElementById("addRekvisita").addEventListener("click", function () {
        let rekvisitaName = prompt("Skriv in rekvisitans namn:");
        if (rekvisitaName) {
            let rekvisitaItem = { name: rekvisitaName };
            rekvisita.push(rekvisitaItem);
            renderList();
        }
    });

});

// Rendera listorna på sidan
function renderList() {

    // Kostymer
    let kostymList = document.getElementById("kostymList");
    kostymList.innerHTML = "";
    kostymer.forEach(function (kostym) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = "<strong>" + kostym.name + "</strong>";
        kostymList.appendChild(item);
    });

    // Masker
    let maskList = document.getElementById("maskList");
    maskList.innerHTML = "";
    masker.forEach(function (mask) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = "<strong>" + mask.name + "</strong>";
        maskList.appendChild(item);
    });

    // Rekvisita
    let scenografiList = document.getElementById("scenografiList");
    scenografiList.innerHTML = "";
    rekvisita.forEach(function (rekvisitaItem) {
        let item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = "<strong>" + rekvisitaItem.name + "</strong>";
        scenografiList.appendChild(item);
    });

}
