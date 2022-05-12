import React, { useState } from "react";

const Contactus = () => {

    const a = ''
    const b = 10;
    const c = { ssn: '', place: '', dob: '' };
    //c.ssn;
    const [firstname, setFirstname] = useState('')
    const [userdetails, setUserdetails] = useState({
        firstname: '',
        lastname: '',
        city: '',
        postcode: '',
        address: '',
        username: '',
        password: '',
        gender: ''
    });

    const onInput = (event) => {
        //const obj = userdetails ; Wrong approach
        //const obj = Object.assign({}, userdetails);
        const obj = { ...userdetails };
        obj[event.target.name] = event.target.value;
        setUserdetails({ ...obj });

    }

    const onFirstNameChanged = (event) => {
        setFirstname(event.target.value)
    }

    const onButtonClicked = () => {
        alert('Button Triggered !!!')
    }

    const onsave = () => {
        console.log({ ...userdetails })
    }

    return (
        <div className="container">

            <h1 className="row">Functional Component</h1>
            <button onClick={onButtonClicked} >Click Here !!!</button>
            <br></br>
            <div className="row">
                <div className="col-12">
                    <span>First Name</span>
                    <input type="text" onChange={onFirstNameChanged} value={firstname} ></input>
                </div>
                <div className="col-12">
                    <span>Last Name</span>
                    <input type="text" name="lastname" onChange={onInput} value={userdetails.lastname}></input>
                </div>
                <div className="col-12">
                    <span>User Name</span>
                    <input type="text" name="username" onChange={onInput} value={userdetails.username} ></input>
                </div>
                <div className="col-12">
                    <span>Password</span>
                    <input type="password" name="password" onChange={onInput} value={userdetails.password} ></input>
                </div>
                <div className="col-12">
                    <span>Address</span>
                    <textarea rows="3" name="address" onChange={onInput} value={userdetails.address}></textarea>
                </div>
                <div className="col-12">
                    <span>City</span>
                    <input type="text" name="city" onChange={onInput} value={userdetails.city} ></input>
                </div>
                <div className="col-12">
                    <span>Gender</span>
                    <input type="radio" value="Male" name="gender" onChange={onInput} checked={userdetails.gender === "Male"} />Male
                    <input type="radio" value="Female" name="gender" onChange={onInput} checked={userdetails.gender === "Female"} />Female
                </div>
                <div className="col-12">
                    <button className="btn btn-secondary" >Cancel</button>
                    <button onClick={onsave} className="btn btn-primary" >Save</button>
                </div>
            </div>


        </div>
    )

}

export default Contactus