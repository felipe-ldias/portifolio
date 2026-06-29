class FooterBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer-js">
      <div class="footer-main">  
        <p>&copy; 2026 - Meu Portfólio</p>
      </div>
    </footer>`
  }
}

customElements.define('footer-bar', FooterBar)