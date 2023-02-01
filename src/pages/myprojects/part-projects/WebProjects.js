import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

class WebProjects extends Component {
    constructor(props) {
        super(props);
        this.state = { projectWebsite: this.props.projectList }
    }

    render() {
        return (
            this.state.projectWebsite.map((element, idx) => {
                return (
                    <li key={idx} className="project">
                        <div className="project__title">
                            <h6>{element.company}</h6>
                            <h3>{element.name}</h3>
                        </div>
                        <div className="hover">
                            <div className="project__title">
                                <h6>{element.company}</h6>
                                <h3>{element.name}</h3>
                                <p>{element.description}</p>
                            </div>
                            <div className="project__link">
                                <a href={element.link} target="_blank" rel="noreferrer">Live Preview <FontAwesomeIcon icon={faEye} /></a>
                                <a href={element.github}>Download <FontAwesomeIcon icon={faDownload} /></a>
                            </div>
                        </div>
                        <img src={element.imageUrl} alt={element.image} />
                    </li>
                )
            })
        )
    }
}
export default WebProjects;