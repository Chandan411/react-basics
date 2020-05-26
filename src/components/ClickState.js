import React, { Component } from 'react'

class ClickState extends Component {
    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('Callback Value : ', this.state.count)
            }
        )
    }

    render() {
        return (
            <div style = {{margin:20}}>
                <div>count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default ClickState
