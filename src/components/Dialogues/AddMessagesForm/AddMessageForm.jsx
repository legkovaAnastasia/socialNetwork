import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControl';

const maxLength150 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required, maxLength150]} />
        </div>
        <div><button>Add Post</button> </div>
    </form>
    )
}

export default reduxForm({form: "dialogueAddMessageForm"}) (AddMessageForm)