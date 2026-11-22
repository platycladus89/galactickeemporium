
const vyberProduktu = document.getElementById("produkt");

if (vyberProduktu) {
    const parametry = new URLSearchParams(window.location.search);
    const vybranyProdukt = parametry.get("produkt");

    if (vybranyProdukt) {
        vyberProduktu.value = vybranyProdukt;
    }
}

// formular
const formular = document.getElementById("rezervacniFormular");

if (formular) {
    formular.addEventListener("submit", function (event) {
        event.preventDefault();

        const datum = document.getElementById("datum").value;

        const dnes = new Date();
        dnes.setHours(0, 0, 0, 0);

        const vybraneDatum = new Date(datum + "T00:00:00");

        if (vybraneDatum < dnes) {
            alert("Vy jste nám ale vtipálek!");
            return;
        }

        const jmeno = document.getElementById("jmeno").value;
        const produkt = vyberProduktu.options[vyberProduktu.selectedIndex].text;
        const pocet = document.getElementById("pocet").value;

        const potvrzeni = document.getElementById("potvrzeni");

        potvrzeni.textContent =
            "Děkujeme, " + jmeno + "! Vaše rezervace produktu " +
            produkt + " v počtu " + pocet +
            " kusů byla úspěšně přijata. Těšíme se na Vaši návštěvu! <3";

        formular.reset();
    });
}
