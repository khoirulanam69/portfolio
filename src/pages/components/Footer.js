import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Component } from "react";

// IMAGES
import Logo from '../../assets/img/logo.png';

class Footer extends Component {
    smoothScroll = (item) => {
        const target = document.getElementById(item);
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        })
    }
    render() {
        return (
            <div className="footer">
                <div className="footer__foo">
                    <div className="footer__brand">
                        <img src={Logo} alt="footer-brand" />
                    </div>
                    <ul className="footer__section">
                        <li>
                            <h6>DIRECT LINKS</h6>
                            <ul className="list">
                                <li onClick={() => { this.smoothScroll("projects") }}><span>Projects</span></li>
                                <li onClick={() => { this.smoothScroll("skills") }}><span>Skills</span></li>
                                <li onClick={() => { this.smoothScroll("contact") }}><span>Contact</span></li>
                            </ul>
                        </li>
                        <li>
                            <h6>SOCIAL MEDIA</h6>
                            <ul className="list">
                                <li><a href="https://www.facebook.com/profile.php?id=100007872019224"><FontAwesomeIcon icon={faFacebook} className="icon" /> <span>Facebook</span></a></li>
                                <li><a href="https://www.instagram.com/khoirulanam.69/"><FontAwesomeIcon icon={faInstagram} className="icon" /> <span>Instagram</span></a></li>
                                <li><a href="https://github.com/khoirulanam69"><FontAwesomeIcon icon={faGithub} className="icon" /> <span>Github</span></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6>CONTACTS</h6>
                            <ul className="list">
                                <li><a href="https://wa.me/+6281357333886"><FontAwesomeIcon icon={faWhatsapp} className="icon" /> <span>Whatsapp</span></a></li>
                                <li><a href="tel:+6281357333886"><FontAwesomeIcon icon={faPhone} className="icon" /> <span>Phone</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer__footer">
                    <FontAwesomeIcon icon={faCopyright} className="icon" />
                    <p>2020 Khoirul Anam</p>
                </div>
            </div>
        )
    }
}
export default Footer;