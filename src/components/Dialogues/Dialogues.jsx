import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';
import { sendMessageBodyCreator, updateNewMessageBodyCreator } from '../../redux/dialoguesReducer';

const Dialogues = (props) => {

    let state = props.dialoguesPage;

    let dialogueElements = state.dialogues.map(dialogue => < DialogueItem name={dialogue.name} id={dialogue.id} key={dialogue.id} />);
    let messagesElements = state.messages.map(messages => < Message message={messages.message} key={messages.id} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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