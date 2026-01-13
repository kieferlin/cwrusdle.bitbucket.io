import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <a href="https://mds3-coe.com/">
          <img 
            crossorigin="anonymous" 
            src="https://drive.lienuc.com/uc?id=14fRR47vw6Zt_Od1tI6M7ZHtnv4DYVkgP" 
            alt="Logo"
          />
        </a>
      </div>
      <div className="top-right-labels">
        <Link to="/" className="nav-link">Home</Link>
        <div className="dropdown-1">
          <span className="label">Docs</span>
          <div className="dropdown-content-1">
            <ul>
              <li><a href="/docs/_build/html/index.html" target="_blank" rel="noopener noreferrer">FAIR Package Documentation</a></li>              
              <li><a href="https://drive.google.com/file/d/1yxo4ny3vpUQEnKqIlC6pry6rsmidEQco/view?usp=sharing" target="_blank" rel="noopener noreferrer">JSON-LD and OWL for FAIRification</a></li>
              <li><a href="https://drive.google.com/file/d/16aYL4m25chi9508fVLavN05Au8EjcLDi/view?usp=sharing" target="_blank" rel="noopener noreferrer">Package Development</a></li>
            </ul>
          </div>
        </div>
        <div className="dropdown-1">
          <span className="label">Files</span>
          <div className="dropdown-content-1">
            <ul>
            <li><Link to="/OntologyFiles" className="ontology-link">Domain Files</Link></li>
            </ul>
          </div>
        </div>
        <div className="dropdown-1">
          <span className="label">Tools</span>
          <div className="dropdown-content-1">
            <ul>
              <li><a href="https://webvowl-w4rydgnccq-ul.a.run.app/" target="_blank" rel="noopener noreferrer">WebVOWL for Ontology Visualization</a></li>
              <li><a href="https://json-ld.org/playground/" target="_blank" rel="noopener noreferrer">JSON-LD Playground</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
