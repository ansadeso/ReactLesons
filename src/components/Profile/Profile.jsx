import './Profile.module.css';
import Nature from './Nature.jpg';
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
    return(
        <div >
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