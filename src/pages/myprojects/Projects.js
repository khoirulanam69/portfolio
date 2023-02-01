// library
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

// pages
import WebProjects from './part-projects/WebProjects';
import AndroidProjects from './part-projects/AndroidProjects';
import AllProjects from './part-projects/AllProject';

// style
import './projects.scss';
import axios from "axios";


const Projects = () => {
    const [openAllProjects, setOpenAllProjects] = useState(false)
    const [projectType, setProjectType] = useState();
    const [projects, setProjects] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://portfoliobackend.epizy.com/api/projects').then(response => response.data.projects.data);
            setProjects(response);
            console.log(response);
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

    const loadMore = (e) => {
        if (e.target.innerText === "View More ") {
            setOpenAllProjects(true);
        } else {
            setOpenAllProjects(false);
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
            {openAllProjects ?
                <div className="btn__view" onClick={loadMore}>
                    <span>View Less </span>
                    <FontAwesomeIcon icon={faChevronUp} />
                </div> :
                <div className="btn__view" onClick={loadMore}>
                    <span>View More </span>
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>}
        </div>

    )
}
export default Projects;