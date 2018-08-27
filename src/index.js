import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./utils/Store";

store.updateGlobalState({
  isLoggedIn: false,
  messages: [],
  message: {},
  to: "",
  subject: "",
  tokens: {
    accessToken: "",
    idToken: "",
    expiresAt: 0
  },
  users: [],
  sending: false
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
