import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea><br />
                <button>Add post</button>
            </div>
            <div className={s.postsWrapper}>
                <Post message="Hi, how are you?" likes='5' />
                <Post message="It's my first post" likes='12' />
            </div>
        </div>
    );
};

export default MyPosts;