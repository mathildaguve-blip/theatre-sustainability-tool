export function MaskForm() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>Mask</h2>
        <label>Material:</label>
        <input type="text" placeholder="Sök material..." id="mask-material">
        <label>Butik:</label>
        <input type="text" placeholder="Sök butik..." id="mask-shop">
        <label>Fraktland:</label>
        <input type="text" placeholder="Sök land..." id="mask-country">
        <label>Färgning / Patinering:</label>
        <input type="text" placeholder="Exempel: kaffe, naturfärg..." id="mask-patina">
        <label>Tvätt:</label>
        <input type="text" placeholder="Exempel: 30°C, handtvätt..." id="mask-wash">
    `;
    return div;
}
