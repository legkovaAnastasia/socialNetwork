import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import {getUserProfile} from '../../redux/profileReducer'
import { Redirect, withRouter } from 'react-router';
import { compose } from 'redux';
import { getStatus, updateStatus } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId; //из параметров, которые приходят в запросе + в app.js прописали возможные параметры в роуте
    if (!userId) {
      userId =  this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
}
  render() {
    return(
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} /> 
    );
  }
}
let mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});

export default compose (connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuhtRedirect
  )
  (ProfileContainer)
  // замена записи 

// let AuthRedirectComponent = withAuhtRedirect(ProfileContainer);
  
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);