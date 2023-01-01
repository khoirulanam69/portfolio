// library
import { faClock, faFileSignature, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

// style
import './hireme.scss';

class HireMe extends Component {
    render() {
        return (
            <div className="hireme">
                <h2>Why Hire Me?</h2>
                <div className="hire__contain">
                    <div className="box__hire">
                        <div className="icon__hire">
                            <FontAwesomeIcon icon={faFileSignature} className="icon" />
                        </div>
                        <h6>Clean Code</h6>
                        <p>The program on the website is easy for everyone to understand</p>
                    </div>
                    <div className="box__hire">
                        <div className="icon__hire">
                            <FontAwesomeIcon icon={faClock} className="icon" />
                        </div>
                        <h6>On Time</h6>
                        <p>Always finish the project on time</p>
                    </div>
                    <div className="box__hire">
                        <div className="icon__hire">
                            <FontAwesomeIcon icon={faLaptopCode} className="icon" />
                        </div>
                        <h6>UX is Number One</h6>
                        <p>I pay special attention to UI for a better user experience</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default HireMe;