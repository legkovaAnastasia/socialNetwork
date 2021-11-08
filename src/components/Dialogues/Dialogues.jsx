import { render } from '@testing-library/react';
import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialogsItem'; 
import Message from './Message/Message';

const Dialogues = (props) => {

    let dialogueElements = props.dialogue.map( dialogue => < DialogueItem name={dialogue.name} id={dialogue.id} /> );
    let messagesElements = props.messages.map( messages => < Message message={messages.message} /> );

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                { dialogueElements }                
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogues;