import { dataListe } from "./data.js";
const data = dataListe();
const valueUrl = new URLSearchParams(window.location.search).get('produit');

let product = {};
data.forEach(item => {
    if (item.image == valueUrl) {
        product = item
    }
})

