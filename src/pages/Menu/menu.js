import "./menu.css";
import SaladImage from "../../images/salad.jpg";
import CuscusImage from "../../images/cuscus.jpg";
import LunchboxImage from "../../images/lunchbox.jpg";

const items = [
  {
    name: "Mixed Greens Wrap",
    price: 8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus ea optio laudantium odit nihil! Mollitia at eaque ab facilis, magni, reiciendis soluta dicta explicabo corrupti dolorum",
    url: SaladImage,
  },
  {
    name: "Quinoa Vegetable Medley",
    price: 8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus ea optio laudantium odit nihil! Mollitia at eaque ab facilis, magni, reiciendis soluta dicta explicabo corrupti dolorum",
    url: CuscusImage,
  },
  {
    name: "Vegan Bento Box Salad",
    price: 8,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatibus ea optio laudantium odit nihil! Mollitia at eaque ab facilis, magni, reiciendis soluta dicta explicabo corrupti dolorum",
    url: LunchboxImage,
  },
];

function createMenuItemTemplate(item) {
  return `
   <div class="menu-item">
      <div class="item-info">
        <h3>${item.name}</h3>
        <p> 
          ${item.description}
        </p>
        <p class="item-price">$ ${item.price}</p>
      </div>
      <div class="item-image">
        <img src=${item.url} width="200" height="200" alt=${item.name} loading="lazy"/>
      </div>
   </div>
  `;
}

function createMenuTemplate() {
  let templateArray = items.map((item) => {
    return createMenuItemTemplate(item);
  });

  return `
    <div class="menu-container">
      ${templateArray.join("")}
    </div>
  `;
}

export default function displayMenuContent() {
  const content = document.querySelector("#content");
  content.innerHTML = createMenuTemplate();
}
