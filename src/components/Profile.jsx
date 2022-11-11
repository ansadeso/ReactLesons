import s from './Profile.module.css';
import Nature from './Nature.jpg';
const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src={Nature} alt='' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New Posts
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className='item'>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;