const menuButton = document.querySelector(".menu-button");
const headerMenu = document.querySelector("#header-menu");
const links = document.querySelectorAll("#header-menu a");

menuButton.addEventListener("click", () => {
    const isOpen = headerMenu.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "閉じる" : "メニュー";
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

menuButton.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
    }
})

function closeMenu() {
    headerMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "メニュー";

}