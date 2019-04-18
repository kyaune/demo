import React, { Component } from 'react';
import './Parks.css';
import image1 from './img/__image1.png';
import image2 from './img/__image2.png';
import image3 from './img/__image3.png';
import image4 from './img/__image4.png';
import image5 from './img/__image5.png';

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
                <div className="parks__component">
                    <div className="component__header">
                        <h1 className="component__name">Кольский</h1>
                        <div className="site"> 
                            <p className="site__url">url</p>
                            <p className="site__name">National Geographic</p>
                        </div>
                    </div>
                    <div className="component__body">
                        <img src={image2} className="component__photo"></img>
                        <div className="component__text">
                            <p className="text">
                                Почти весь полуостров находится за Полярным кругом. 
                                Саамская тундра, от которой на юг — тайга, а на север — Ледовитый океан, 
                                прикидывающийся Баренцевым морем.
                            </p>
                            <p className="text">
                                Возможно, вы смотрели Звягинцева и даже слышали историю арктического фестиваля
                                в Териберке. Возможно, слово «Хибины» не осталось под снегом школьных 
                                воспоминаний об уроках географии. Возможно, вы не интересовались пронизывающей 
                                земную кору сверхглубокой скважиной, а от апатитов вас давно накрывает апатия. 
                                Но ваша мечта увидеть северное сияние начинает сбываться с билетом в Мурманск.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parks__component">
                    <div className="component__header">
                        <h1 className="component__name">Алтай</h1>
                        <div className="site"> 
                            <p className="site__url">url</p>
                            <p className="site__name">Facebook</p>
                        </div>
                    </div>
                    <div className="component__body">
                        <img src={image3} className="component__photo"></img>
                        <div className="component__text">
                            <p className="text">
                                Алтай — одно из красивейших мест в России. В первую очередь из-за гор: если ехать 
                                вдоль хребта, вы увидите склоны, усыпанные соснами, горные реки и озёра. 
                                А если вы откроете в автомобиле окна, сможете познакомиться с невидимым чудом 
                                здешних мест — горным воздухом.
                            </p>
                            <p className="text">
                                Климат на Алтае умеренный, поэтому ехать сюда лучше всего летом. Так вы увидите всё 
                                разнообразие местной флоры и фауны. По лесам Алтая бродят лоси, над хребтами летают 
                                орлы, а на равнинах пасутся косули. И знаменитые манулы — тоже обитатели Алтайского 
                                края.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parks__component">
                    <div className="component__header">
                        <h1 className="component__name">Зимний Байкал</h1>
                        <div className="site"> 
                            <p className="site__url">url</p>
                            <p className="site__name">https://vk.com/baikalmile</p>
                        </div>
                    </div>
                    <div className="component__body">
                        <img src={image4} className="component__photo"></img>
                        <div className="component__text">
                            <p className="text">
                                Всем известен Байкал как крупнейшее озеро в мире. Многие также знают, 
                                что это самый большой источник пресной воды и одно из красивейших мест в России.
                            </p>
                            <p className="text">
                                Конечно, это всё так. Но Байкал ещё идеальное место для соревнований по скийорингу. 
                                Это такой вид спорта, когда лыжник привязывает себя к мотоциклу, и тандем старается 
                                развить как можно бóльшую скорость на льду. В марте 2019 года на фестивале 
                                «Байкальская миля» был поставлен мировой рекорд — 197.011 км/ч.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="parks__component">
                    <div className="component__header">
                        <h1 className="component__name">Карелия</h1>
                        <div className="site"> 
                            <p className="site__url">url</p>
                            <p className="site__name">http://vodlozero.ru/</p>
                        </div>
                    </div>
                    <div className="component__body">
                        <img src={image5} className="component__photo"></img>
                        <div className="component__text">
                            <p className="text">
                                Сибирь заканчивается не на Урале, а в Карелии: образующая тайгу сибирская лиственница 
                                не растёт западнее Водлозера. Зато здесь она вымахивает на 30 метров — леса карельских
                                национальных парков из-за непроходимых болот никогда не знали топора. 
                                Некоторым соснам уже больше чем полтысячелетия. Прикоснитесь к живому существу, 
                                видевшему солнце раньше, чем увидал его Иван Грозный. В девственном лесу на 
                                сотню километров не встретишь тропы. А на редких тропинках деревья в паре метров 
                                от земли помечены медвежьими когтями. Чтобы все знали, кто тут хозяин.
                            </p>
                            <p className="text">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Parks;