// import logo from './logo.svg';
import './App.css'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
// import { updateNewPostText } from './redux/state';



const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />

        <Navbar />

        <div className='app-wrapper-content'>

          <Route path='/profile'> <Profile
            store={props.store} /></Route>
          <Route path='/dialogues'> <DialoguesContainer 
            store={props.store}/></Route>

        </div>
      </div>
    </Router>
  );
}

export default App;

// проверить если будут ошибки по уроку 27 Router и BrowserRoute в обрамляющем теге