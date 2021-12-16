import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const MyPosts = (props) => {

  let postsElements = props.posts.map(posts => <Post message={posts.message} likeCounter={posts.likeCounter} />);

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


let AddNewPostForm = (props) => {
  return     <form onSubmit={props.handleSubmit}>
      <div>
        <Field name='newPostText' component='textarea'/>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      {/* <button>Remove</button> */}
    </form>
}

let AddNewPostFormRedux = reduxForm ({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;