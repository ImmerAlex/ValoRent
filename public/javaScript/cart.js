const orderTitle = document.querySelectorAll(".order-title");
const orderTitleSpan = document.querySelectorAll(".order-title span");
const orderTxt = document.querySelectorAll(".order-txt");

for (let i = 0; i < orderTitle.length; i++) {
    orderTitle[i].addEventListener("click", () => {
        orderTxt[i].classList.toggle("show")
        orderTitleSpan[i].innerHTML = orderTitleSpan[i].textContent === "+" ? "-" : "+"
    })
}
