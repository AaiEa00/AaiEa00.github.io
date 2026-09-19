const menuButton = document.querySelector(".menu-button");
const headerMenu = document.querySelector("#header-menu");

menuButton.addEventListener("click", () => {
    const isOpen = headerMenu.classList.toggle("is-open");

    menu-menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "閉じる" : "メニュー";
});