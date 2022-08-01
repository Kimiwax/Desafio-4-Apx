function addComponents() {
  ///HEADER///
  const header = document.querySelector(".header-component");
  headerComponent(header);

  const footer = document.querySelector(".footer-container");
  footerComponent(footer);
}

function obtenerID(idImg, data) {
  data.includes.Asset.find((element) => {
    return element.sys.id == idImg;
  });
}

function getContenfulServices() {
  return fetch(
    "https://cdn.contentful.com/spaces/lic78vgan6di/environments/master/entries?access_token=JpS3-IfVxIwLHmtJnRbdhUBEDVv6MEnMT2-sVKX2fQI&&content_type=misServices"
  )
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollections = data.items.map((item) => {
        const idImagen = item.fields.servicesImg.sys.id;
        const imagen = buscarImagen(idImagen, data);
        const Img = imagen.fields.file.url;

        return {
          title: item.fields.servicesTitle,
          description: item.fields.servicesDescription,
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

function addServicesCard(params) {
  const template = document.querySelector("#services-card-template");
  const container = document.querySelector(".services-content");

  template.content.querySelector(".services-card-title").textContent =
    params.title;
  template.content.querySelector(".services-card-text").textContent =
    params.description;
  template.content.querySelector(".services-img").src = params.image;

  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function main() {
  addComponents();
  getContenfulServices().then((services) => {
    for (const i of services) {
      addServicesCard(i);
    }
  });
}

main();
