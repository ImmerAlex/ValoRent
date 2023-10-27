import { dataListe } from "./data.js";
const data = dataListe();

const containerCard = document.querySelector(".container-card");
const buttonShowMore = document.querySelector(".containerItem button");


document.addEventListener("DOMContentLoaded", () => {
    const getName = (data) => {
        return data.image.split("/").pop().split(".")[0].split("_").join(" ")
    }

    const showMore = () => {
        const hideItems = document.querySelectorAll(".item-card.hide");
        for (let i = 0; i < 9; i++) {
            if (hideItems[i]) {
                hideItems[i].classList.remove("hide");
            }
        }
    }

    let nbrCard = 0;
    for (let i = 0; i < data.length; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item-card");
        if (nbrCard > 8) {
            newDiv.classList.add("hide");
        };
        newDiv.setAttribute("data-type", data[i].type);
        newDiv.setAttribute("data-price", data[i].price);

        newDiv.innerHTML = `
            <a href="product_page.html?produit=${encodeURI(data[i].image)}">
                <img src="${data[i].image}" alt="">
            </a>
            <div>
                <h1>${getName(data[i])}</h1>
                <p class="price">${data[i].price}</p>
            </div>
        `;


        nbrCard++;
        containerCard.appendChild(newDiv);
    }

    buttonShowMore.addEventListener("click", showMore);
})


const filterCheckbox = document.querySelectorAll(".item-filter.type div input");

filterCheckbox.forEach(checkBox => {
    checkBox.addEventListener("click", () => {
        filterCheckbox.forEach(falseCheck => {
            falseCheck.checked = false;
        });
        checkBox.checked = true;
        showFiltred(checkBox.getAttribute("data-type"));
    });
});

const showFiltred = (type) => {
    const allItemCard = document.querySelectorAll(".item-card", ".item-card.hide");

    allItemCard.forEach(item => {
        item.classList.add("hide")
        if (type === "tout") {
            item.classList.remove("hide")
        }
        else if (item.getAttribute("data-type") === type) {
            item.classList.remove("hide")
        };
    });
};
