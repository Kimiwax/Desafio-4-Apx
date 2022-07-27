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

function main() {
  ///HEADER///
  const header = document.querySelector(".header-component");
  headerComponent(header);
  ///FOOTER///
  const footer = document.querySelector(".footer-container");
  footerComponent(footer);

  getContenfulCards().then((services) => {
    for (const i of services) {
      addServicesCard(i);
    }
  });
}

main();
