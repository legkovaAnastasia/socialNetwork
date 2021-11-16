import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/redux-store';
import './index.css';
import App from './App';
import StoreContext from './storeContext';
import { BrowserRouter as Router, Route } from "react-router-dom";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <Router>
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </React.StrictMode>
    </Router>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
