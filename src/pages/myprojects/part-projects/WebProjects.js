import { faDownload, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

// data
import DataProjects from '../../../assets/data/projects';

class WebProjects extends Component {
    constructor(props) {
        super(props);
        this.state = { objectPerLoad: this.props.objectPerLoad }
    }

    render() {
        return (
            DataProjects.projects.filter((element) => { return element.type === "website" }).slice(this.state.index, this.state.objectPerLoad).map((element, idx) => {
                if (element.type !== "website") {
                    return false;
                }
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
                                <a href={element.website} target="_blank" rel="noreferrer">Live Preview <FontAwesomeIcon icon={faEye} /></a>
                                <a href={element.code}>Download <FontAwesomeIcon icon={faDownload} /></a>
                            </div>
                        </div>
                        <img src={element.image} alt={element.name} />
                    </li>
                )
            })
        )
    }
}
export default WebProjects;