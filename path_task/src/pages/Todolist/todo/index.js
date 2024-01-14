import { useState } from "react";
import TodoModal from "./components/todomodal";
import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../styles/common.style";
import TodoContent from "./components/todocontent";

const TodoMainPage = () => {
  const [isModal, setIsModal] = useState(false);
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
      <Wrapper>
        <Container>
          <h1>Todo List</h1>
          <Content>
            {todoList.map((todo) => (
              <TodoContent todo={todo} />
            ))}
          </Content>
          <div>
            <button onClick={() => setIsModal(true)}>add</button>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};
export default TodoMainPage;
const Wrapper = styled.div`
  height: 100vh;
  ${flexCenter};
`;

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.white};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  & > h1 {
    background-color: ${({ theme }) => theme.COLORS.primary};
    color: ${({ theme }) => theme.COLORS.white};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    padding-left: 41%;
    height: 32px;
    ${flexAlignCenter};
  }
`;
const Content = styled.div`
  width: 100%;
  height: calc(100% - 32px);
  padding-bottom: 64px;
  overflow: scroll;
  background-color: aliceblue;
  ::-webkit-scrollbar {
    display: none;
  }
`;
