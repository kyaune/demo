import React, { Component } from 'react';
import './Parks.css';
import image1 from './img/__image1.png';

class Parks extends Component {
    render() {
        return (
            <div className="Parks">
                <div className="parks__component">
                    <div className="component__header">
                        <h1 className="component__name">Куршская коса</h1>
                        <div className="site"> 
                            <p className="site__url">url</p>
                            <p className="site__name">park-kosa.ru</p>
                        </div>
                    </div>
                    <div className="component__body">
                        <img src={image1} className="component__photo"></img>
                        <div className="component__text">
                            <p className="text">
                                Здесь, посреди лесов и песчаных дюн, 
                                вы сможете увидеть два водных горизонта — спокойного Куршского 
                                залива с одной стороны и подёрнутого рябью волн Балтийского 
                                моря с другой. Уникальная природная зона на краю российского анклава.
                            </p>
                            <p className="text">
                                На этом Калининградская область не заканчивается. 
                                Для путешественника и исследователя там же по соседству — 
                                самая западная точка России, Балтийская коса, — и немецкое наследие 
                                россыпи небольших приморских городов. Атмосфера здешних мест 
                                исключает суету, окуная в спокойствие природы и запах стального, прохладного моря.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parks;