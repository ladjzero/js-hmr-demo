const fs = require('fs')

function main() {
  setInterval(() => {
    fs.readFile('./print.js', (err, data) => {
      const module = { exports: null }
      eval(data.toString())
      module.exports()
    })
  }, 1000)
}

main()