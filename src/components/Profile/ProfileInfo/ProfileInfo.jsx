import s from './ProfileInfo.module.css'
import Nature from './Nature.jpg';

const ProfileInfo = () => {
    return(
        <div >
          
            <div>
                <img src={Nature} alt='' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
           

        </div>
    );
}

export default ProfileInfo;