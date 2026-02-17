export function ScenographyForm() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Scenografi</h2>
        <label>Material:</label>
        <input type="text" placeholder="Sök material..." id="sceno-material">
        <label>Butik:</label>
        <input type="text" placeholder="Sök butik..." id="sceno-shop">
        <label>Fraktland:</label>
        <input type="text" placeholder="Sök land..." id="sceno-country">
        <label>Färgning / Patinering:</label>
        <input type="text" placeholder="Exempel: kaffe, naturfärg..." id="sceno-patina">
        <label>Tvätt:</label>
        <input type="text" placeholder="Exempel: 30°C, handtvätt..." id="sceno-wash">
    `;
    return div;
}

