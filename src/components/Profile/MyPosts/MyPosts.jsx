import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.posts.posts.map(item => {
        return <Post message={item.post} likes={item.likesCount} />
    });

    return (
        <div className={s.wrapper}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea><br />
                <button>Add post</button>
            </div>
            <div className={s.postsWrapper}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;