class Observable {
  constructor(value) {
    this.listeners = []
    this.value = value
  }

  addListener(l) {
    this.listeners.push(l)
  }

  removeListener(l) {
    const index = this.listeners.indexOf(l)

    if (index > -1) {
      this.listeners.splice(index, 1)
    }
  }

  set(value) {
    this.value = value
    this.listeners.forEach(fn => fn(value))
  }

  get() {
    return this.value
  }

  valueOf() {
    return this.value
  }
}

module.exports = Observable
