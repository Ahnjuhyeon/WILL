import { styled } from "styled-components";
import { flexAlignCenter, flexCenter } from "../../../../styles/common.style";

const TodoModal = ({ onClose, setTodoList, todoList }) => {
  const onAddTodo = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    setTodoList([...todoList, title, content]);
    e.target.title.value = "";
    e.target.content.value = "";
    onClose(alert("등록되었습니다"));
  };
  return (
    <Wrapper>
      <Form onSubmit={onAddTodo}>
        <Title>
          <h1>Do it!</h1>
          <button type="button" onClick={onClose}>
            x
          </button>
        </Title>
        <Content>
          <input placeholder="제목을 입력해주세요" name="title" />
          <textarea placeholder="할 일을 입력해주세요" name="content" />
        </Content>
        <button>add</button>
      </Form>
    </Wrapper>
  );
};
export default TodoModal;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.7); */
  z-index: 1000;
`;
const Form = styled.form`
  width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.COLORS.white};
  /* border-radius: 8px; */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 32px;
  /* border: 1px solid #97c7ff; */
`;

const Title = styled.div`
  font-size: 34px;
  color: ${({ theme }) => theme.COLORS.primary};
  font-weight: 900;
  ${flexAlignCenter};
  justify-content: space-between;
  & > h1 {
    padding-left: 38%;
  }
`;

const Content = styled.div`
  ${flexCenter};
  margin-top: 16px;
  flex-direction: column;
  input::placeholder {
    color: #97c7ff;
  }
  textarea::placeholder {
    color: #97c7ff;
  }
  & > input {
    width: 100%;
    height: 40px;
    border: none;
    border: 1px solid #97c7ff;
    outline: none;
    border-radius: 8px;
    padding: 0 16px;
    margin-bottom: 16px;
  }

  & > textarea {
    width: 100%;
    height: 200px;
    border: none;
    border: 1px solid #97c7ff;
    outline: none;
    border-radius: 8px;
    padding: 16px;
  }
`;
