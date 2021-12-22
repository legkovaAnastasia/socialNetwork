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
import LoginPage from './components/Login/login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../src/redux/appReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './components/common/preloader/preloader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './redux/redux-store';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
   }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <HeaderContainer />

        <Navbar />

        <div className='app-wrapper-content'>

          <Route path='/profile/:userId?'> <ProfileContainer /></Route> 
          <Route path='/dialogues'> <DialoguesContainer /></Route>
          <Route path='/users'> <UsersContainer /> </Route>
          <Route path='/login'> <LoginPage /> </Route>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose (withRouter, connect (mapStateToProps, {initializeApp})) (App);
// проверить если будут ошибки по уроку 27 Router и BrowserRoute в обрамляющем теге