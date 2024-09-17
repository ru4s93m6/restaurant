console.log("running");

import "../styles/style.css";
import displayHomeContent from "../pages/Home/home";
import displayMenuContent from "../pages/Menu/menu";
import displayAboutContent from "../pages/About/about";

const menuItem = document.querySelectorAll(".menu-item");
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    const page = item.textContent.trim().toLocaleLowerCase();
    console.log(page);
    switch (page) {
      case "home":
        displayHomeContent();
        break;
      case "menu":
        displayMenuContent();
        break;
      case "about":
        displayAboutContent();
        break;
      default:
        displayHomeContent();
    }
  });
});

displayHomeContent();
