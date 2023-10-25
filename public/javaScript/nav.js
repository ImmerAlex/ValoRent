const burger = document.querySelector(".burger");
const leftNavContainer = document.querySelector(".leftNavContainer");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    leftNavContainer.classList.toggle("active");

    if (leftNavContainer.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
});
