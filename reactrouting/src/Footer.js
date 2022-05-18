import React from "react"
import './footer.css'
const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social">
                    <a href="#"><i className="icon ion-social-instagram"></i></a>
                    <a href="#"><i className="icon ion-social-snapchat"></i></a>
                    <a href="#">
                        <i className="fa fa-twitter-square" style={{ color: 'red' }}></i></a>
                    <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href="#">Home</a></li>
                    <li className="list-inline-item"><a href="#">Services</a></li>
                    <li className="list-inline-item"><a href="#">About</a></li>
                    <li className="list-inline-item"><a href="#">Terms</a></li>
                    <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                </ul>
                <p className="copyright">Company Name © 2018</p>
            </footer>
        </div>
    )
}

export default Footer