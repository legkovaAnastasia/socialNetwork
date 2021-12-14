import s from './Dialogues.module.css';
import React from 'react';
import { sendMessageBodyCreator, updateNewMessageBodyCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
import { connect } from 'react-redux';
import { withAuhtRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageBodyCreator())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuhtRedirect)(Dialogues);
    //замена записи let AuthRedirectComponent = withAuhtRedirect(Dialogues);

    // const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
    // и экспорта контейнера export default DialoguesContainer;