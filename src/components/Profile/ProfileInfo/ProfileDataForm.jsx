import {Field, reduxForm } from 'redux-form';
import { Input, Textarea } from '../../common/FormsControls/FormsControl';
import s from './ProfileInfo.module.css';
import styles from '../../common/FormsControls/FormsControl.module.css';


const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
        <div>
            <b>Full name: </b><Field component={Input} name='fullName' placeholder='Full name' validate={[]} />

        </div>
        <div>
            <b>Looking for a job: </b> <Field component={Input} type={'checkbox'} name='lookingForAJob'  validate={[]} />
        </div>
            <div>
                <b>My professional skills: </b> <Field component={Textarea} name='lookingForAJobDescription' placeholder='My professional skills' validate={[]} />
            </div>
        <div>
            <b>About me: </b> <Field component={Textarea} name='aboutMe' placeholder='About me' validate={[]} />
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: <Field component={Input} name={'contacts.' + key} placeholder={key} validate={[]} /></b>
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormReduxForm