let print = require('./print')

if (module.hot) {
  module.hot.accept('./print', () => {
    print = require('./print')
    document.querySelector('h1').innerText = newPrint()
  })
}

document.write(`<h1>${print()}</h1>`)
