import React, { Component } from 'react';
import './Video.css';
import video1 from './img/video1.png';
import video2 from './img/video2.png';

class Video extends Component {
    render() {
        return (
            <div className="Video">
                <div className="video__content">
                    <div className="video__header">
                        <h1>
                            В глубины Земли и в дальний космос
                        </h1>
                        <p className="header__text">
                            Видео от студии Stereotactic о местах в России, 
                            где ведутся фундаментальные исследования
                        </p>
                    </div>
                    <div className="video__body">
                        <img src={video1} className="video"></img>
                        <img src={video2} className="video"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;
