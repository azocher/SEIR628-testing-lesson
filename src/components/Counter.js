import React, { Component } from 'react'

class Counter extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        let updatedCounter = this.state.counter + 1
        console.log(updatedCounter)
        this.setState({
            counter: updatedCounter
        })
    }

    render() {
        return (
            <div>
                <div className="number">Current Count: {this.state.counter}</div>
                <button className="plus" onClick={this.handleClick}>Click Here</button>
            </div>
        )
    }
}

export default Counter

