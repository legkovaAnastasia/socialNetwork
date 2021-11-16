import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';
import { sendMessageBodyCreator, updateNewMessageBodyCreator } from '../../redux/dialoguesReducer';

const Dialogues = (props) => {

    let state = props.store.getState().dialoguesPage;

    let dialogueElements = state.dialogues.map(dialogue => < DialogueItem name={dialogue.name} id={dialogue.id} />);
    let messagesElements = state.messages.map(messages => < Message message={messages.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageBodyCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Add Post</button> </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogues;