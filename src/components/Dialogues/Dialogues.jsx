import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router';
import AddMessageForm from './AddMessagesForm/AddMessageForm';

const Dialogues = (props) => {

    let state = props.dialoguesPage;

    let dialogueElements = state.dialogues.map(dialogue => < DialogueItem name={dialogue.name} id={dialogue.id} key={dialogue.id} />);
    let messagesElements = state.messages.map(messages => < Message message={messages.message} key={messages.id} />);
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />



    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage} />
        </div>
    );
}

export default Dialogues;