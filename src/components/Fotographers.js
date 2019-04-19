import React, { Component } from 'react';
import './Fotographers.css';
import fotographer1 from './img/fotographer1.png';
import fotographer2 from './img/fotographer2.png';
import fotographer3 from './img/fotographer3.png';

class Fotographer extends Component {
    render() {
        return (
            <div className="Fotographer">
                <div className="fotographer__content">
                    <div className="fotographer__header">
                        <h1>
                            Фотографы, снимающие Россию
                        </h1>
                        <p className="header__text">
                            Природа и люди вдохновили их работы, удостоенные 
                            наград на международных конкурсах
                        </p>
                    </div>
                    <div className="fotographer__body">
                        <div className="fotographer__element">
                            <div className="fotographer__img">
                                <img src={fotographer1}></img>
                            </div>
                            <p className="fotographer__text">
                                «Если вам кажется, что в России ничего не происходит, 
                                то просто выгляньте “наружу”…»
                            </p>
                            <p className="fotographer__name">
                                Виктор Лягушкин
                            </p>
                        </div>
                        <div className="fotographer__element">
                            <div className="fotographer__img">
                                <img src={fotographer2}></img>
                            </div>
                            <p className="fotographer__text">
                                «Если в город едут туристы — неважно за чем они туда едут: 
                                за шамбалой или фрески Рублева искать, или на родину Тарковского 
                                — туристы обеспечивают любой город молодёжью, рабочими местами 
                                и в конечном счёте наполняют его жизнью.»
                            </p>
                            <p className="fotographer__name">
                                Иван Хафизов
                            </p>
                        </div>
                        <div className="fotographer__element">
                            <div className="fotographer__img">
                                <img src={fotographer3}></img>
                            </div>
                            <p className="fotographer__text">
                                «Ты приезжаешь, и люди рассказывают тебе, как им плохо. А когда ты покажешь, 
                                как им плохо, то ты сволочь и всё очернил.»
                            </p>
                            <p className="fotographer__name">
                                Сергей Максимишин
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fotographer;