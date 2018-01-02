function main() {
  setInterval(() => {
    delete require.cache[require.resolve('./print')]
    const print = require('./print')
    print()
  }, 1000)
}

main()