class CardsNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card-left');

    const author = document.createElement('span');
    author.textContent = this.getAttribute('author') || 'Anonymous';
    const linkTitle = document.createElement('a');
    const h1 = document.createElement('h1');
    h1.textContent = this.getAttribute('linkTitle');
    linkTitle.href = this.getAttribute('linkTitleUrl');
    linkTitle.appendChild(h1);
    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('newsContent');

    cardLeft.appendChild(author);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card-right');

    const img = document.createElement('img');
    img.src = this.getAttribute('imgUrl');
    img.alt = 'photo';

    cardRight.appendChild(img);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = ` 
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
      }

      .card-left {
        width: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
      }

      .card-left a {
        margin-top: 15px;
        font-size: 12px;
        color: black;
        text-decoration: none;
      }

      .card-left span {
        font-weight: bold;
      }

      .card-left p {
        color: gray;
      }

      .card-right {
        width: 30%;
      }

      .card-right img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    `;

    return style;
  }

}

customElements.define('card-news', CardsNews);