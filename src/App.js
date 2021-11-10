// import logo from './logo.svg';
import './App.css'
import Dialogues from './components/Dialogues/Dialogues';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter as Router, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />

        <Navbar />

        <div className='app-wrapper-content'>
          
          <Route  path='/profile'> <Profile state={props.state.profilePage} /></Route>
          {/* <Route  path='/dialogues'> <Dialogues messages={props.messages} dialogue={props.dialogue} /></Route> */}
          <Route  path='/dialogues'> <Dialogues state={props.state.dialoguesPage} /></Route>

        </div>
      </div>
    </Router>
  );
}

export default App;

// проверить если будут ошибки по уроку 27 Router и BrowserRoute в обрамляющем теге