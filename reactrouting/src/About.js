import React from "react"
import { useParams } from 'react-router-dom'

const About = () => {
    let params = useParams()

    const onSave=(e)=>{
        alert('Submit Triggered !!!')
        e.preventDefault();
    }
    
    return (
        <React.Fragment>
            <h2>About Component</h2>
            <p>
            Value passed : {params.id}</p>
            Name passed : {params.name}
            <form onSubmit={onSave}>
                <input type="submit" value="Save"></input>
            </form>

        </React.Fragment>
    )
}

export default About