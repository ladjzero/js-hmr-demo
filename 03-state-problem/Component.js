class Component {
  constructor({ el, template }) {
    if (!(el instanceof HTMLElement)) {
      el = document.querySelector(el)
    }

    this.el = el
    this.el.innerHTML = template

    Promise.resolve().then(this.onMount.bind(this))
  }

  onMount() {}

  unmount() {}

  update() {}
}

module.exports = Component
