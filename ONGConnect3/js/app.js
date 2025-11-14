// js/app.js
import { pages } from "./templates.js";
import { validateForm } from "./form.js";

const app = document.querySelector("#app");

function navigateTo(route) {
  if (!pages[route]) {
    console.warn(`Rota "${route}" não encontrada. Voltando para Home.`);
    route = "home";
  }

  app.innerHTML = pages[route];
  if (route === "cadastro") validateForm();
}

// Navegação dinâmica SPA
document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-route]");
  if (!target) return;

  const route = target.dataset.route;
  e.preventDefault();

  navigateTo(route);

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.route === route);
  });
});

navigateTo("home");
