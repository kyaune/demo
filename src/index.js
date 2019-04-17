import './normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Description from './components/Description';
import Gallery from './components/Gallery';
import Parks from './components/Parks';
import * as serviceWorker from './serviceWorker';

class App extends React.Component { 
    render() {
        return (
            <div className="content">
                <Header />
                <Description />
                <Gallery />
                <Parks />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
