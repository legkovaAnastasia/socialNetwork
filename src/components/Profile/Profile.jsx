import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const   Profile = (props) => {
    return(
      <div>
        <ProfileInfo profile={props.profile} isOwner={props.isOwner} savePhoto={props.savePhoto} status={props.status} updateStatus={props.updateStatus} />
        <MyPostsContainer />
      </div>  
    );
}

export default Profile;