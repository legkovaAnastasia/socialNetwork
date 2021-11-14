import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';


const MyPosts = (props) => {

  let postsElements = props.posts.map( posts => <Post message={posts.message} likeCounter={posts.likeCounter} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text)); 
  };

  return (
    <div className={s.postsBlock}>
      <h3>posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={ props.newPostText } ></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add Post</button>
        </div>
        <button>Remove</button>
      </div>
      <div className={s.allPosts}>
        { postsElements }
      </div>
    </div>
  );
}

export default MyPosts;