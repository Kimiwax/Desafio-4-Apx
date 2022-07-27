function footerComponent(elemento) {
  const footerComponentElemento = document.createElement("div");
  footerComponentElemento.innerHTML = `<footer class="footer">
  <div class="logo-footer">
    <img class="logo1" src="./imgs/logo-z-1.png" alt="" />
    <p class="p-footer">© 2022 Kevin</p>
  </div>
  <div class="contenedor-logos">
    <a
      href="https://www.instagram.com/?hl=es-la"
      style="color: #141414"
      class="logo"
    >
      <img class="logo-redes" src="./imgs/instagram.png" alt="" />
      <p class="p-logo">Instagram</p>
    </a>

    <a
      href="https://ar.linkedin.com/"
      style="color: #141414"
      class="logo"
    >
      <img class="logo-redes" src="./imgs/linkedin.png" alt="" />
      <p class="p-logo">Linkedin</p>
    </a>

    <a
      href="https://github.com/Kimiwax"
      style="color: #141414"
      class="logo"
    >
      <img class="logo-redes" src="./imgs/github.png" alt="" />
      <p class="p-logo">Github</p>
    </a>
  </div>
</footer>`;

  elemento.appendChild(footerComponentElemento);
}
