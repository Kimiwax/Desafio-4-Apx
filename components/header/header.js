function headerComponent (e){
    const headerComponentElement = document.createElement('div');

    headerComponentElement.innerHTML =
    `<header class="header-principal">
    <div class="header-container">
        <img src="./imgs/logo-z-1.png" alt="" class="header-container__logo">
    </div>
    <a href="./index.html" class="header-container__menuburger">
    </a>
    <input id="toggle" type="checkbox"></input>
    <label for="toggle" class="hamburger">
    <div class="top-bun"></div>
    <div class="meat"></div>
    <div class="bottom-bun"></div>
    </label>

<div class="nav">
<div class="nav-wrapper">
<nav>
  <a href="#">PORTFOLIO</a><br>
  <a href="#">SERVICIOS</a><br>
  <a href="#">CONTACTO</a><br>
</nav>
</div>
</div>
</header>`;

e.appendChild(headerComponentElement)
}