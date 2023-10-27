import { dataListe } from "./data.js";
const data = dataListe();
const valueUrl = new URLSearchParams(window.location.search).get('produit');

const getProduct = () => {
    let temp = {}
    data.forEach(item => {
        if (item.image == valueUrl) {
            temp = item;
        }
    })
    return temp;
}



const getName = (data) => {
    return data.image.split("/").pop().split(".")[0].split("_").join(" ")
}

const createProductView = (data) => {
    const containerAll = document.querySelector(".container-all")
    containerAll.innerHTML = `
    <img src="${data.image}" alt="">
      <div class="containerInfo">
      <h1>${getName(data)}</h1>
      <p class="price">$${data.price}</p>
      <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repudiandae sunt minima enim ipsam eaque magnam corrupti est nostrum, totam quaerat aut beatae quas voluptatum magni at neque aperiam asperiores.</p>
      <div>
          <p class="sub">-</p>
          <input type="number" value="1">
          <p class="add">+</p>
          </div>
          <a href="cart.html" class="addCart">Add to cart - $<span>${data.price}</span></a>
          <a href="cart.html" class="buyNow">Buy now</a>
      </div>
      `;
}

    
document.addEventListener("DOMContentLoaded", () => {
    const product = getProduct()
    createProductView(product)

    const buttonInput = [document.querySelector(".containerInfo div .add"), document.querySelector(".containerInfo div .sub")]
    const input = document.querySelector(".containerInfo div input")

    const updatePrice = (multiplicateur, price) => {
        const priceNotCalculate = document.querySelector(".addCart span")
        priceNotCalculate.textContent = price * multiplicateur
    }

    input.addEventListener("input", () => {
        updatePrice(parseInt(input.value), product.price)
    })

    buttonInput.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList[0] == "sub") {
                if (parseInt(input.value) > 1) {
                    input.value = parseInt(input.value) - 1
                }
            }
            else if (button.classList[0] == "add") {
                input.value =  parseInt(input.value) + 1
            }
            updatePrice(parseInt(input.value), product.price)
        })
    })
})
