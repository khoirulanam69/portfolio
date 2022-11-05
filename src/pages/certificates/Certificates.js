// library
import { Component } from "react";
import { Link } from "react-router-dom";

// ICONS
import IconWebsite from '../../assets/icons/web.svg';
import IconAndroid from '../../assets/icons/android.svg';

// style
import './certificate.scss';

class Certificates extends Component {
    render() {
        return (
            <div className="certificates__wrapper">
                <h4>CERTIFICATES</h4>
                <div className="certificates">
                    <Link to="/webcertificates">
                        <div className="box__certificate website">
                            <img src={IconWebsite} alt="website-icon" />
                            <h5>WEB DEVELOPMENT</h5>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="box__certificate android">
                            <img src={IconAndroid} alt="android-icon" />
                            <h5>ANDROID DEVELOPMENT</h5>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
export default Certificates;