import './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
const Profile = () => {
    return(
        <div >
            <ProfileInfo />
            <MyPosts />

        </div>
    );
}

export default Profile;