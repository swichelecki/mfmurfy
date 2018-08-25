import React, { Component } from 'react';

class Contact extends Component {

    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {

        window.scrollTo(0,0);
    }

    render() {

        return(
            <div id="page-wrapper">
            <h1 className="we-can-help portfolio-top-margin">Contact Us</h1>
                <div id="form-container">
                    <form action="https://formspree.io/david_e_bright@yahoo.com" method="POST">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label>Name</label>
                                        <input type="text" name="name" />
                                    </td>
                                    <td>
                                        <label className="email">Email</label>
                                        <input className="email" type="email" name="_replyto" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br/>
                        <label>Message </label><br />
                        <textarea name="message" rows="10"></textarea><br />
                        <div id="center-submit-button">
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                </div>
            </div>
        );

    }
}

export default Contact;
