function addComponents() {
  ///HEADER///
  const header = document.querySelector(".header-component");
  headerComponent(header);

  const footer = document.querySelector(".footer-container");
  footerComponent(footer);
}

function getContenfulPortfolio() {
  return fetch(
    "https://cdn.contentful.com/spaces/lic78vgan6di/environments/master/entries?access_token=JpS3-IfVxIwLHmtJnRbdhUBEDVv6MEnMT2-sVKX2fQI&&content_type=portfolio"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollections = data.items.map((item) => {
        const idImagen = item.fields.portfolioimg.sys.id;
        const imagen = buscarImagen(idImagen, data);
        const Img = imagen.fields.file.url;
        return {
          title: item.fields.portfolioTitulo,
          description: item.fields.portfolioDescription,
          image: Img,
        };
      });
      return fieldsCollections;
    });
}
function buscarImagen(id, data) {
  const imagen = data.includes.Asset.find((asset) => {
    return asset.sys.id == id;
  });

  return imagen;
}

function addPortfolioCards(params) {
  const template = document.querySelector("#portfolio-card-template");
  const container = document.querySelector(".portfolio-content");

  template.content.querySelector(".portfolio-card-title").textContent =
    params.title;
  template.content.querySelector(".portfolio-card-text").textContent =
    params.description;
  template.content.querySelector(".portfolio-img").src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function main() {
  addComponents();
  getContenfulPortfolio().then((port) => {
    for (const i of port) {
      addPortfolioCards(i);
    }
  });
}

main();
