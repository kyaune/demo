import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="footer__content">
                    <p className="footer__url">Карты</p>
                    <p className="footer__url">Погода</p>
                    <p className="footer__url">Расписание</p>
                    <p className="footer__url">Календарь</p>
                    <p className="footer__url">Путешествия</p>
                    <p className="footer__copyright">© 2019. Впишите своё имя</p>
                </div>
            </div>
        )
    }
}

export default Footer;