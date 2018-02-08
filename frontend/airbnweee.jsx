import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }

  Modal.setAppElement(rootEl);
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, rootEl);
});
