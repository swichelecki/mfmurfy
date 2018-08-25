import React, { Component } from 'react';

class Services extends Component {

    constructor(props){
        super(props);
        this.state = {

        };
    }

    componentDidMount(){

        window.scrollTo(0,0);
    }

    render(){

        return(
            <div id="page-wrapper">
                <div id="services-container">
                    <h1 className="we-can-help portfolio-top-margin">We Can Help</h1>
                    <div className="service-mobile-text-box">MF Murfy has years of experience in writing, planning and budgeting low-budget projects.</div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out-new">
                            <p className="services-push-out-text-new">MF Murfy has years of experience in writing, <br/> planning and budgeting low-budget projects.</p>
                            <div className="services-box-relative-container-new">
                                <div className="services-box-new">
                                    <div className="gray-bar"></div>
                                    <div className="gray-triangle-wrapper">
                                        <div className="triangle"></div>
                                    </div>
                                    <p className="services-box-title-new">Pre-Production</p>
                                    <i className="far fa-lightbulb"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-mobile-text-box">We own and operate the lighting, sound and video equipment to see your project through.</div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out-new">
                            <p className="services-push-out-text-new">We own and operate the lighting, sound and <br/> video equipment to see your project through.</p>
                            <div className="services-box-relative-container-new">
                                <div className="services-box-new">
                                    <div className="gray-bar"></div>
                                    <div className="gray-triangle-wrapper">
                                        <div className="triangle"></div>
                                    </div>
                                    <p className="services-box-title-new">Production</p>
                                    <i className="fas fa-video"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-mobile-text-box">MF Murfy works in After Effects and Final Cut to create cutting-edge CG and Motion Graphic Effects.</div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out-new">
                            <p className="services-push-out-text-new move-left">MF Murfy works in After Effects and Final Cut to <br/> create cutting-edge CG and Motion Graphic Effects.</p>
                            <div className="services-box-relative-container-new">
                                <div className="services-box-new">
                                    <div className="gray-bar"></div>
                                    <div className="gray-triangle-wrapper">
                                        <div className="triangle"></div>
                                    </div>
                                    <p className="services-box-title-new">Editing</p>
                                    <i className="fas fa-film"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-mobile-text-box">From 3ds Max to Maya we can meet your <br/> computer graphics and scripting needs.</div>
                    <div className="services-div-wrapper">
                        <div className="services-push-out-new">
                            <p className="services-push-out-text-new">From 3ds Max to Maya we can meet your <br/> computer graphics and scripting needs.</p>
                            <div className="services-box-relative-container-new">
                                <div className="services-box-new">
                                    <div className="gray-bar"></div>
                                    <div className="gray-triangle-wrapper">
                                        <div className="triangle"></div>
                                    </div>
                                    <p className="services-box-title-new">CG</p>
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
