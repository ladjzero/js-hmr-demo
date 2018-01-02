let Counter = require('./Counter')
let CounterStateWrapper = require('./CounterStateWrapper')
let Observable = require('./Observable')

const externalState = window.__external_counter = window.__external_counter || new Observable(0)

let externalInstance = new Counter({ el: '#external-example', state: externalState })
let innerInstance = new Counter({ el: '#inner-example' })
let wrapperInstance = new CounterStateWrapper({ el: '#wrapper-example' })

if (module.hot) {
  module.hot.accept(['./Counter'], () => {
    Counter = require('./Counter')

    externalInstance.unmount()
    innerInstance.unmount()

    externalInstance = new Counter({ el: '#external-example', state: externalState })
    innerInstance = new Counter({ el: '#inner-example' })
  })
}


