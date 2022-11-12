import s from './Post.module.css';
import avatar from './avatar.jpg'
const Post = (props) => {
    return (

        <div className={s.item}>
            <img src={avatar} alt='' />
            {props.message} 
            <div><span>like {props.likeCount}</span></div>
        </div>

    );
}

export default Post;