import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AppContainer} from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<BrowserRouter basename={process.env.PUBLIC_URL} ><App /></BrowserRouter>,document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
      const App = require('./App').default; // eslint-disable-line global-require
      ReactDOM.render(
          <AppContainer>
              <App />
          </AppContainer>,
          document.getElementById('root')
      );
  });
}