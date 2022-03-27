import { NavLink } from 'react-router-dom';
import s from './FriendItem.module.css';

const setActive = ({isActive}) => isActive ? s.active : s.item;

const FriendItem = (props) => {
    const path = `/friend/${props.id}`;

    return (
        <div>
            <NavLink className={setActive} to={path}>
                <img className={s.avatar} src="https://b.thumbs.redditmedia.com/LnaxEipUh0iLGrT3fJMvGMpHvepjloyS8JNNIqjSUKA.png" alt="" />
                <div className={s.friendName}>{props.name}</div>
            </NavLink>            
        </div>
    );
};

export default FriendItem;