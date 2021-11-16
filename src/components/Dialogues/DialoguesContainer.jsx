import s from './Dialogues.module.css';
import React from 'react';
import { sendMessageBodyCreator, updateNewMessageBodyCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';

const DialoguesContainer = (props) => {

    let state = props.store.getState().dialoguesPage    ;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageBodyCreator());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<Dialogues updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialoguesPage={state} />   );
}

export default DialoguesContainer;