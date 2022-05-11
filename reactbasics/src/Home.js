import React, { Component } from "react";
//JSX

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            city: '',
            postcode: '',
            address: '',
            username: '',
            password: '',
            gender:''
        }
    }

   onInput = (event) => {
        console.log(`${event.target.name}:${event.target.value}`)
        //this.setState({ username: event.target.value })
        const obj = { ...this.state }
        const controlname = event.target.name;
        console.log(obj)
        obj[controlname] = event.target.value;
        console.log('Modified Object', obj)
        this.setState({...obj})
        // event
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

    onPrint = ()=>{
        console.log(this.state)
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
                <span>User Name</span>
                <input type="text" name="username" value={this.state.username} onChange={this.onInput}  ></input>
                <br />
                <span>Password</span>
                <input type="password" name="password" value={this.state.password} onChange={this.onInput} ></input>
                <br />
                Address:
                <textarea rows="3" name="address" value={this.state.address} onChange={this.onInput}></textarea>
                <br />
                City:
                <input type="text" onChange={this.onCityChanged} value={this.state.city} ></input>
                <br />
                Gender:
                <input type="radio" onChange={this.onInput} value="Male" name="gender" checked={this.state.gender==="Male"} />Male
                <input type="radio" onChange={this.onInput} value="Female" name="gender" checked={this.state.gender==="Female"} />Female
                <br></br>
                <button onClick={this.onPrint} >Print Values</button>
            </div>
        )
    }

}

export default Home