import React, { Component } from 'react';
import './Gallery.css';
import item from './img/__item.png';
import item1 from './img/__item1.png';
import item2 from './img/__item2.png';
import item3 from './img/__item3.png';
import item4 from './img/__item4.png';
import item5 from './img/__item5.png';
import item6 from './img/__item6.png';
import item7 from './img/__item7.png';
import item8 from './img/__item8.png';
import item9 from './img/__item9.png';
import item10 from './img/__item10.png';
import item11 from './img/__item11.png';


class Gallery extends Component {
    render() {
        return (
            <div className="Gallery">
                <img src={item} className="gallery__photo"/>
                <img src={item1} className="gallery__photo"/>
                <img src={item2} className="gallery__photo"/>
                <img src={item3} className="gallery__photo"/>
                <img src={item4} className="gallery__photo"/>
                <img src={item5} className="gallery__photo"/>
                <img src={item6} className="gallery__photo"/>
                <img src={item7} className="gallery__photo"/>
                <img src={item8} className="gallery__photo"/>
                <img src={item9} className="gallery__photo"/>
                <img src={item10} className="gallery__photo"/>
                <img src={item11} className="gallery__photo"/>
            </div>
        )
    }
}
export default Gallery;
