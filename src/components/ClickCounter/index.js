import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  increaseCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="counter-counter">
          <h1 className="counter-heading">
            The Button has been clicked <span className="counter">{count}</span>{' '}
            times
          </h1>
          <p className="counter-paragraph">
            Click the button to increase the count!
          </p>
          <button
            type="button"
            className="increase-button"
            onClick={this.increaseCount}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
