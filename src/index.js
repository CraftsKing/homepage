// https://reactjs.org/docs/javascript-environment-requirements.html
// React 16 depends on the collection types Map and Set.
// A polyfilled environment for React 16 using core-js to support older browsers
import 'core-js/es6/map';
import 'core-js/es6/set';
// use the raf package to shim requestAnimationFrame
import 'raf/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import store from './store';
import './assets/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

useStrict(true);
ReactDOM.render((<Provider {...store}>
  <HashRouter>
    <App />
  </HashRouter>
</Provider>), document.getElementById('root'));
registerServiceWorker();
