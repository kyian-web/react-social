import FriendItem from "./FriendItem/FriendItem";
import s from './Friends.module.css';

const Friends = (props) => {
    const friendElement = props.friends.friends.map(item => {
        return <FriendItem name={item.name} id={item.id} />
    });

    return (
        <div>
            <div className={s.subtitle}>Friends</div>
            <div className={s.wrapper}>
                {friendElement}
            </div>
        </div>
    );
};

export default Friends;