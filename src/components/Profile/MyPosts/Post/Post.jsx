import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.postWrapper}>
            <div>
                <img className={s.avatar} src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png" />
            </div>
            <div>
                <div className={s.postText}>
                    {props.message}
                </div>
                <span className={s.likes}>Like {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;