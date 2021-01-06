import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import MessageItem from './MessageItem/MessageItem';


const Dialogs = (props) => {
    
    let state = props.dialogsPage;
    
    let dialogs = state.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />)
    );

    let messages = state.messagesData.map(message => (<MessageItem message={message.message} id={message.id} />)
    );

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    debugger;
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItem + " " + s.active}>
                {dialogs}
            </div>

            <div className={s.message}>
                {messages}

                <div className={s.messageArea}>
                    <textarea value={newMessageBody} 
                        onChange={onNewMessageChange} 
                        placeholder='Enter your message' ></textarea>
                    <br></br>
                    <button onClick={onSendMessageClick} >Send message</button>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;