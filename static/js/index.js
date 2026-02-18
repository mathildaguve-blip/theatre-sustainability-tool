document.addEventListener("DOMContentLoaded", function () {

    let items = [];

    // Klimatdata per kg
    const materialImpact = {
        bomull: 5,
        polyester: 9,
        ull: 8,
        siden: 6
    };

    // Omräkning meter → kg (ungefärliga värden)
    const meterToKg = {
        bomull: 0.2,
        polyester: 0.25,
        ull: 0.3,
        siden: 0.15
    };

    // Styckvikt (ungefärlig)
    const pieceWeight = {
        knapp: 0.01,
        sko: 0.8,
        hatt: 0.3
    };

    const countryMultiplier = {
        sverige: 1,
        kina: 1.8,
        usa: 1.5,
        indien: 1.6,
        italien: 1.2
    };

    const transportPerKm = 0.02;

    const shopOrigin = {
        "h&m": "sverige",
        "shein": "kina"
    };

    document.getElementById("addKostym").addEventListener("click", function () {

        let name = prompt("Namn:");
        if (!name) return;

        let material = prompt("Material (bomull, polyester, ull, siden):").toLowerCase();
        if (!materialImpact[material]) {
            alert("Okänt material");
            return;
        }

        let unitType = prompt("Enhet? (kg, meter, styck)").toLowerCase();

        let quantity = parseFloat(prompt("Hur mycket?"));
        if (isNaN(quantity)) return;

        let weightKg = 0;

        if (unitType === "kg") {
            weightKg = quantity;
        }

        else if (unitType === "meter") {
            weightKg = quantity * meterToKg[material];
        }

        else if (unitType === "styck") {
            let piece = prompt("Vad är det för typ? (knapp, sko, hatt)").toLowerCase();
            if (!pieceWeight[piece]) {
                alert("Okänd stycktyp");
                return;
            }
            weightKg = quantity * pieceWeight[piece];
        }

        else {
            alert("Ogiltig enhet");
            return;
        }

        let shop = prompt("Butik (H&M, Shein, Etsy, eBay, Vinted):").toLowerCase();

        let country;

        if (shopOrigin[shop]) {
            country = shopOrigin[shop];
        } else {
            country = prompt("Vilket land skickades det från?").toLowerCase();
            if (!countryMultiplier[country]) {
                alert("Okänt land");
                return;
            }
        }

        let distance = parseFloat(prompt("Fraktsträcka i km:"));
        if (isNaN(distance)) return;

        let productionImpact =
            weightKg * materialImpact[material] * countryMultiplier[country];

        let transportImpact =
            weightKg * distance * transportPerKm;

        let totalCO2 = productionImpact + transportImpact;

        items.push({
            name,
            totalCO2
        });

        render();
    });

    function render() {

        let list = document.getElementById("kostymList");
        list.innerHTML = "";

        let total = 0;

        items.forEach(item => {

            total += item.totalCO2;

            let div = document.createElement("div");
            div.innerHTML = `
                <strong>${item.name}</strong><br>
                CO₂: ${item.totalCO2.toFixed(2)} kg
                <hr>
            `;

            list.appendChild(div);
        });

        document.getElementById("result").innerHTML = `
            <h2>Total klimatpåverkan</h2>
            <p>${total.toFixed(2)} kg CO₂</p>
        `;
    }

});


});

