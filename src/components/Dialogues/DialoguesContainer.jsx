import s from './Dialogues.module.css';
import React from 'react';
import { sendMessageBodyCreator } from '../../redux/dialoguesReducer';
import Dialogues from './Dialogues';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialoguesPage: state.dialoguesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageBodyCreator(newMessageBody));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogues);
    //замена записи let AuthRedirectComponent = withAuthRedirect(Dialogues);

    // const DialoguesContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
    // и экспорта контейнера export default DialoguesContainer;