import s from './Profile.module.css';
import Nature from './Nature.jpg';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src={Nature} alt='' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />

        </div>
    );
}

export default Profile;