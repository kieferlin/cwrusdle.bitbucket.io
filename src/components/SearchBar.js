import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Array of links
  const links = [
    { url: "/docs/_build/html/index.html", text: "Docs: FAIR Package Documentation" },
    { url: "https://drive.google.com/file/d/1yxo4ny3vpUQEnKqIlC6pry6rsmidEQco/view?usp=sharing", text: "Docs: JSON-LD and OWL for FAIRification" },
    { url: "https://drive.google.com/file/d/16aYL4m25chi9508fVLavN05Au8EjcLDi/view?usp=sharing", text: "Docs: Package Development" },
    { url: "./OntologyFiles", text: "Files: Domain Files" },
    { url: "https://webvowl-w4rydgnccq-ul.a.run.app/", text: "Tools: WebVOWL for Ontology Visualization" },
    { url: "https://json-ld.org/playground/", text: "Tools: JSON-LD Playground" }
  ];

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Here, Scroll for More"
          value={searchTerm}
          onChange={handleChange} 
        />
        <div className="dropdown-content">
          {links
            .filter((link) => link.text.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((link, index) => (
              <div key={index}>
                {link.url === "./OntologyFiles" ? (
                  <a href={link.url} className="ontology-link">{link.text}</a>
                ) : (
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.text}</a>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
