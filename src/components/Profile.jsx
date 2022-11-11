import Nature from './Nature.jpg';
const Profile = () => {
    return(
        <div className='content'>
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
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;