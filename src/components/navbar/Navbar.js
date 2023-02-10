// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPhone, faSlidersH, faTasks } from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";

// IMAGES
import Logo from '../../assets/img/logo.png';

// style
import './navbar.scss';

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        // Sticky Navbar
        if (window.scrollY > 0) {
            navbar.classList.add("nav__sticky");
        } else {
            navbar.classList.remove("nav__sticky");
        }

        // Active Navbar
        const project = document.querySelector('.projects');
        const skill = document.querySelector('#skills');
        const contact = document.querySelector('.contact');

        if (window.scrollY < project.offsetTop - 300) {
            if (document.querySelector('.navbar .active')) document.querySelector('.navbar .active').classList.remove('active');
            document.querySelector('.home__menu').classList.add('active');
        } else if (window.scrollY > project.offsetTop - 300 && window.scrollY < skill.offsetTop - 300) {
            if (document.querySelector('.navbar .active')) document.querySelector('.navbar .active').classList.remove('active');
            document.querySelector('.project__menu').classList.add('active');
        } else if (window.scrollY > skill.offsetTop - 300 && window.scrollY < contact.offsetTop - 300) {
            if (document.querySelector('.navbar .active')) document.querySelector('.navbar .active').classList.remove('active');
            document.querySelector('.skill__menu').classList.add('active');
        } else if (window.scrollY > contact.offsetTop - 300) {
            if (document.querySelector('.navbar .active')) document.querySelector('.navbar .active').classList.remove('active');
            document.querySelector('.contact__menu').classList.add('active');
        } else {
            if (document.querySelector('.navbar .active')) document.querySelector('.navbar .active').classList.remove('active');
        }
    }
})

class Navbar extends Component {
    smoothScroll = (item) => {
        const target = document.getElementById(item);
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        })
    }
    render() {
        return (
            <nav className="navbar" id="navbar">
                <div className="navbar__brand">
                    <img src={Logo} alt="Logo" onClick={() => this.smoothScroll("app")} />
                </div>
                <div className="navbar__nav">
                    <div className="btn-menu" />
                    <ul>
                        <li className="home__menu" onClick={() => { this.smoothScroll("navbar") }}><FontAwesomeIcon icon={faHome} className="icon" /> <p>Home</p></li>
                        <li className="project__menu" onClick={() => { this.smoothScroll("projects") }}><FontAwesomeIcon icon={faTasks} className="icon" /> <p>Projects</p></li>
                        <li className="skill__menu" onClick={() => this.smoothScroll("skills")}><FontAwesomeIcon icon={faSlidersH} className="icon" /><p>Skills</p></li>
                        <li className="contact__menu" onClick={() => this.smoothScroll("contact")}><FontAwesomeIcon icon={faPhone} className="icon" /><p>Contact</p></li>
                    </ul>
                </div>
            </nav >
        )
    }
}
export default Navbar;