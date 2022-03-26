import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const setActive = ({isActive}) => isActive ? s.active : s.item;

const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;

    return (
        <div>
            <NavLink className={setActive} to={path} >{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

const Dialogs = (props) => {

    const dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ];

    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Very well'},
        {id: 4, message: 'Very well'}
    ];

    const dialogsElements = dialogs.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    });

    const messagesElements = messages.map(item => {
        return <Message message={item.message} />
    });

    return (
        <div className={s.wrapper}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;