import React, { Component } from 'react'

 class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    incrementFive() {
      this.setState(prevStatus => ({count: prevStatus.count + 1}))
      this.setState(prevStatus => ({count: prevStatus.count + 1}))
      this.setState(prevStatus => ({count: prevStatus.count + 1}))
      this.setState(prevStatus => ({count: prevStatus.count + 1}))
      this.setState(prevStatus => ({count: prevStatus.count + 1}))
    }
  render() {
    return (
      <div>
        <p>Count {this.state.count} </p>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
