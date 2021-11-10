import { render } from '@testing-library/react';
import s from './Dialogues.module.css';
import DialogueItem from './DialoguesItem/DialogsItem';
import Message from './Message/Message';
import React from 'react';

const Dialogues = (props) => {

    let dialogueElements = props.state.dialogues.map(dialogue => < DialogueItem name={dialogue.name} id={dialogue.id} />);
    let messagesElements = props.state.messages.map(messages => < Message message={messages.message} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogues}>
            <div className={s.dialoguesItems}>
                {dialogueElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>


            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <button>Remove</button>

            
        </div>
    );
}

export default Dialogues;