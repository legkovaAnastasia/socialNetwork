import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
    return(
      <div>
        {/* <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'/>
        </div> */}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} />
          <div>{props.profile.aboutMe}</div>
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
      </div>  
    );
}

export default ProfileInfo;