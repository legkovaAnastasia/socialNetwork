import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
  { id: 2, message: 'Whats up?', likeCounter: '3' },
  { id: 3, message: 'Its my first post', likeCounter: '6' },
  { id: 4, message: 'Hey', likeCounter: '9' }
]

let dialogue = [
  {id: 1, name: 'Anna'},
  {id: 2, name: 'Ksenya'},
  {id: 3, name: 'Alex'},
  {id: 4, name: 'Volodya'},
  {id: 5, name: 'Rex'}
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'Yo'},
  {id: 3, message: 'Kek'},
  {id: 4, message: 'How you doing?'},
  {id: 5, message: 'Lol'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogue={dialogue} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
