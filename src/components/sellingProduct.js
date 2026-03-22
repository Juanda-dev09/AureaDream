//Lista de productos mas vendidos

const productos = [
  {
    image: "/public/images/Productos/BiodermaProduct.webp",
    title: "Agua micelar Sensibio",
    price: "32.00",
    sectionType: "rostro",
    typeProduct: "limpiador",
    link: "#",
  },
  {
    image: "/public/images/Productos/SerumTonificador.webp",
    title: "Serum fortificador Vichy",
    price: "52.00",
    sectionType: "rostro",
    typeProduct: "Tonificador",
    link: "#",
  },
  {
    image: "/public/images/Productos/SerumHidratante.webp",
    title: "Sérum Harumi Centella",
    price: "82.00",
    sectionType: "rostro",
    typeProduct: "Hidratante",
    link: "#",
  },
  {
    image: "/public/images/Productos/GelHidratanteNeuotrogena.webp",
    title: "Gel Hidratante Neutrogena",
    price: "92.00",
    sectionType: "rostro",
    typeProduct: "Hidratante",
    link: "#",
  },
];

//Creamor el HTML de la card

function crearTarjeta(productos) {
  return `
    <section class="cardProduct_moreShopping">
              <div class="bx-imageMoreShopping" style="background-image: url('${productos.image}')">
                <div class="bx-iconArrowCardProductShopping">
                    <i class="bxf bx-arrow-out-up-right-stroke-circle"></i>
                </div>
              </div>

              <div class="contentInfoProduct-shopping">
                <div class="contain-objet">
                  <span class="typeApply">${productos.sectionType}</span>
                  <span class="circle"></span>
                  <span class="typeProduct">${productos.typeProduct}</span>
                </div>

            <div class="bx-titleAndPrice">
                  <h3 class="titleThreed">${productos.title}</h3>
                <span class="priceProduct">$${productos.price}</span>
            </div>
            </div>
    </section>
    
    `;
}

// Renderizamos
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector(
    ".content__cardsProductsMoreShopping",
  );
  contenedor.innerHTML = productos.map(crearTarjeta).join("");
});
