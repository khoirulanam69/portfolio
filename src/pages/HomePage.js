import React, { Component } from 'react';
import '../App.scss';

// COMPONETS
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './myprojects/Projects';
import Certificates from './certificates/Certificates';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
    }
})

class HomePage extends Component {
    render() {
        return (
            <div className="App" id="app">
                <Navbar />
                <Banner />
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
export default HomePage;