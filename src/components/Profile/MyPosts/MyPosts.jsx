import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    const postsElements = props.posts.posts.map(item => {
        return <Post message={item.post} likes={item.likesCount} />
    });

    const newPostElement = React.createRef();

    const addPost = () => {
        props.addPost();
    };

    const onPostChange = () => {
        const text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.wrapper}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /><br />
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.postsWrapper}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;