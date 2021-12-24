// import logo from './logo.svg';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import { Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
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
import { Suspense } from 'react';
const DialoguesContainer = React.lazy(() => import('./components/Dialogues/DialoguesContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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

        <Suspense fallback={<div>Loading...</div>}><Route path='/profile/:userId?'> <ProfileContainer /> </Route> 
          <Route path='/dialogues'><DialoguesContainer /> </Route></Suspense>
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

let AppContainer = compose (withRouter, connect (mapStateToProps, {initializeApp})) (App);

const SocialJSApp = (props) => {
  return     <Router>
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
  </Router>
}

export default SocialJSApp;