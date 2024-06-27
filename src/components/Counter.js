import React from 'react'


class Counter extends React.Component {
    constructor()
    {
        super()
        this.state = {counter : 0}
        this.increaseCount = this.increaseCount.bind(this)
        this.decreaseCount = this.decreaseCount.bind(this)
        this.stop = this.stop.bind(this)
    }
    increaseCount(){
        this.setState({counter: this.state.counter + 1})
    }

    decreaseCount(){
        this.setState({counter: this.state.counter - 1})
    }

    stop(){
        this.setState({counter: 0})
    }

    render(){
        return(
            <div>
                <h1>Counter: {this.state.counter}</h1>
                <div className='container'>
                <button onClick={this.increaseCount}>Increase Count</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.decreaseCount}>Decrease Count</button>
                </div>
            </div>
        )
    }
}

export default Counter;