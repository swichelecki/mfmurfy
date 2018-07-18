import React, { Component } from 'react';

class Services extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

        window.scrollTo(0,0);
    }

    render(){

        return(
            <div id="page-wrapper">
                <div id="services-container">
                    <h1 className="we-can-help">We Can Help</h1>
                    <div className="services-div-wrapper">
                        <div className="services-push-out">
                            <p className="services-push-out-text">MF Murfy has years of experience in writing, <br/> planning and budgeting low-budget projects.</p>
                            <div className="services-box-relative-container">
                                <div className="services-box">
                                    <p className="services-box-title">Pre-Production</p>
                                    <i className="far fa-lightbulb"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out-right">
                            <p className="services-push-out-text-right">We own and operate the lighting, sound and <br/> video equipment to see your project through.</p>
                            <div className="services-box-relative-container-right">
                                <div className="services-box-right">
                                    <p className="services-box-title">Production</p>
                                    <i className="fas fa-video"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out">
                            <p className="services-push-out-text">MF Murfy works in After Effects and Final Cut to create <br/> cutting-edge CG and Motion Graphic Effects.</p>
                            <div className="services-box-relative-container">
                                <div className="services-box">
                                    <p className="services-box-title">Editing</p>
                                    <i className="fas fa-film"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out-right">
                            <p className="services-push-out-text-right">From 3ds Max to Maya we can meet your <br/> computer graphics and scripting needs.</p>
                            <div className="services-box-relative-container-right">
                                <div className="services-box-right">
                                    <p className="services-box-title">CG</p>
                                    <i className="fas fa-desktop"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Services;
