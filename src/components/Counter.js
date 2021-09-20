import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0
    }

    render() {
        return (
            <div className="number">Current Count: {this.state.counter}</div>
        )
    }
}

export default Counter

