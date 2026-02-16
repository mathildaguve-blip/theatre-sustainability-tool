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

function renderInputs() {
    const app = document.getElementById("app");

    app.innerHTML += `
        <h2>Välj material, butik och land</h2>
        <label>Välj material:</label>
        <input id="materialInput" placeholder="Sök material...">
        <label>Välj butik:</label>
        <input id="shopInput" placeholder="Sök butik...">
        <label>Välj land:</label>
        <input id="countryInput" placeholder="Sök land...">
    `;

    setupAutocomplete("materialInput", materials);
    setupAutocomplete("shopInput", shops);
    setupAutocomplete("countryInput", countries);
}

// Autocomplete-funktion
function setupAutocomplete(inputId, dataArray, field = "name") {
    const input = document.getElementById(inputId);

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

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

function closeAllLists(elmnt) {
    const lists = document.getElementsByClassName("autocomplete-list");
    for (let i = 0; i < lists.length; i++) {
        if (elmnt !== lists[i]) {
            lists[i].parentNode.removeChild(lists[i]);
        }
    }
}

loadData();
