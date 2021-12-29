import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../assets/img/user.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onUserPhotoChange = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData)
    .then( 
      () => {
        setEditMode(false);
    })
  }

  return (
    <div>
      {/* <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'/>
        </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.userPhoto} />
        {props.isOwner && <input type={'file'} onChange={onUserPhotoChange} />}
        {editMode
          ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>Full name: </b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills: </b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me: </b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
        return <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contacts = ({ contactTitle, contactValue }) => {
  return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;