export class App {
  constructor(root) {
    this.root = document.querySelector(root)
  }

  init() {
    this.render()
  }

  get html() {
    return `
      <header class="page-header">
        <div class="page-body__container  page-header__container">
          <img class="page-header__logo" src="img/logo.png" width="42" height="42" alt="Trip logo">

          <active-trip></active-trip>
        </div>
      </header>
      <main class="page-body__page-main  page-main">
        <div class="page-body__container">
            <section class="trip-events">
              <h2 class="visually-hidden">Trip events</h2>

              <trip-sort></trip-sort>

              <days-list></days-list>
            </section>
        </div>
      </main>
    `
  }

  render() {
    this.root.innerHTML = this.html
  }
}
