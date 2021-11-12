import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  // let posts = [
  //   { id: 1, message: 'Hi, how you doing?', likeCounter: '3' },
  //   { id: 2, message: 'Whats up?', likeCounter: '3' },
  //   { id: 3, message: 'Its my first post', likeCounter: '6' },
  //   { id: 4, message: 'Hey', likeCounter: '9' }
  // ]


  // let postsElements = props.posts.map( posts => <Post message={posts.message} likeCounter={posts.likeCounter} />);
  let postsElements = props.posts.map( posts => <Post message={posts.message} likeCounter={posts.likeCounter} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action); 
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