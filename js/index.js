import { materialList, shopList, countryList } from "../data";

// Skapa objekt för kostymer, masker och scenografi
let kostymer = [];
let masker = [];
let rekvisita = [];

// Lägg till en kostym
document.getElementById('addKostym').addEventListener('click', function() {
    let kostymName = prompt("Skriv in kostymens namn:");
    if (kostymName) {
        let kostym = { name: kostymName, materials: [] };
        kostymer.push(kostym);
        renderList();
    }
});

// Lägg till en mask
document.getElementById('addMask').addEventListener('click', function() {
    let maskName = prompt("Skriv in maskens namn:");
    if (maskName) {
        let mask = { name: maskName, materials: [] };
        masker.push(mask);
        renderList();
    }
});

// Lägg till rekvisita (scenografi)
document.getElementById('addRekvisita').addEventListener('click', function() {
    let rekvisitaName = prompt("Skriv in rekvisitans namn:");
    if (rekvisitaName) {
        let rekvisitaItem = { name: rekvisitaName, materials: [] };
        rekvisita.push(rekvisitaItem);
        renderList();
    }
});

// Rendera listor på sidan
function renderList() {
    // Kostymer
    let kostymList = document.getElementById('kostymList');
    kostymList.innerHTML = '';
    kostymer.forEach(function(kostym, index) {
        let kostymItem = document.createElement('div');
        kostymItem.classList.add('item');
        kostymItem.innerHTML = `<strong>${kostym.name}</strong>`;
        kostymList.appendChild(kostymItem);
    });

    // Masker
    let maskList = document.getElementById('maskList');
    maskList.innerHTML = '';
    masker.forEach(function(mask, index) {
        let maskItem = document.createElement('div');
        maskItem.classList.add('item');
        maskItem.innerHTML = `<strong>${mask.name}</strong>`;
        maskList.appendChild(maskItem);
    });

    // Rekvisita
    let scenografiList = document.getElementById('scenografiList');
    scenografiList.innerHTML = '';
    rekvisita.forEach(function(rekvisitaItem, index) {
        let scenografiItem = document.createElement('div');
        scenografiItem.classList.add('item');
        scenografiItem.innerHTML = `<strong>${rekvisitaItem.name}</strong>`;
        scenografiList.appendChild(scenografiItem);
    });
}
