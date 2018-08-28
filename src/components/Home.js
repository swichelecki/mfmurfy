import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

class Home extends Component {

    constructor(props){
        super(props);
        this.openCloseModal = this.openCloseModal.bind(this);
        this.stopVideo = this.stopVideo.bind(this);
        this.state = {
            vimeoArray: [],
            open: false,
            uri: '',
            loading: true
        };
    }

    componentDidMount(){

        window.scrollTo(0,0);

        const uri = 'https://api.vimeo.com/users/user1162241/videos';

        let headers = new Headers({
            'Accept': 'application/vnd.vimeo.*+json',
            'Content-Type': 'application/vnd.vimeo.*+json',
            'Authorization': 'Bearer f580f825c6328ac60adf5e02ba70ee0d'
        });
        let request = new Request(uri, {
            method: 'GET',
            headers: headers
        });

        fetch(request)
        .then(response => response.json())
        .then(responseObject => {
            this.setState({
                vimeoArray: responseObject.data,
                loading: false
            });

        });
    }

    openCloseModal(uri){

        let open = false;

        let modal = this.state.open;

            this.setState(prevState => ({
                open: !prevState.open
            }));

            this.setState({
                uri: uri
            });

            // for some reason transform on body tag was messing up the modals

            document.getElementById('body').className="remove-transform-for-modal";

    }

    stopVideo(){

        HTMLCollection.prototype.map = Array.prototype.map;

        document.getElementsByTagName('iframe').map((input) => {
            let iframeSrc = input.getAttribute('src');
            input.setAttribute('src', '');
            input.setAttribute('src', iframeSrc);
        });
    }

    render(){

        return(
            <div>
            <div id="page-wrapper">
                <div className="container portfolio-top-margin">
                    <div className="home-video">
                        <iframe src="https://player.vimeo.com/video/69867724" width="1280" height="720" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
            <div className="home-text-points-wrapper-top">
                <h1 className="home-text-points">Our Most Recent Work</h1>
            </div>
            <div id="page-wrapper">
                <div className="container">
                    <HomeVideos state={this.state} onclick={this.openCloseModal} stopVideo={this.stopVideo}/>
                    <div className="gray-line"></div>
                </div>
            </div>
            <div className="home-text-points-wrapper">
                <h1 className="home-text-points home-text-point-bottom-link"><Link to="/portfolio">See Our Full Portfolio</Link></h1>
            </div>
        </div>
        );
    }
}

class HomeVideos extends Component {

    render() {

        if (this.props.state.loading == true) {

            return <Loading />;
        }

        let contentBlock;
        if (this.props.state.vimeoArray) {

            contentBlock = this.props.state.vimeoArray.slice(0, 4).map((data, index) => {

                let url = data.pictures.sizes[3].link_with_play_button;

                const style = { backgroundImage: `url('${url}')` };

                let showOrHide = 'none';

                if (this.props.state.open == true && data.uri == this.props.state.uri) {

                    showOrHide = 'block';
                }

                const modal = {display: showOrHide};

                return(
                    <div style={style} key={index} className="video-flexbox home-gray-line" onClick={() => this.props.onclick(data.uri)}>
                        <div className="flex-inner-wrapper">
                            <p className="flex-inner-title">{data.name}</p>
                            <p className="flex-inner-description">{data.description}</p>
                        </div>
                        <div id="modal-wrapper" style={modal} onClick={this.props.stopVideo}>
                            <a onClick={this.props.stopVideo}>
                                <i className="fas fa-times-circle">
                                </i>
                            </a>
                            <div id="modal-container" dangerouslySetInnerHTML={{ __html: data.embed.html}}>
                            </div>
                        </div>
                    </div>
                );

            });

        }

        return(
            <div className="flexbox-container">
                {contentBlock}
            </div>
        );

    }
}

class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading'
        }
    }

    componentDidMount() {
        const stopper = this.state.text + '...';

        this.interval = window.setInterval(() => {
            this.state.text === stopper
                ? this.setState({text: 'Loading'})
                : this.setState((currentState) => {
                    return {
                        text: currentState.text + '.'
                    }
                  });
        }, 300);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {

        return(
            <div id="loading">
                <h1>{this.state.text}</h1>
            </div>
        );
    }
}

export default Home;
