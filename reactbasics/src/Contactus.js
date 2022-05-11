import React, { useState } from "react";

const Contactus = () => {

    const [firstname, setFirstname] = useState('')

    const onFirstNameChanged = (event) => {
        setFirstname(event.target.value)
    }

    const onButtonClicked = () => {
        alert('Button Triggered !!!')
    }

    return (
        <div>
            <h1>Functional Component</h1>
            <button onClick={onButtonClicked} >Click Here !!!</button>
            <br></br>
            <span>First Name</span>
            <input type="text" onChange={onFirstNameChanged} value={firstname} ></input>
            {firstname}
        </div>
    )

}

export default Contactus