import React from 'react';
import { Image } from 'react-bootstrap'
import introLogo from '../assets/intro.png'
import { Link } from 'react-router-dom';


function IntroPage(){

  return (
    <div>
    <div className="landing">
    <Link to='/tomo'>
    <img src={introLogo} rounded />
    </Link>
    </div>
    <div className="tomo">
    <h1>Tomo</h1>
    </div>


    </div>
  );
}

export default IntroPage;
