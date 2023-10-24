const burger = document.querySelector(".burger");
const leftNavContainer = document.querySelector(".leftNavContainer");

burger.addEventListener("click", () => {
    burger.classList.toggle("active")
    leftNavContainer.classList.toggle("active")
})
