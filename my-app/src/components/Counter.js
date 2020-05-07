import React, {Component} from 'react'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }

    incrementValue() {
       /** this.setState( {
            counter : this.state.counter + 1
        }, ()=> {console.log('Callback Value: ' + this.state.counter)})
         */
        this.setState(prevState => ( {
            counter : prevState.counter +1
        }))
        console.log('Çounter value : ' + this.state.counter)
    }

    incrementFive() {
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()
        this.incrementValue()
    }

    render() {
        return(
            <div>
                <h1>Counter Value : {this.state.counter}</h1>
                <button onClick = { () => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter