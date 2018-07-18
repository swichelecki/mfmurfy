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
                <div className="container">
                <h1 className="header-name"><Link to="/">MF Murpy</Link></h1>
                    <ul id="footer-ul">
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        );

    }

}

export default Footer;
