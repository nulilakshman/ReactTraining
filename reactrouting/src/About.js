import React from "react"
import { useParams } from 'react-router-dom'

const About = () => {
    let params = useParams()



    const onSave = (e) => {
        // alert('Submit Triggered !!!')
        localStorage.setItem('userid', 10001);
        localStorage.setItem('name', 'test-name');

        sessionStorage.setItem('phone','9978123456');
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <h2>About Component</h2>
            <p>
                Value passed : {params.id}</p>
            Name passed : {params.name}
            <p>Local Storage  Name :{localStorage.getItem('name')}</p>
            <p>Session Storage  Name :{sessionStorage.getItem('phone')}</p>
            <form onSubmit={onSave}>
                <input type="submit" value="Save"></input>
            </form>

        </React.Fragment>
    )
}

export default About