import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId; //из параметров, которые приходят в запросе + в app.js прописали возможные параметры в роуте
    if (!userId) {
      userId = 2 
    }
  this.props.getUserProfile(userId);
}
  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} /> 
    );
  }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

let mapStateToProps = (state) => ({ profile: state.profilePage.profile })

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);