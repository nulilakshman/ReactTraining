import React, { Component } from "react";
//JSX

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            postcode: ''
        }
    }

    onFirstNameChanged = (event) => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        // event
    }

    onCityChanged = event => this.setState({ city: event.target.value })


    onButtonClicked = () => {
        alert('Button Triggered !!!')
        this.setState({ name: 'value changed' });
    }

    render() {
        return (
            <div>
                <h1>React Home Component</h1>
                <p>First component</p>
                <button onClick={this.onButtonClicked} >Click Here !!!</button>
                {/* <button onClick={() => this.onButtonClicked()} >Click Here !!!</button> */}
                <br />
                <span>First Name</span>
                <input type="text" onChange={this.onFirstNameChanged} value={this.state.name} ></input>
                <br />
                City:
                <input type="text" onChange={this.onCityChanged} value={this.state.city} ></input>
            </div>
        )
    }

}

export default Home