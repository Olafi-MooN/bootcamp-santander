class TitleDynamic extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.content = `<h1>News</h1>`;

    // base component
    const componentRoot = document.createElement('h1');
    componentRoot.textContent = this.getAttribute('title');

    // style component
    const style = document.createElement('style');
    style.textContent = `
      h1 { 
        color: red
      }
    `

    // Send to shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define('title-dynamic', TitleDynamic);