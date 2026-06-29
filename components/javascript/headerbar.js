class HeaderBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `
<header class="header-js">
    <nav class="main_menu" aria-label="Navegação principal">
        <ul class="menu_links">
            <a href="/">Home</a>
            <a href="/">Projetos</a>
            <a href="/">About Me</a>
        </ul>
    </nav>
</header>
`
        ;
    }
}

customElements.define('header-bar', HeaderBar)