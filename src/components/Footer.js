import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

class Footer extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {

        return(
            <div id="footer-wrapper">
                <div id="page-wrapper">
                    <div className="container">
                    <div id="footer-ul-wrapper-1">
                        <h1 className="footer-name"><Link to="/">MF Murpy</Link></h1>
                            <ul id="footer-address">
                                <li>2545 S. Dearborn, Chicago, IL 60616</li>
                                <li>Email: <a href="mailto:info@mfmurfy.com">info@mfmurfy.com</a></li>
                                <li>&copy; 2018</li>
                            </ul>
                        </div>
                        <div id="footer-ul-wrapper-2">
                            <ul id="footer-ul">
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="/portfolio">Portfolio</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Footer;
