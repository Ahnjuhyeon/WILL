import { useRef, useState } from "react";

const DelEdit = ({ list, setContentList, contentList }) => {
  const copyItemRef = useRef(null);
  const [isRefModal, setIsRefModal] = useState(false);
  //수정
  const onEditBtn = () => {
    if (!isRefModal) return setIsRefModal(true);
    const copyLlst = [...contentList];
    let find = copyLlst.find((el) => el === list);
    find = copyItemRef.current.value;
    setContentList([find]);
    // 모달 상태 초기화
    setIsRefModal(false);
  };

  //삭제
  const onDeleteBtn = () => {
    const filter = contentList.filter((el) => el !== list);
    console.log(filter);
    setContentList(filter);
  };
  return (
    <div>
      {list}
      {isRefModal ? (
        <textarea defaultValue={list.list} ref={copyItemRef}></textarea>
      ) : (
        <span>{list.list}</span>
      )}
      <button onClick={onEditBtn}>edit</button>
      <button onClick={onDeleteBtn}>del</button>
    </div>
  );
};
export default DelEdit;
