function contactComponent(elemento) {
  const conntactComponentEl = document.createElement("div");

  conntactComponentEl.innerHTML = `
  <div class="contact-form">
        <div class="contact-form-content">
          <h2 class="contact-form__titleh2">Contactame</h2>
          <form class="contact-form-container">
            <label class="contact-form-container__input-label">
              <span>NOMBRE</span>
              <input
                type="text"
                name="nombre"
                class="contact-form-container__field--input-text"
              />
            </label>
            <label class="contact-form-container__input-label">
              <span>EMAIL</span>
              <input
                type="email"
                name="email"
                class="contact-form-container__field--input-text"
              />
            </label>
            <label class="contact-form-container__input-label">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                class="contact-form-container__field--textarea"
              ></textarea>
            </label>
            <div class="contact-form-container__button-container">
              <button class="contact-form-container__button-container--button">
                <span> Enviar</span>
              </button>
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
  formulario.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(event.target);
    const obj = Object.fromEntries(data.entries());
    console.log(obj);

    fetch("https://apx-api.vercel.app/api/utils/dwf", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        to: "kevinaarias099@gmail.com",
        message: `Nuevo correo de: ${obj.nombre} con mail ${obj.email}, Mensaje: ${obj.mensaje}`,
      }),
    });
  });
}
