import React, { Component } from 'react';
import 'normalize.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/app.css';
import './images/member2.jpg';
import './images/member3.jpg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {

        return(
            <Router>
                <div>
                    <Header />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/services" component={Services} />
                            <Route path="/portfolio" component={Portfolio} />
                            <Route path="/team" component={Team} />
                            <Route path="/contact" component={Contact} />
                            <Route render={() => <h1 className="show-page-text">404 Page Not Found</h1>}/>
                        </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
