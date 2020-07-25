class ActiveTrip extends HTMLElement {
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
      <link rel="stylesheet" href="./css/btn.css" />
      <link rel="stylesheet" href="./css/active-trip.css" />
      <div class="trip-main">
        <trip-info></trip-info>

        <trip-controls></trip-controls>

        <button 
          class="trip-main__event-add-btn  btn  btn--big  btn--yellow" 
          type="button"
        >
          New event
        </button>
      </div>
    `
  }

  render() {
    this.template.innerHTML = this.html
  }
}

customElements.define('active-trip', ActiveTrip)
