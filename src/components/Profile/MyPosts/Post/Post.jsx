import s from './Post.module.css';

const Post = (props) => {
  // через дебаггер пропс андефайнд
    return(
    <div className={s.post}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1MCPrHWjlDRZ8b9kE2GLOwllhPiahJKI6w&usqp=CAU' />
      { props.message }
      <div>
        <span>Likes </span>
        { props.likeCounter }
      </div>
    </div>
  );
}

export default Post;