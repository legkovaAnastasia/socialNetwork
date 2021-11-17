import s from './Dialogues.module.css';
import React from 'react';
import { sendMessageBodyCreator, updateNewMessageBodyCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
import { connect } from 'react-redux';

let mapStateToProps = (state) =>{
    return {
        dialoguesPage: state.dialoguesPage
    }
}    
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageBodyCreator())
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

const DialoguesContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogues);

export default DialoguesContainer;