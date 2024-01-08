import { useState, useRef } from "react";

const Edit = ({ commen, setComments, comments }) => {
  //수정부분쓰일거
  const [isRefModal, setIsRefModal] = useState(false);
  const copyItemRef = useRef(null);

  //edit
  const onEditBtn = (commenid) => {
    if (!isRefModal) return setIsRefModal(true);
    const commentscopy = [...comments];
    let find = commentscopy.find((el) => el.id === commenid);
    console.log([find]);
    find.content = copyItemRef.current.value;
    // console.log([find]);
    setComments(commentscopy, [find]);
    setIsRefModal(false);
  };

  //delete
  const onDeleteBtn = (commentId) => {
    const filter = comments.filter((el) => el.id !== commentId);
    setComments(filter);
  };
  return (
    <div>
      {isRefModal ? (
        <textarea defaultValue={commen.content} ref={copyItemRef}></textarea>
      ) : (
        <span>{commen.content}</span>
      )}
      <button
        onClick={() => {
          onEditBtn(commen.id);
        }}
      >
        edit
      </button>
      <button onClick={() => onDeleteBtn(commen.id)}>del</button>
    </div>
  );
};
export default Edit;
