import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';
import { Redirect } from 'react-router';
import { reduxForm, Field } from 'redux-form';

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
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}

const AddMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component='textarea' name='newMessageBody' placeholder='Enter your message' />
        </div>
        <div><button>Add Post</button> </div>
    </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogueAddMessageForm"}) (AddMessageForm)

export default Dialogues;