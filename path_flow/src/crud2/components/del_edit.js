import { useState } from "react";
import Edit from "./edit";

const DelEdit = ({ post, postid, posts, setPosts, comment }) => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(comment);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    const newcontent = {
      id: Math.floor(Math.random() * 10000),
      content,
    };
    setComments([...comments, newcontent]);
    // 입력 필드 초기화
    setNewComment("");
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <label> 댓글 </label>
        <input
          name="content"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <button>add</button>
      </form>

      {comments.map((commen) => (
        <div key={commen.id} postid={postid}>
          <Edit commen={commen} comments={comments} setComments={setComments} />
        </div>
      ))}
    </>
  );
};
export default DelEdit;
