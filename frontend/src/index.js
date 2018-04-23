import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Console from './Console';

ReactDOM.render(<Console />, document.getElementById('root'));
registerServiceWorker();
