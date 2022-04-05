import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';

const Dialogs = (props) => {
    const dialogsElements = props.data.dialogs.map(item => {
        return <DialogItem name={item.name} id={item.id} />
    });

    const messagesElements = props.data.messages.map(item => {
        return <MessageItem message={item.message} />
    });

    const messageElement = React.createRef();

    const sendMessage = () => {
        const text = messageElement.current.value;
        alert(text);
    };

    return (
        <div className={s.wrapper}>
            <div>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                {messagesElements}
            </div>
            <div className={s.textBlock}>
                <textarea ref={messageElement}></textarea><br />
                <button onClick={sendMessage}>Submit</button>
            </div>

        </div>
    );
};

export default Dialogs;