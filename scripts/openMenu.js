const hamburguer_menu = document.getElementById("hamburguer_menu");
const nav_links = document.getElementById("nav_links");
const hamburger_button = document.getElementById("hamburger_button");

let activate = false;

hamburguer_menu.addEventListener("click", () => {
    if (activate === false) {
        nav_links.style.display = "block";
        hamburger_button.innerText = "X";
        activate = true;
    } else {
        nav_links.style.display = "none";
        hamburger_button.innerText = "☰";
        activate = false;
    }
});