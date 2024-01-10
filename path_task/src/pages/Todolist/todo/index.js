import { useState } from "react";
import TodoModal from "./components/todomodal";

const TodoMainPage = () => {
  const [isModal, setIsModal] = useState(true);
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      {/* 모달 */}
      {isModal && (
        <div>
          <TodoModal
            onClose={() => setIsModal(false)}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        </div>
      )}
      <div>
        <h1>Todo List</h1>
        <div>
          {todoList.map((todo) => (
            <p>{todo}</p>
          ))}
        </div>
        <div>
          <button onClick={() => setIsModal(true)}>add</button>
        </div>
      </div>
    </>
  );
};
export default TodoMainPage;
