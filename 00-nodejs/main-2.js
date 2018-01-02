function main() {
  setInterval(() => {
    const print = require('./print')
    print()
  }, 1000)
}

main()