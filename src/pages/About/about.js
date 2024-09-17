import "./about.css";
import displayMenuContent from "../Menu/menu";

function createAboutTemplate() {
  return `
    <section class="about-container">
      <div class="about-content">
        <div class="about-item">
          <h2>Our Story</h2>
          <p>Founded in 2020, Nutrili was born from a passion for plant-based nutrition and a deep commitment to animal welfare. Our journey began when a group of friends realized the profound impact our food choices have on our health, the environment, and animal lives.</p>
        </div>

        <div class="about-item">
          <h2>Our Mission</h2>
          <p>At Nutrili, we're on a mission to make vegan living delicious, accessible, and fun. We believe that every meal is an opportunity to nourish our bodies, protect our planet, and show compassion to all living beings.</p>
        </div> 

        <div class="about-item">
          <h2>Join Our Community</h2>
          <p>Whether you're a long-time vegan, curious about plant-based eating, or simply looking for delicious meals, Nutrili welcomes you. Join us in creating a kinder, healthier world—one plant-based meal at a time.</p>
        </div> 

        <div class="about-item">
          <div class="cta-section">
            <p>Ready to embark on a tasty, compassionate journey?</p>
            <a href="#" class="cta-button">Explore Our Menu</a>
          </div>
        </div> 
      </div>
    </section>
  `;
}

export default function displayAboutContent() {
  const content = document.querySelector("#content");
  content.innerHTML = createAboutTemplate();

  const ctaButton = document.querySelector(".cta-button");
  ctaButton?.addEventListener("click", () => displayMenuContent());
}
