import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Core(){
    return(
        <div>
            <App />
        </div>
    )
}

ReactDOM.render(<Core />, document.getElementById('root'));
