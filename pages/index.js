function getHomeContentful() {
  return fetch(
    "https://cdn.contentful.com/spaces/lic78vgan6di/environments/master/entries?access_token=JpS3-IfVxIwLHmtJnRbdhUBEDVv6MEnMT2-sVKX2fQI&&content_type=home"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.hometitle,
          subtitle: item.fields.homesubtitle,
        };
      });
      return fieldsCollection;
    });
}

function addHome(params) {
  const template = document.querySelector("#home-cont-template");
  const container = document.querySelector(".home");

  template.content.querySelector(".home-title-h1").textContent = params.title;
  template.content.querySelector(".home-title-h2").textContent =
    params.subtitle;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
}

function getAboutmeContenful() {
  return fetch(
    "https://cdn.contentful.com/spaces/lic78vgan6di/environments/master/entries?access_token=JpS3-IfVxIwLHmtJnRbdhUBEDVv6MEnMT2-sVKX2fQI&&content_type=aboutme"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      const fieldsCollection = data.items.map((item) => {
        return {
          title: item.fields.tituloaboutme,
          parrafo: item.fields.descripcionaboutme,
        };
      });
      return fieldsCollection;
    });
}
function addAboutMe(params) {
  const template = document.querySelector("#about-me-template");
  const container = document.querySelector(".about-me-cont");

  template.content.querySelector(".about-me-subtitule").textContent =
    params.title;
  template.content.querySelector(".about-me-text").textContent = params.parrafo;
  const clone = document.importNode(template.content, true);
  container.appendChild(clone);
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

function obtenerID(idImg, data) {
  data.includes.Asset.find((element) => {
    return element.sys.id == idImg;
  });
}

function getContenfulCards() {
  return fetch(
    "https://cdn.contentful.com/spaces/lic78vgan6di/environments/master/entries?access_token=JpS3-IfVxIwLHmtJnRbdhUBEDVv6MEnMT2-sVKX2fQI&&content_type=misServices"
  )
    .then((res) => {
      return res.json();
    })
    .then((dataJson) => {
      const fieldsCollection = dataJson.items.map((item) => {
        obtenerID(item.fields.servicesImg.sys.id, dataJson);
        const imgUrl = dataJson.includes.Asset[0].fields.file.url;
        return {
          title: item.fields.servicesTitle,
          description: item.fields.servicesDescription,
          image: imgUrl,
        };
      });

      return fieldsCollection;
    });
}

function getAllElementsFromContentful() {
  getHomeContentful().then((homeEl) => {
    for (const i of homeEl) {
      addHome(i);
    }
  });

  getContenfulCards().then((services) => {
    for (const i of services) {
      addServicesCard(i);
    }
  });

  getAboutmeContenful().then((aboutmeEl) => {
    for (const i of aboutmeEl) {
      addAboutMe(i);
    }
  });
}

function main() {
  ///HEADER///
  const header = document.querySelector(".header-component");
  headerComponent(header);
  ///FOOTER///
  const footer = document.querySelector(".footer-container");
  footerComponent(footer);
  /////Funci??n que trae tanto elementos de contenful como los agrega a sus respectivas plantillas////
  getAllElementsFromContentful();
}

main();
