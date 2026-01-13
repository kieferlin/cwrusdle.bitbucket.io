import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import Icons from '../components/Icons';
import '../App.css'; 


function Home() {
  return (
      <div className="container">
            <Header/>
            <div className="rounded-box">
                <Title /> 
                <SearchBar />
                <Icons />
            </div>
        </div>
  );
}

export default Home;

