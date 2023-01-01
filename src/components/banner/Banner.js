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
                    <p>II'm from Indonesia, I had graduated from State University of Malang on August 2021 and the major is Informatics Enginering. I had an internship at Illiyin Studio as fullstack developer for 3 months. I had worked approximately 1 years as freelance developer. I ever worked at RSU Pindad as IT Staff in 2021 until 2022.</p>
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