import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

class Header extends Component{

        componentDidMount(){

            var didScroll;
            var lastScrollTop = 0;
            var delta = 5;
            var offset = window.scrollY + 1;

            var clientWidth = 0;

            window.addEventListener('scroll', function(event) {

                clientWidth = window.innerWidth;

                if (clientWidth >= 640) {

                    var navBar = document.getElementsByClassName('header')[0];

                    didScroll = true;

                    setInterval(function() {
                        if (didScroll) {
                            hasScrolled();
                            didScroll = false;
                        }
                    }, 250);

                    function hasScrolled() {

                        var st = document.documentElement.scrollTop || document.body.scrollTop;

                        if (Math.abs(lastScrollTop - st) <= delta)
                            return;

                        if (st > lastScrollTop && st > offset) {
                            navBar.classList.add('head-collapse');
                        } else {
                            if (st + window.innerHeight < document.body.scrollHeight) {
                                navBar.classList.remove('head-collapse');
                            }
                        }

                        lastScrollTop = st;
                    }
                }
            });
        }

        render(){

            return(
                <header className="header clearfix">
                <h1 className="header-name"><Link to="/">MF Murpy</Link></h1>
                <nav>
                    <ul id="header-ul">
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                </header>
            );

        }
}

export default Header;
