import React from "react"
import { useParams } from 'react-router-dom'

const About = () => {
    let params = useParams()
    return (
        <React.Fragment>
            <h2>About Component</h2>
            Value passed : {params.id}
        </React.Fragment>
    )
}

export default About