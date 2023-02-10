// library
import { useEffect, useState } from "react";

// pages
import WebProjects from './part-projects/WebProjects';
import AndroidProjects from './part-projects/AndroidProjects';
import AllProjects from './part-projects/AllProject';

// style
import './projects.scss';
import axios from "axios";


const Projects = () => {
    const [projectType, setProjectType] = useState();
    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://portfolio-back-end.000webhostapp.com/api/projects').then(res => res.data.projects.data);
            setProjects(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const CheckTypeProject = () => {
        const projectAndroid = projects.filter(project => project.type === 'android')
        const projectWebsite = projects.filter(project => project.type === 'website')
        if (projectType === "website") {
            return <WebProjects projectList={projectWebsite} />
        } else if (projectType === "android") {
            return <AndroidProjects projectList={projectAndroid} />
        }
        return <AllProjects projectList={projects} />
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

    return (
        <div className="projects" id="projects">
            <div className="title">
                <h4>MY PROJECTS</h4>
                <p>Contains a collection of projects for approximately 2 years as a web and android developer</p>
                <ul className="menu__projects">
                    <li className="active" onClick={setTypeProject}><h6>All</h6></li>
                    <li onClick={setTypeProject}><h6>Website</h6></li>
                    <li onClick={setTypeProject}><h6>Android</h6></li>
                </ul>
            </div>
            <ul className="box__container">
                <CheckTypeProject />
            </ul>
        </div>
    )
}
export default Projects;