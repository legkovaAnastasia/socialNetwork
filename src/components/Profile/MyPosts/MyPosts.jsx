import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, { PureComponent } from 'react';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControl';

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return     <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component={Textarea} validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      {/* <button>Remove</button> */}
    </form>
}

let AddNewPostFormRedux = reduxForm ({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

const MyPosts = (props) => {
  console.log('Render');

  let postsElements = props.posts.map(posts => <Post key={posts.id} message={posts.message} likeCounter={posts.likeCounter} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock}>
      <h3>posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.allPosts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;