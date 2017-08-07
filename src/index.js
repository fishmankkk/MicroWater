import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RouterIndex from './routes/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterIndex />, document.getElementById('root'));
registerServiceWorker();
