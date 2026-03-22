// Lista de productos destacados
const productos = [
  {
    image: "/public/images/doctor-rogers-face-wash-front.webp",
    title: "The Essentials",
    description:
      "Productos básicos esenciales para el cuidado diario de la piel y para mantener una barrera cutánea saludable.",
    link: "#",
  },
  {
    image: "/public/images/antiedadFeatured.webp",
    title: "Antienvejecimiento",
    description: "Fórmulas concentradas que combaten los signos del tiempo.",
    link: "#",
  },
  {
    image: "/public/images/40000279_hidraloe_crema_facial_h.webp",
    title: "Hidratación Intensa",
    description:
      "Sueros y cremas que nutren en profundidad y mantienen la piel radiante.",
    link: "#",
  },
];

// Creamos el HTML del producto
function crearTarjeta(producto) {
  return `
    <section class="contain_columnProductFeatured">
          <div class="bx-contentImage-productFeatured">
            <img
              src="${producto.image}"
              alt="${producto.title}"
              class="productFeatured"
            />
          </div>
          <div class="bx-infoProductFeatured">
            <section class="infoProductFeatured">
              <h3 class="titleProductFeatured">${producto.title}</h3>
              <p class="txt txtClamp">${producto.description}</p>
            </section>

            <a href="${producto.link}" class="content-btnExplorerMore">
              <span class="explorer">Explorar</span>
              <i class="bxf bx-arrow-right-stroke"></i>
            </a>
          </div>
        </section>
  `;
}

// Lo renderizamos
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(".content__ProductFeatured");
  contenedor.innerHTML = productos.map(crearTarjeta).join("");
});
