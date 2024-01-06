import { useState } from "react";

const DelEdit = ({ post, postid, comment, posts, setPost }) => {
  const [newComment, setNewComment] = useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    // const content = e.target.content.value;

    // 기존 comments와 새로운 comment를 합친 새로운 comments 배열을 만듭니다.
    const updatedComments = [...post.Comments, { content: newComment }];
    console.log(updatedComments);
    // 기존 post를 복사하여 comments를 업데이트한 후, setPost로 업데이트합니다.
    setPost((prevPosts) =>
      prevPosts.map((prevPost) =>
        prevPost.id === postid
          ? { ...prevPost, Comments: updatedComments }
          : prevPost
      )
    );
    // 입력 필드 초기화
    setNewComment("");
  };

  return (
    <>
      <p>Comment부분</p>

      <form onSubmit={onSubmitForm}>
        <label> Comment 추가: </label>
        <input
          name="content"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <button>add</button>
      </form>
      {post.Comments.map((comment) => (
        <div key={post.id}>
          <p>
            {comment.content}

            <button>edit</button>
            <button>del</button>
          </p>
        </div>
      ))}
    </>
  );
};
export default DelEdit;
