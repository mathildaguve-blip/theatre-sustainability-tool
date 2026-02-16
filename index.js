// Hämtar data från JSON-filer
let materials = [];
let shops = [];
let countries = [];

async function loadData() {
    try {
        const materialsRes = await fetch("data/materials.json");
        const shopsRes = await fetch("data/shops.json");
        const countriesRes = await fetch("data/countries.json");

        materials = await materialsRes.json();
        shops = await shopsRes.json();
        countries = await countriesRes.json();

        console.log("Data laddad ✅");
        renderInputs();
    } catch (error) {
        console.error("Fel vid laddning av JSON:", error);
    }
}

// Funktion för att skapa kostym
function addKostym() {
    const kostymName = prompt("Ange kostymens namn");
    const kostymDiv = document.createElement("div");
    kostymDiv.innerHTML = `
        <h3>${kostymName}</h3>
        <label>Välj material:</label>
        <input class="kostymMaterialInput" placeholder="Sök material...">
        <label>Välj butik:</label>
        <input class="kostymShopInput" placeholder="Sök butik...">
        <label>Välj land:</label>
        <input class="kostymCountryInput" placeholder="Sök land...">
    `;
    document.getElementById("kostymList").appendChild(kostymDiv);
    setupAutocomplete(".kostymMaterialInput", materials);
    setupAutocomplete(".kostymShopInput", shops);
    setupAutocomplete(".kostymCountryInput", countries);
}

// Funktion för att skapa mask
function addMask() {
    const maskName = prompt("Ange maskens/perukens namn");
    const maskDiv = document.createElement("div");
    maskDiv.innerHTML = `
        <h3>${maskName}</h3>
        <label>Välj material:</label>
        <input class="maskMaterialInput" placeholder="Sök material...">
        <label>Välj butik:</label>
        <input class="maskShopInput" placeholder="Sök butik...">
        <label>Välj land:</label>
        <input class="maskCountryInput" placeholder="Sök land...">
    `;
    document.getElementById("maskList").appendChild(maskDiv);
    setupAutocomplete(".maskMaterialInput", materials);
    setupAutocomplete(".maskShopInput", shops);
    setupAutocomplete(".maskCountryInput", countries);
}

// Funktion för att skapa rekvisita
function addRekvisita() {
    const rekvisitaName = prompt("Ange rekvisitans namn");
    const rekvisitaDiv = document.createElement("div");
    rekvisitaDiv.innerHTML = `
        <h3>${rekvisitaName}</h3>
        <label>Välj material:</label>
        <input class="rekvisitaMaterialInput" placeholder="Sök material...">
        <label>Välj butik:</label>
        <input class="rekvisitaShopInput" placeholder="Sök butik...">
        <label>Välj land:</label>
        <input class="rekvisitaCountryInput" placeholder="Sök land...">
    `;
    document.getElementById("scenografiList").appendChild(rekvisitaDiv);
    setupAutocomplete(".rekvisitaMaterialInput", materials);
    setupAutocomplete(".rekvisitaShopInput", shops);
    setupAutocomplete(".rekvisitaCountryInput", countries);
}

// Autocomplete-funktion
function setupAutocomplete(inputClass, dataArray, field = "name") {
    const inputs = document.querySelectorAll(inputClass);
    inputs.forEach(input => {
        input.addEventListener("input", function () {
            closeAllLists();
            const value = this.value.toLowerCase();
            if (!value) return false;

            const list = document.createElement("div");
            list.setAttribute("class", "autocomplete-list");
            this.parentNode.appendChild(list);

            dataArray
                .filter(item => item[field].toLowerCase().includes(value))
                .slice(0, 20)
                .forEach(item => {
                    const option = document.createElement("div");
                    option.innerHTML = item[field];
                    option.addEventListener("click", function () {
                        input.value = item[field];
                        closeAllLists();
                    });
                    list.appendChild(option);
                });
        });
    });
}

function closeAllLists() {
    const lists = document.getElementsByClassName("autocomplete-list");
    for (let i = 0; i < lists.length; i++) {
        lists[i].parentNode.removeChild(lists[i]);
    }
}

// Uppdatera resultat efter varje val
function updateResult() {
    const kostymMaterial = document.getElementById("kostymMaterialInput").value;
    const maskMaterial = document.getElementById("maskMaterialInput").value;
    const scenografiMaterial = document.getElementById("scenografiMaterialInput").value;

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h3>Valda Material:</h3>
        <p>Kostym: ${kostymMaterial}</p>
        <p>Mask: ${maskMaterial}</p>
        <p>Scenografi: ${scenografiMaterial}</p>
        <h3>Hållbarhetspoäng: </h3>
        <p>Beräknas här</p> <!-- Placeholder för hållbarhetspoäng -->
    `;
}

document.getElementById("addKostym").addEventListener("click", addKostym);
document.getElementById("addMask").addEventListener("click", addMask);
document.getElementById("addRekvisita").addEventListener("click", addRekvisita);

loadData();

