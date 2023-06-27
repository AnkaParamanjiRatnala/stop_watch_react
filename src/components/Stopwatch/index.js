import {Component} from 'react'
import './index.css'

const initialTime = {initialMinutes: 0, initialSeconds: 0}
class StopWatch extends Component {
  state = initialTime

  onStartTime = () => {
    this.timerId = setInterval(this.onSecondsIncrement, 1000)
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  onStopTime = () => {
    clearInterval(this.timerId)
  }

  onResetTime = () => {
    clearInterval(this.timerId)
    this.setState(initialTime)
  }

  onSecondsIncrement = () => {
    this.setState(prevState => ({initialSeconds: prevState.initialSeconds + 1}))
  }

  onIncrementTime = () => {
    const {initialSeconds} = this.state
    const minutes = Math.floor(initialSeconds / 60)
    const seconds = Math.floor(initialSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="main-watch-container">
        <h1 className="heading-text"> Stopwatch</h1>
        <div className="card-container">
          <dvi className="watch-timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="logo"
            />
            <p className="timer">Timer</p>
          </dvi>
          <h1 className="digital-time">{this.onIncrementTime()}</h1>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.onStartTime}
              className="start-btn"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.onStopTime}
              className="stop-btn"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.onResetTime}
              className="restart-btn"
            >
              Restart
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
