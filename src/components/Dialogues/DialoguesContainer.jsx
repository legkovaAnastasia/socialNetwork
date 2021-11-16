import s from './Dialogues.module.css';
import React from 'react';
import { sendMessageBodyCreator, updateNewMessageBodyCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
import StoreContext from '../../storeContext';

const DialoguesContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().dialoguesPage;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageBodyCreator());
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch(updateNewMessageBodyCreator(body));
                    }
                    return <Dialogues updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialoguesPage={state} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialoguesContainer;