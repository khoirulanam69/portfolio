// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

// IMAGES
import HeroImage from '../../assets/img/hero.png';

// style
import './banner.scss';
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class Banner extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="section">
                    <h3>Hi, I am Khoirul Anam</h3>
                    <h1>A Web Developer</h1>
                    <p>I'm from Indonesia, I have graduated from the Information Technology of University of Malang in 2021. During my study I had an internship at the Illiyin Studio company as a fullstack developer for 3 months. I have worked as web developer freelancer for 2 years.</p>
                    <div className="button">
                        <ul>
                            <li><a href="mailto:khoirulanam.um@gmail.com">Let's Talk</a></li>
                            <li><a href="/CV-Khoirul-Anam.pdf"><FontAwesomeIcon icon={faDownload} /> Download CV</a></li>
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