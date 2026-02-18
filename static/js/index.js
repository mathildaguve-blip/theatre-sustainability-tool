document.addEventListener("DOMContentLoaded", function () {

    let items = [];

    // Klimatdata
    const materialImpact = {
        bomull: 5,
        polyester: 9,
        ull: 8,
        siden: 6
    };

    const countryMultiplier = {
        sverige: 1,
        kina: 1.8,
        usa: 1.5,
        indien: 1.6,
        italien: 1.2
    };

    const transportPerKm = 0.02; // kg CO2 per km per kg

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

        let weight = parseFloat(prompt("Vikt i kg:"));
        if (isNaN(weight)) return;

        let shop = prompt("Butik (H&M, Shein, Etsy, eBay, Vinted):").toLowerCase();

        let country;

        // Om det är en känd kedja
        if (shopOrigin[shop]) {
            country = shopOrigin[shop];
        } else {
            // Marketplace → fråga användaren
            country = prompt("Vilket land skickades det från?").toLowerCase();
            if (!countryMultiplier[country]) {
                alert("Okänt land");
                return;
            }
        }

        let distance = parseFloat(prompt("Ungefärlig fraktsträcka i km:"));
        if (isNaN(distance)) return;

        // Beräkning
        let productionImpact =
            weight * materialImpact[material] * countryMultiplier[country];

        let transportImpact =
            weight * distance * transportPerKm;

        let totalCO2 = productionImpact + transportImpact;

        items.push({
            name,
            material,
            weight,
            shop,
            country,
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
                Material: ${item.material}<br>
                Butik: ${item.shop}<br>
                Ursprungsland: ${item.country}<br>
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

