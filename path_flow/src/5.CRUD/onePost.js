import { useRef, useState } from "react";

const OnePost = ({ postid, post, posts, setPosts, comment }) => {
  console.log(postid);
  // const [isEditMode, setIsEditMode] = useState(false);
  const postRef = useRef(null);

  const onClickFix = () => {
    //   if (!isEditMode) return setIsEditMode(true);
    //   const fixPost = posts.find((el) => el.id === post.id);
    //   fixPost.content = postRef.current.value;
    //   console.log(fixPost);
    //   setPosts(posts);
    //   setIsEditMode(false);
  };

  const onClickDel = () => {
    const getPost = posts.find((el) => el.id === postid);
    const delPost = getPost.Comments.filter((el) => el.id !== comment.id);
    // console.log(getPost);

    const _delPost = {
      ...getPost,
      Comments: delPost,
    };
    // console.log(_delPost);

    const _delPosts = posts.map((el) => (el.id === postid ? _delPost : el));
    setPosts(_delPosts);
  };
  return (
    <>
      {/* <span>{post.content}</span> */}
      {post.Comments.map((comment) => (
        <p key={post.id}>{comment.content}</p>
      ))}
      <button onClick={onClickFix}>수정</button>
      <button onClick={onClickDel}>삭제</button>

      {/* {isEditMode ? (
        <textarea defaultValue={post.content} ref={postRef}></textarea>
      ) : (
        post.content
      )} */}
      {/* <button onClick={onClickFix}>수정</button> */}
      {/* <button onClick={onClickDel}>삭제</button> */}
    </>
  );
};
export default OnePost;
