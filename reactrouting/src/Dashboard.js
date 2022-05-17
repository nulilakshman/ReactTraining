import React from "react"
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <React.Fragment>
            <h1>Dashboard Component</h1>
            <Link to='/home'>Home</Link> | 
            <Link to='/about'>About Us</Link> |
            <Link to='/contactus-1'>Contact Us</Link>
        </React.Fragment>
    )
}

export default Dashboard