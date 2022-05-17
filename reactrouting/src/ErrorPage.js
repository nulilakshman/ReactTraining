import React from "react"
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <React.Fragment>
            <h1>Error occurred 404</h1>
            <Link to='/'>Click here to go Home</Link> | 
            
        </React.Fragment>
    )
}

export default ErrorPage