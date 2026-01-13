import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OntologyFiles from './pages/OntologyFiles';
import NoPage from './pages/NoPage';
import { Helmet } from 'react-helmet';

const App = () => {
    return (
        <>
            <Helmet>
                 <link rel="icon" href="/mds3.png" type="image/x-icon" />
                <title>FAIR Materials FindTheDocs</title>
            </Helmet>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/OntologyFiles" exact element={<OntologyFiles />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
