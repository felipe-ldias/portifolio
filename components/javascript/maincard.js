class MainCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <section class="main_card">
      <div class="info_section">
        <h1 class="title">Entre em contato!</h1>
      </div>

      <form class="contact_form" action="https://formsubmit.co/felipe_ldias@yahoo.com.br" method="POST">
        <div class="form_card">
          <label for="name">Nome</label>
          <input type="text" id="name" placeholder="Seu nome completo" required>
        </div>
      
        <div class="form_card">
          <label for="email">E-mail</label>
          <input type="email" id="email" placeholder="seu.email@exemplo.com" required>
        </div>

        <div class="form_card">
          <label for="message">Mensagem</label>
          <textarea id="message" rows="4" placeholder="Escreva sua mensagem aqui..." required></textarea>
        </div>

        <button type="submit" class="bton-submit">Enviar Mensagem</button>
      </form>
    </section>
    `
  }
}

customElements.define('main-card', MainCard)