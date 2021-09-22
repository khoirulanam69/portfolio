// library
import React, { Component } from 'react';

// COMPONETS
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Projects from './myprojects/Projects';
import Certificates from './certificates/Certificates';
import Banner from '../components/banner/Banner';
import Skills from '../components/skill/Skills';
import Contact from '../components/contact/Contact';
import HireMe from '../components/hireme/HireMe';

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
                <HireMe />
                <div className="divider" />
                <Contact />
                <div className="divider" />
                <Footer />
            </div>
        )
    }
}
export default HomePage;