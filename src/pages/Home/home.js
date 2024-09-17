import "./home.css";
import heroImage from "../../images/hero.jpg";

function createHomeTemplate() {
  return `
    <div class="hero">
      <div class="image-container">
        <img src="${heroImage}" alt="Vegan lifestyle" width="400" loading="lazy">
      </div>

      <div class="text-container">
        <h2>Free talk about going vegan!</h2>
        <h1>go vegan & <span>animal friendly<span></h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Quas accusantium modi libero laudantium.
        </p>
        <button class="cta-button">Register now!</button>
      </div>
    </div>
  `;
}

export default function displayHomeContent() {
  const content = document.querySelector("#content");
  content.innerHTML = createHomeTemplate();
}
