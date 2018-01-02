let Counter = require('./Counter')

class CounterStateWrapper {
  constructor() {
    this.counter = new Counter(...arguments)
    this.counterState = this.counter.state

    if (module.hot) {
      module.hot.accept(['./Counter'], () => {
        Counter = require('./Counter')

        this.counter.unmount()
        this.counter = new Counter({ el: this.counter.el, state: this.counterState })
      })
    }
  }
}

module.exports = CounterStateWrapper
