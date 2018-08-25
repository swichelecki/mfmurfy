import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

class Header extends Component{
        constructor(props){
            super(props);
            this.openCloseMobileNav = this.openCloseMobileNav.bind(this);
            this.state = {
                open: false
            };
        }

        componentDidMount(){

            var didScroll;
            var lastScrollTop = 0;
            var delta = 15;
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

        openCloseMobileNav(event){

            let mobileNav = this.state.open;

            if (mobileNav == false) {
                this.setState({
                    open: true
                });
            } else if (mobileNav == true) {
                this.setState({
                    open: false
                });
            }
        }

        render(){

            return(
                <div>
                {this.state.open && <MoveBodyTag />}
                <nav className="mobile-nav">
                    <Link onClick={this.openCloseMobileNav} className="mobile-nav-link" to="/services">Services</Link>
                    <Link onClick={this.openCloseMobileNav} className="mobile-nav-link" to="/portfolio">Portfolio</Link>
                    <Link onClick={this.openCloseMobileNav} className="mobile-nav-link" to="/team">Team</Link>
                    <Link onClick={this.openCloseMobileNav} className="mobile-nav-link" to="/contact">Contact</Link>
                </nav>
                <header className="header clearfix">
                <h1 className="header-name"><Link to="/">MF Murfy Films</Link></h1>
                <nav>
                    <ul id="header-ul">
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <a id="burger" onClick={this.openCloseMobileNav}><i className="fas fa-bars"></i></a>
                </header>
                </div>
            );

        }
}

class MoveBodyTag extends Component {

    componentDidMount(){

        document.getElementById('body').className="open-mobile-nav";
    }

    componentWillUnmount(){

        document.getElementById('body').className="close-mobile-nav";
    }

    render() {

        return(
            <div></div>
        );
    }
}

export default Header;
