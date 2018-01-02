const Component = require('./Component')
const Observable = require('./Observable')

class Counter extends Component {
  constructor({ el, state }) {
    super({
      el,
      template: `
        <div>
          <span class="count"></span>
          <button class="plus">+1</button>
          <button class="minus">-1</button>
        </div>
      `
    })

    this.state = state || new Observable(0)

    this.onPlus = () => this.state.set(this.state.get() + 1)
    this.onMinus = () => this.state.set(this.state.get() - 1)
    this.update = () => this.countEl.innerText = this.state.get()

    this.state.addListener(this.update)    
  }

  onMount() {
    this.plusBtn = this.el.querySelector('.plus')
    this.minusBtn = this.el.querySelector('.minus')
    this.countEl = this.el.querySelector('.count')

    this.plusBtn.addEventListener('click', this.onPlus)
    this.minusBtn.addEventListener('click', this.onMinus)
    this.update()
  }

  unmount() {
    this.state.removeListener(this.update)

    this.plusBtn.removeEventListener('click', this.onPlus)
    this.minusBtn.removeEventListener('click', this.onMinus)
    this.plusBtn = null
    this.minusBtn = null
    this.countEl = null
  }
}

module.exports = Counter
