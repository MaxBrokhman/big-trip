class TripInfo extends HTMLElement {
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
      <link rel="stylesheet" href="./css/trip-info.css" />
      <section class="trip-main__trip-info  trip-info">
        <div class="trip-info__main">
          <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

          <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
        </div>

        <p class="trip-info__cost">
          Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
        </p>
      </section>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('trip-info', TripInfo)
