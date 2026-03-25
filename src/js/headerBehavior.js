/**
 * Header: Control de fondo (Todos) y auto-ocultamiento (Solo Desktop)
 */
const navbar = document.querySelector(".contentHeader-sectionHero-aureaDream");
const isDesktop = window.matchMedia("(min-width: 1025px)");

if (navbar) {
  let scrollTimeout = null;
  const HIDE_DELAY = 1200;

  window.addEventListener("scroll", () => {
    // 1. LÓGICA GLOBAL: Aplicar fondo al hacer scroll (Funciona en todo)
    navbar.classList.toggle("activeBgHeaderPage", window.scrollY > 0);

    // 2. LÓGICA DESKTOP: Ocultar/Mostrar automáticamente
    if (isDesktop.matches) {
      navbar.classList.remove("header-hidden");
      clearTimeout(scrollTimeout);

      if (window.scrollY > 0) {
        scrollTimeout = setTimeout(() => {
          navbar.classList.add("header-hidden");
        }, HIDE_DELAY);
      }
    }
  });

  // Lógica de Hover (Solo Desktop)
  navbar.addEventListener("mouseenter", () => {
    if (isDesktop.matches) {
      clearTimeout(scrollTimeout);
      navbar.classList.remove("header-hidden");
    }
  });

  navbar.addEventListener("mouseleave", () => {
    if (isDesktop.matches && window.scrollY > 0) {
      scrollTimeout = setTimeout(() => {
        navbar.classList.add("header-hidden");
      }, HIDE_DELAY);
    }
  });
}
