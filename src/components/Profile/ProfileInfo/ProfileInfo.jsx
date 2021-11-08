
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
      <div>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU'/>
        </div>
        <div className={s.descriptionBlock}>
          avatar+description
        </div>
      </div>  
    );
}

export default ProfileInfo;