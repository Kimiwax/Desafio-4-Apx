function modulosImp() {
  const header = document.querySelector(".header-component");
  headerComponent(header);
  const contact = document.querySelector(".contactForm-component");
  contactComponent(contact);
  const footer = document.querySelector(".footer-container");
  footerComponent(footer);
}

function main() {
  modulosImp();
}

main();
