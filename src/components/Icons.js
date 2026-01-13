import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';

class Icons extends Component {
    constructor() {
        super();
        this.state = {
            isFlippedDocs: false,
            isFlippedFiles: false,
            isFlippedTools: false,
            isMouseOverDocs: false,
            isMouseOverFiles: false,
            isMouseOverTools: false,
        };
    }

    handleMouseEnter = card => {
        this.setState({ [`isFlipped${card}`]: true, [`isMouseOver${card}`]: true });
    };

    handleMouseLeave = card => {
        this.setState({ [`isMouseOver${card}`]: false });
        if (!this.state[`isMouseOver${card}`]) {
            this.setState({ [`isFlipped${card}`]: false });
        }
    };

    render() {
        const { isFlippedDocs, isFlippedFiles, isFlippedTools } = this.state;

        return (
            <div>
                <div className="image-links d-flex justify-content-center mb-4">
                    {/* Docs Card */}
                    <ReactCardFlip isFlipped={isFlippedDocs} flipDirection="vertical">
                        <div
                            onMouseEnter={() => this.handleMouseEnter('Docs')}
                            onMouseLeave={() => this.handleMouseLeave('Docs')}
                            className="icon-container"
                        >
                            <div className="icon-overlay"></div>
                            <img
                                src="https://cdn.iconscout.com/icon/free/png-256/free-google-docs-2981840-2476482.png"
                                alt="Document Icon"
                                className="img-fluid"
                            />
                            <div className="ml-2">Docs</div>
                            <div className="Description">FAIRification documentation describing the package's uses and functions</div>
                        </div>
                        <div className="hover-links" onMouseLeave={() => this.handleMouseLeave('Docs')}>
                            <ul>
                                <li><a href="/docs/_build/html/index.html" target="_blank" rel="noopener noreferrer">FAIR Package Documentation</a></li>
                                <li><a href="https://drive.google.com/file/d/1yxo4ny3vpUQEnKqIlC6pry6rsmidEQco/view?usp=sharing" target="_blank" rel="noopener noreferrer">JSON-LD and OWL for FAIRification</a></li>
                                <li><a href="https://drive.google.com/file/d/16aYL4m25chi9508fVLavN05Au8EjcLDi/view?usp=sharing" target="_blank" rel="noopener noreferrer">Package Development</a></li>
                            </ul>
                        </div>
                    </ReactCardFlip>

                    {/* Files Card */}
                    <ReactCardFlip isFlipped={isFlippedFiles} flipDirection="vertical">
                        <div
                            onMouseEnter={() => this.handleMouseEnter('Files')}
                            onMouseLeave={() => this.handleMouseLeave('Files')}
                            className="icon-container"
                        >
                            <div className="icon-overlay"></div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3767/3767084.png"
                                alt="Files Icon"
                                className="img-fluid"
                            />
                            <div className="ml-2">Domain Files</div>
                            <div className="Description">Directories for ontology OWL, JSON-LD, Vignette, and documentation files</div>
                        </div>
                        <div className="hover-links" onMouseLeave={() => this.handleMouseLeave('Files')}>
                            <ul>
                                <li><Link to="/OntologyFiles" className="ontology-link">Domain Files</Link></li>                            
                            </ul>
                        </div>
                    </ReactCardFlip>

                    {/* Tools Card */}
                    <ReactCardFlip isFlipped={isFlippedTools} flipDirection="vertical">
                        <div
                            onMouseEnter={() => this.handleMouseEnter('Tools')}
                            onMouseLeave={() => this.handleMouseLeave('Tools')}
                            className="icon-container"
                        >
                            <div className="icon-overlay"></div>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2249/2249538.png"
                                alt="Tools Icon"
                                className="img-fluid"
                            />
                            <div className="ml-2">Tools</div>
                            <div className="Description">Applications for further ontology visualizaiton and exploration</div>
                        </div>
                        <div className="hover-links" onMouseLeave={() => this.handleMouseLeave('Tools')}>
                            <ul>
                                <li><a href="https://webvowl-w4rydgnccq-ul.a.run.app/" target="_blank" rel="noopener noreferrer">WebVOWL for Ontology Visualization</a></li>
                                <li><a href="https://json-ld.org/playground/" target="_blank" rel="noopener noreferrer">JSON-LD Playground</a></li>
                            </ul>
                        </div>
                    </ReactCardFlip>
                </div>
                <div className="centered-text">Hover over tiles to see more!</div>
            </div>
        );
    }
}

export default Icons;
