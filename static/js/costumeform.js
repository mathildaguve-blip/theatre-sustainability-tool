export function CostumeForm() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Kostym</h2>
        <label>Material:</label>
        <input type="text" placeholder="Sök material..." id="costume-material">
        <label>Butik:</label>
        <input type="text" placeholder="Sök butik..." id="costume-shop">
        <label>Fraktland:</label>
        <input type="text" placeholder="Sök land..." id="costume-country">
        <label>Färgning / Patinering:</label>
        <input type="text" placeholder="Exempel: kaffe, naturfärg..." id="costume-patina">
        <label>Tvätt:</label>
        <input type="text" placeholder="Exempel: 30°C, handtvätt..." id="costume-wash">
    `;
    return div;
}

