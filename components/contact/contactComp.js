function contactComponent(elemento) {
  const conntactComponentEl = document.createElement("div");

  conntactComponentEl.innerHTML = `
  <div class="contact-form">
        <div class="contact-form-content">
          <h2 class="contact-form-content__title">Contactame</h2>
          <form class="contact-form-container">
            <label class="contact-form-container__label">
              <span>NOMBRE</span>
              <input
                type="text"
                name="nombre"
                class="contact-form-container__input"
              />
            </label>
            <label class="contact-form-container__label">
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                class="contact-form-container__input"
              />
            </label>
            <label class="contact-form-container__label">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                class="contact-form-container__textarea"
              ></textarea>
            </label>
            <div class="contact-form-container__container">
              <button class="contact-form-container__button">
                <span> Enviar</span>
              </button>
              <div class="contact-form-container__enviado">
                  <span>Formulario enviado correctamente 🎉</span>
              </div>
            </div>
          </form>
        </div>
      </div>
  `;

  elemento.appendChild(conntactComponentEl);
  requestPost();
}

function requestPost() {
  const formulario = document.querySelector(".contact-form-container");
  const boton = document.querySelector(".contact-form-container__button");
  const avisoEnviado = document.querySelector(
    ".contact-form-container__enviado"
  );
  formulario.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(event.target);
    const obj = Object.fromEntries(data.entries());
    //////console.log(obj);

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "kevinaarias099@gmail.com",
        message: `Nuevo correo de: ${obj.nombre} con mail ${obj.email}, Mensaje: ${obj.mensaje}`,
      }),
    });

    setTimeout(envioForm, 1000);

    function envioForm() {
      boton.style.display = "none";
      avisoEnviado.style.display = "block";
      formulario.reset();
    }
  });
}
