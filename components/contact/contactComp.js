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

  const formElement = document.querySelector(".contact-form-container");
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
