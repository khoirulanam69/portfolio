
// library
import React, { Component } from 'react';
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// Data
import Certificate from "../../../assets/data/certificate";

// style
import './partCertificate.scss';

export default class WebCertificate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    isOpenImage = () => {
        this.setState({
            isOpen: true,
            photoIndex: 0
        })
    }

    render() {
        // const { photoIndex, isOpen } = this.state;
        return (
            <div className="web__certificate">
                {Certificate.map((element, idx) => {
                    return (
                        <React.Fragment key={idx}>
                            <div className="flip">
                                <div className="flip__inner">
                                    <div className="flip__front">
                                        <img src={element[0]} alt="Illiyin Studio" />
                                    </div>
                                    <div className="flip__back">
                                        <img src={element[1]} alt="Illiyin Studio" entry={idx} onClick={this.isOpenImage} />
                                    </div>
                                </div>
                            </div>
                            {/* {isOpen && (
                                <Lightbox
                                    mainSrc={element[photoIndex]}
                                    nextSrc={element[(photoIndex + 1) % element.length]}
                                    prevSrc={element[(photoIndex + element.length - 1) % element.length]}
                                    onCloseRequest={() => this.setState({ isOpen: false })}
                                    onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + element.length - 1) % element.length,
                                        })
                                    }
                                    onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % element.length,
                                        })
                                    }
                                />
                            )} */}
                        </React.Fragment>
                    )
                })
                }
            </div>
        );
    }
}