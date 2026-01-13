import React from 'react';
import Header from '../components/Header';
import OntologyFilesTitle from '../components/OntologyFilesTitle';
import OntologyFilesSearchBar from '../components/OntologyFilesSearchBar';
import '../App.css'; 


function OntologyFiles() {
  return (
      <div className="container">
            <Header/>
            <div className="rounded-box">
                <OntologyFilesTitle /> 
                <OntologyFilesSearchBar />
            </div>
        </div>
  );
}

export default OntologyFiles;

