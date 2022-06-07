import React from "react";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div class="header">
            <a href="#default" class="logo">Ecommerce-Capstone</a>
            <div class="header-right">
                <Link to='/'>Home</Link> 
                <Link to='/login'>Login</Link> 
                <Link to='/SignUp'>SignUp</Link> 
                <Link to='/add-product'>Add Product</Link> 
                <Link to='/Users'>Users</Link> 

            </div>
        </div>
    )
}

export default Header