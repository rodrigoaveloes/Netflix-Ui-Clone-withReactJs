import React from 'react';
import '../styles/Header.scss';

export function Header ({black}){
  return(
    <header  className={black ? 'black' : ''}>
  <div className="header--logo">
    <a href="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
    </a>
  </div>
  <div className="header--user">
    <a href="/">
      <img src="https://noirflix.netlify.app/imgs/icon1.png"/>
    </a>
  </div>

    </header>
  );
}