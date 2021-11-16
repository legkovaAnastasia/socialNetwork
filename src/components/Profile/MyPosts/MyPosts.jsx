import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {

  let postsElements = props.posts.map( posts => <Post message={posts.message} likeCounter={posts.likeCounter} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.postsBlock}>
      <h3>posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } ref={newPostElement} value={ props.newPostText } ></textarea>
        </div>
        <div>
          <button onClick={ onAddPost }>Add Post</button>
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