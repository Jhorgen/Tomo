import React from 'react';
import { Image } from 'react-bootstrap'
import IntroLogo from '../assets/intro.png'
import { Link } from 'react-router-dom';

function IntroPage(){
  var myStyle = {

  }
  return (
    <div>
    <Link to='/tomo'>
    <Image style={myStyle} src={IntroLogo} rounded />
    </Link>
    </div>
  );
}

export default IntroPage;
