// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { Component } from "react";

// icon
import FacebookIcon from '../../assets/icons/facebook.png';
import InstagramIcon from '../../assets/icons/instagram.png';
import GithubIcon from '../../assets/icons/github.png';
import WhatsappIcon from '../../assets/icons/whatsapp.png';
import PhoneIcon from '../../assets/icons/phone.png';
import YoutubeIcon from '../../assets/icons/youtube.png';
import LinkedinIcon from '../../assets/icons/linkedin.png';

// IMAGES
import Logo from '../../assets/img/logo.png';

// style
import './footer.scss';

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
                            <ul className="list box__sm">
                                <li><a href="https://www.facebook.com/profile.php?id=100007872019224"><img src={FacebookIcon} alt="facebook-icon" /></a></li>
                                <li><a href="https://www.instagram.com/khoirulanam.69/"><img src={InstagramIcon} alt="instagram-icon" /></a></li>
                                <li><a href="https://www.youtube.com/channel/UCHlojfHlpMcqzC0bDUGUZ3Q"><img src={YoutubeIcon} alt="instagram-icon" /></a></li>
                                <li><a href="https://github.com/khoirulanam69"><img src={GithubIcon} alt="github-icon" /></a></li>
                                <li><a href="https://www.linkedin.com/in/muhammad-khoirul-anam-655728252/"><img src={LinkedinIcon} alt="linkedin-icon" /></a></li>
                            </ul>
                        </li>
                        <li>
                            <h6>CONTACTS</h6>
                            <ul className="list">
                                <li><a href="https://wa.me/+6281357333886"><img src={WhatsappIcon} alt="whatsapp-icon" /></a></li>
                                <li><a href="tel:+6281357333886"><img src={PhoneIcon} alt="phone-icon" /></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer__footer">
                    <FontAwesomeIcon icon={faCopyright} className="icon" />
                    <p>2020 Khoirul Anam</p>
                    <p>2022-2025 M Khoirul Anam | All right reserved</p>
                </div>
            </div>
        )
    }
}
export default Footer;