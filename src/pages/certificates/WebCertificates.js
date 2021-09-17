import React, { Component } from "react";

// DATA
import Certificate from "../../assets/data/certificate";

class WebCertificate extends Component {
    render() {
        return (
            <div className="web__certificate">
                {
                    Certificate.map((element, idx) => {
                        return (
                            <div className="flip" key={idx}>
                                <div className="flip__inner">
                                    <div className="flip__front">
                                        <img src={element.illiyin} alt="Illiyin Studio" />
                                    </div>
                                    <div className="flip__back">
                                        <img src={element.illiyinBack} alt="Illiyin Studio" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default WebCertificate;