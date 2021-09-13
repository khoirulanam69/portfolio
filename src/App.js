import { faFacebook, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faSlidersH, faTasks, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, useState } from 'react';
import emailjs from 'emailjs-com';
import './App.scss';

// IMAGES
import Logo from './assets/img/logo.png';
import HeroImage from './assets/img/hero.png';

// ICONS
import IconWebsite from './assets/icons/web.svg';
import IconAndroid from './assets/icons/android.svg';

// PAGES
import WebProjects from './pages/WebProjects';
import AndroidProjects from './pages/AndroidProjects';
import AllProjects from './pages/AllProject';

// DATA
import DataSkills from './assets/data/skills';

const smoothScroll = (item) => {
  const target = document.getElementById(item);
  window.scrollTo({
    top: target.offsetTop - 80,
    behavior: "smooth"
  })
}

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <img src={Logo} alt="Logo" onClick={() => smoothScroll("app")} />
      </div>
      <div className="navbar__nav">
        <div className="btn-menu" />
        <ul>
          <li className="project__menu" onClick={() => { smoothScroll("projects") }}><FontAwesomeIcon icon={faTasks} className="icon" /> <span>Projects</span></li>
          <li className="skill__menu" onClick={() => smoothScroll("skills")}><FontAwesomeIcon icon={faSlidersH} className="icon" /><span>Skills</span></li>
          <li className="contact__menu" onClick={() => smoothScroll("contact")}><FontAwesomeIcon icon={faPhone} className="icon" /><span>Contact</span></li>
        </ul>
      </div>
    </nav >
  )
}

function Jumbotron() {
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

function Projects() {
  const [objectPerLoad, setObjectPerLoad] = useState(2);
  const [projectType, setProjectType] = useState();

  const loadMore = (e) => {
    if (e.target.innerText === "View More") {
      setObjectPerLoad(100);
      e.target.innerText = "View Less";
    } else {
      setObjectPerLoad(2);
      e.target.innerText = "View More";
    }
  }

  const setTypeProject = (e) => {
    if (e.target.innerText === "Android") {
      setProjectType("android");
      document.querySelector('.projects .active').classList.remove('active');
      e.target.classList.add('active');
    } else if (e.target.innerText === "Website") {
      setProjectType("website");
      document.querySelector('.projects .active').classList.remove('active');
      e.target.classList.add('active');
    } else {
      setProjectType("all");
      document.querySelector('.projects .active').classList.remove('active');
      e.target.classList.add('active');
    }
  }

  const CheckTypeProject = () => {
    if (projectType === "website") {
      return <WebProjects objectPerLoad={objectPerLoad} />
    } else if (projectType === "android") {
      return <AndroidProjects objectPerLoad={objectPerLoad} />
    }
    return <AllProjects objectPerLoad={objectPerLoad} />
  }

  return (
    <div className="projects" id="projects">
      <div className="title">
        <h4>MY PROJECTS</h4>
        <p>Contains a collection of projects for approximately 3 years as a web developer</p>
        <ul className="menu__projects">
          <li className="active" onClick={setTypeProject}><h6>All</h6></li>
          <li onClick={setTypeProject}><h6>Website</h6></li>
          <li onClick={setTypeProject}><h6>Android</h6></li>
        </ul>
      </div>
      <ul className="box__container">
        <CheckTypeProject />
      </ul>
      <div className="btn__view" onClick={loadMore}><span>View More</span> <FontAwesomeIcon icon={faArrowRight} /></div>
    </div>
  )
}

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="title">
        <h4>MY SKILLS</h4>
        <p>These are the skills used to create all the websites in my project.</p>
      </div>
      <ul>
        {DataSkills.skills.map((element, idx) => {
          return (
            <li key={idx}>
              <div className="skill__information">
                <h6>{element.name}</h6>
                <p>{element.value}%</p>
              </div>
              <div className="skill__bar" style={{ "--width": element.value }} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

function Certificates() {
  return (
    <div className="certificates">
      <div className="box__certificate website">
        <img src={IconWebsite} alt="website-icon" />
        <h5>WEB DEVELOPMENT</h5>
      </div>
      <div className="box__certificate android">
        <img src={IconAndroid} alt="android-icon" />
        <h5>ANDROID DEVELOPMENT</h5>
      </div>
    </div>
  )
}

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dq9xnz3', 'template_zsbuaor', e.target, 'user_cz22f0cVYiS5y5oGfYxl0')
      .then((result) => {
        if (result.text === "OK") {
          alert("Message send succesfully")
        }
      }, (error) => {
        alert(error.text);
      });
    e.target.reset();
  }
  return (
    <div className="contact" id="contact">
      <h3>CONTACT ME</h3>
      <div className="section">
        <div className="contact__informations">
          <div className="box__information">
            <div className="icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
            <div className="address__information">
              <h6>ADDRESS</h6>
              <p>JL. Simpang Pahlawan No.35 Dampit, Malang, East Java, Indonesian</p>
            </div>
          </div>
          <div className="box__information">
            <div className="icon"><FontAwesomeIcon icon={faPhone} /></div>
            <div className="phone__information">
              <h6>PHONE</h6>
              <p>+62 8135 7333 886</p>
            </div>
          </div>
          <div className="box__information">
            <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
            <div className="email__information">
              <h6>EMAIL</h6>
              <p>khoirulanam.um@gmail.com</p>
            </div>
          </div>
        </div>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" placeholder="How can I help?" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

function Footer() {
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
              <li onClick={() => { smoothScroll("projects") }}><span>Projects</span></li>
              <li onClick={() => { smoothScroll("skills") }}><span>Skills</span></li>
              <li onClick={() => { smoothScroll("contact") }}><span>Contact</span></li>
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

window.addEventListener('scroll', function () {
  // Sticky Navbar
  if (window.scrollY > 0) {
    document.querySelector('.navbar').classList.add("nav__sticky");
  } else {
    document.querySelector('.navbar').classList.remove("nav__sticky");
  }

  // Active Navbar
  const project = document.querySelector('.projects');
  const skill = document.querySelector('#skills');
  const contact = document.querySelector('.contact');

  if (window.scrollY > project.offsetTop - 300 && window.scrollY < skill.offsetTop - 300) {
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
})

class App extends Component {
  render() {
    return (
      <div className="App" id="app">
        <Navbar />
        <Jumbotron />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <div className="container" id="skills">
          <Skills />
          <Certificates />
          <div className="decoration" />
          <div className="decoration1" />
        </div>
        <div className="divider" />
        <Contact />
        <div className="divider" />
        <Footer />
      </div>
    )
  }
}

export default App;
