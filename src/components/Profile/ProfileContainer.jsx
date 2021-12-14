import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router';
import { withAuhtRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
let mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile});

export default compose (connect(mapStateToProps, {getUserProfile}),
  withRouter,
  // withAuhtRedirect
  )
  (ProfileContainer)
  // замена записи 

// let AuthRedirectComponent = withAuhtRedirect(ProfileContainer);
  
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);