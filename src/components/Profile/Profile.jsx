import './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
const Profile = (props) => {
    return(
        <div >
            <ProfileInfo />
            <MyPosts posts={props.posts} />

        </div>
    );
}

export default Profile;