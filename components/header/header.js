function headerComponent(e) {
  const headerComponentElement = document.createElement("div");

  headerComponentElement.innerHTML = `<header class="header-principal">
    <div class="header-container">
        
        <a href="./index.html"><img src="./imgs/logo3.png" alt="" class="header-container__logo">
        </a>
    </div>
    <div class= "header-menu">
    <ul class="menu">
    <li><a class="menuItem" href="#">Portfolio</a></li>
    <li><a class="menuItem" href="./">Servicio</a></li>
    <li><a class="menuItem" href="#">Contacto</a></li>
  </ul>
  <button class="hamburger">
    <i class="menuIcon material-icons">menu</i>
    <i class="closeIcon material-icons">close</i>
  </button>
    </div>
    
</header>`;

  e.appendChild(headerComponentElement);
  function burguerBoton() {
    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger = document.querySelector(".hamburger");
    const closeIcon = document.querySelector(".closeIcon");
    const menuIcon = document.querySelector(".menuIcon");

    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
    }

    hamburger.addEventListener("click", toggleMenu);

    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    });
  }

  burguerBoton();
}
