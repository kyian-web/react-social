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