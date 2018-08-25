import React, { Component } from 'react';

class Team extends Component {

    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {

        window.scrollTo(0,0);
    }

    render() {

        return(
            <div id="page-wrapper">
                <div className="container">
                    <h1 className="we-can-help portfolio-top-margin">Our Team</h1>
                    <div className="team-flexbox-container">
                        <div className="team-flexbox team-flexbox-background">
                            <img src="/images/member2.jpg" className="border-radius"/>
                        </div>
                        <div className="team-flexbox team-flex-padding">
                            David Bright is an award winning writer and director. He was a semi-finalist in several contests, including the Austin Film Festival in 2013, and has deep knowledge in all aspects of film production. His new feature, "Always Dies First," is receiving positive buzz, even in pre-production.
                        </div>
                    </div>
                    <div className="team-flexbox-container">
                        <div className="team-flexbox team-flex-padding hide-mobile">
                        Janine Bright's production work spans shorts like "Why Come There Ain't No Black People in Mayberry," to the unreleased feature, "White Elephant Party." She has years of experience on the set, behind the scenes and working a festival crowd.
                        </div>
                        <div className="team-flexbox team-flexbox-background">
                            <img src="/images/member3.jpg" className="border-radius"/>
                        </div>
                        <div className="team-flexbox team-flex-padding show-mobile">
                        Janine Bright's production work spans shorts like "Why Come There Ain't No Black People in Mayberry," to the unreleased feature, "White Elephant Party." She has years of experience on the set, behind the scenes and working a festival crowd.
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Team;
