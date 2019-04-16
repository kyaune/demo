import React, { Component } from 'react';
import './Header.css';
import train from './img/train.jpg';
import logo from './img/logo__rus.svg';
import langRus from './img/__lang-1.png';
import langEng from './img/__lang.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <div className="header__logo">
            <img src={logo} alt="train" />
            <div className="logo__languages">
              <img src={langRus} alt="train" className="rusLogo"/>
              <img src={langEng} alt="train" />
            </div>
          </div>
          <header className="header__name">
            <h1>Путешествия по России</h1>
            <h2>Настоящая страна не в выпусках новостей, а здесь.</h2>
          </header>
          <div className="header__image">
            <img src={train} alt="train" width="984px" height="554px"/>
            <p className="image__description">ваша полка — верхняя</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
