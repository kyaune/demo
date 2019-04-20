import React, { Component } from 'react';
import './Map.css';
import map from './img/__map.png';

class Map extends Component {
    render() {
        return (
            <div className="Map">
                <div className="map__header">
                    <p className="header__name">Баренцбург</p>
                    <p className="header__coordinates">78.0648° с.ш. 14.2335° в.д.</p>
                </div>
                <img src={map} className="map__img"></img>
                <div className="map__description">
                    <div className="description__text">
                    Арктика и соседство с Норвегией — мало кто знает о жизни самого 
                    западного российского посёлка, который находится на Шпицбергене.
                    </div>
                    <div className="description__site">
                        <p className="site__url">URL</p>
                        <p className="site__description">Умереть или родиться здесь практически невозможно</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map;