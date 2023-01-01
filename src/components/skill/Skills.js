// library
import { Component } from "react";

// DATA
import DataSkills from '../../assets/data/skills';

// style
import './skill.scss';

window.addEventListener('scroll', function () {
    const skill = document.querySelector('#skills')
    if (skill) {
        if (window.scrollY > skill.offsetTop - 300) {
            document.querySelectorAll('.skill__bar').forEach(element => {
                element.classList.add('active');
            })
        }
    }
})

class Skills extends Component {
    render() {
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
}
export default Skills;