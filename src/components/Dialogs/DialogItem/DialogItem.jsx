import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const setActive = ({isActive}) => isActive ? s.active : s.item;

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;

    return (
        <div className={s.wrapperItem}>
            <img className={s.avatar} src="https://cdn-icons-png.flaticon.com/128/147/147144.png" alt="" />
            <NavLink className={setActive} to={path} >{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;