import { useState } from "react";
import DelEdit from "./components/del_edit";

const Crud = () => {
  const [contentList, setContentList] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    setContentList([...contentList, content]);
    e.target.content.value = "";
  };

  return (
    <>
      <h1>게시글만들기_crud</h1>

      <form onSubmit={onSubmitForm}>
        <label>할 일 : </label>
        <input name="content" />
        <button>add</button>
      </form>
      <h4>할 일 목록</h4>
      {contentList.map((list, index) => (
        <DelEdit
          key={list}
          list={list}
          contentList={contentList}
          setContentList={setContentList}
        />
      ))}
    </>
  );
};
export default Crud;
/*
어떤 로직을 만들건지?
게시글 만들기 
할 일 :     추가
할일 목록 : 

추가
form 태그의 onsubmit을 통해 인풋값에 접근하기
버튼을 누르면 위에 접근한 인풋값이 아래 태그에 나올 수 있도록
아래태그는 위에 내용이 나올 수 있도록
맵을 돌려 set받은 배열을 보여줄 수 있게

삭제 
내가 삭제하
*/
