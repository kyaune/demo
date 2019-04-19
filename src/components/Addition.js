import React, { Component } from 'react';
import './Addition.css';
import add1 from './img/add1.png';
import add2 from './img/add2.png';
import add3 from './img/add3.png';
import add4 from './img/add4.png';

class Addition extends Component {
    render() {
        return (
            <div className="Addition">
                <div className="addition__header">
                    <h1>
                        А также
                    </h1>
                    <p className="addition__description">
                        места, рекомендованные нашими фотографами
                    </p>
                </div>
                <div className="addition__body">
                    <img src={add1}></img>
                    <img src={add2}></img>
                    <img src={add3}></img>
                    <img src={add4}></img>
                </div>
            </div>
        )
    }
}

export default Addition;
