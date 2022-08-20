function footerComponent(elemento) {
  const footerComponentElemento = document.createElement("div");
  footerComponentElemento.innerHTML = `<footer class="footer">
  <div class="footer-logo">
    <img class="logo1" src="./imgs/logo-footer.png" alt="" />
  </div>
  <div class="redes-container">
    <a
      href="https://www.instagram.com/?hl=es-la"
      style="color: #141414"
      class="redes-container__logo"
    >
      <img class="redes-container__img" src="./imgs/instagram.png" alt="" />
      <p class="redes-container__text">Instagram</p>
    </a>

    <a
      href="https://www.youtube.com/watch?v=Pmo3lT5ckdY"
      style="color: #141414"
      class="redes-container__logo"
    >
      <img class="redes-container__img" src="./imgs/linkedin.png" alt="" />
      <p class="redes-container__text">Linkedin</p>
    </a>

    <a
      href="https://github.com/Kimiwax"
      style="color: #141414"
      class="redes-container__logo"
    >
      <img class="redes-container__img" src="./imgs/github.png" alt="" />
      <p class="redes-container__text">Github</p>
    </a>
  </div>
</footer>`;

  elemento.appendChild(footerComponentElemento);
}
