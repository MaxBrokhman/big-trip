class DaysList extends HTMLElement {
  static get observedAttributes() {
    return []
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.template = document.createElement('template')
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      switch(name) {
        case '':
      }
    }
  }

  connectedCallback() {
    this.render()
    this.shadowRoot.appendChild(this.template.content.cloneNode(true))
  }

  disconnectedCallback() {
    
  }

  get html() {
    return `
      <link rel="stylesheet" href="./css/days-list.css" />
      <ul class="trip-days">
        <day-item></day-item>
      </ul>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('days-list', DaysList)
