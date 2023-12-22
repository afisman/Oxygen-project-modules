const hamburguer_menu = document.getElementById("hamburguer_menu");
const nav_links = document.getElementById("nav_links");
const hamburger_button = document.getElementById("hamburger_button")
const close_hamburger_button = document.getElementById("close_hamburger_button")

let activate = false;

hamburguer_menu.addEventListener("click", () => {
    if (activate === false) {
        nav_links.style.display = "block";
        hamburger_button.style.display = "none";
        close_hamburger_button.style.display = "flex";
        activate = true;
    } else {
        nav_links.style.display = "none";
        hamburger_button.style.display = "flex";
        close_hamburger_button.style.display = "none";
        activate = false;
    }
});