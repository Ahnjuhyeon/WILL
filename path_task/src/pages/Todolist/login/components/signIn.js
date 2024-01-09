import { styled } from "styled-components";
import InputBox from "../../../../components/input";
import { flexCenter } from "../../../../styles/common.style";

const Signin = () => {
  return (
    <>
      <InputWrapper>
        <InputBox variant="secondary" size="large" placeholder="email" />
        <InputBox variant="secondary" size="large" placeholder="password" />
        <button>Sign in</button>
      </InputWrapper>
    </>
  );
};
export default Signin;
const InputWrapper = styled.div`
  border: 1px solid #97c7ff;
  width: 360px;
  height: 200px;
  ${flexCenter};
  flex-direction: column;
  /* position: relative; */
  /* margin-bottom: 16px; */
  input::placeholder {
    color: #97c7ff;
  }
`;
