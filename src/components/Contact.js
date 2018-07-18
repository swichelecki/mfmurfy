import React, { Component } from 'react';

class Contact extends Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {

        return(
            <div id="page-wrapper">
                <div className="container">
                <h1 className="we-can-help">Contact Us</h1>
                <form action="https://formspree.io/swichelecki@gmail.com" method="POST">
                    <label>Name: </label>
                    <input type="text" name="name" />
                    <label>Email: </label>
                    <input typle="email" name="_replyto" /><br/>
                    <label>Message: </label><br />
                    <textarea name="message" rows="10" cols="80"></textarea><br />
                    <input type="submit" value="Send" />
                </form>
                </div>
            </div>
        );

    }
}

export default Contact;
