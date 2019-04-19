import React, { Component } from 'react';
import './Cities.css';
import cover from './img/cover.png';
import herb1 from './img/herb1.png';
import herb2 from './img/herb2.png';
import herb3 from './img/herb3.png';
import herb4 from './img/herb4.png';
import herb5 from './img/herb5.png';

class Cities extends Component {
    render() {
        return (
            <div className="Cities">
                <img src={cover} className="baikal"></img>
                <div className="cities__content">
                    <div className="cities__header">
                        <h1>Природа на гербах российских городов</h1>
                    </div>
                    <div className="cities__body">
                        <div className="cities__element">
                            <img src={herb1}></img>
                            <p className="cities__name">Великий Новгород</p>
                        </div>
                        <div className="cities__element">
                            <img src={herb2}></img>
                            <p className="cities__name">Ростов Великий</p>
                        </div>
                        <div className="cities__element">
                            <img src={herb3}></img>
                            <p className="cities__name">Тамбов</p>
                        </div>
                        <div className="cities__element">
                            <img src={herb4}></img>
                            <p className="cities__name">Елабуга</p>
                        </div>
                        <div className="cities__element">
                            <img src={herb5}></img>
                            <p className="cities__name">Пермь</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cities;