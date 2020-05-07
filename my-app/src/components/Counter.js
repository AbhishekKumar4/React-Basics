import React, {Component} from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }

    incrementValue() {
        this.setState( {
            counter : this.state.counter + 1
        })
    }

    render() {
        return(
            <div>
                <h1>Counter Value : {this.state.counter}</h1>
                <button onClick = { () => this.incrementValue()}>Increment</button>
            </div>
        )
    }
}

export default Counter