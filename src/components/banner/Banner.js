// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Component } from "react";

// IMAGES
import HeroImage from '../../assets/img/hero.png';

// style
import './banner.scss';

class Banner extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="section">
                    <h3>Hi, I am Khoirul Anam</h3>
                    <h1>A Web Developer</h1>
                    <p>I'm from Indonesia, I had an internship at the Illiyin Studio company as a fullstack developer for 3 months. I have worked as freelancer for 2 years. And I also a little learning about design.</p>
                    <div className="button">
                        <ul>
                            <li><a href="mailto:khoirulanam.um@gmail.com">Let's Talk</a></li>
                            <li>
                                <a href="https://wa.me/+6281357333886"><FontAwesomeIcon icon={faWhatsapp} className="icon" /></a>
                                <a href="https://www.facebook.com/profile.php?id=100007872019224"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                                <a href="https://www.instagram.com/khoirulanam.69/"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="image">
                    <img src={HeroImage} alt="hero-img" />
                </div>
                <div className="decoration" />
            </div>
        )
    }
}
export default Banner;