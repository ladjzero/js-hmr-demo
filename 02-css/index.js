let css = require('./style.css')

if (module.hot) {
  module.hot.accept('./style.css', () => {
    css = require('./style.css')
    document.querySelector('style').innerText = css
  })
}

document.write('<h1>css</h1>')
document.write(`<style>${css}</style>`)
