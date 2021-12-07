// import logo from './logo.svg';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialoguesContainer from './components/Dialogues/DialoguesContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />

        <Navbar />

        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?'> <ProfileContainer /></Route>
          <Route path='/dialogues'> <DialoguesContainer /></Route>
          <Route path='/users'> <UsersContainer /> </Route>

        </div>
      </div>
  );
}

export default App;

// проверить если будут ошибки по уроку 27 Router и BrowserRoute в обрамляющем теге