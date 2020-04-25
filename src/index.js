import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { STORY_ARCHIVE } from './constants/actionTypes'
import storyReducer from './reducers/story';

ReactDOM.render(
  <React.StrictMode>
    <App 
      stories={store.getState().storyState}
      onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


if (module.hot) {
  module.hot.accept()
}
