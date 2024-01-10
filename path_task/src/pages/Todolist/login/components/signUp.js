import { styled } from "styled-components";
import InputBox from "../../../../components/input";
import { flexCenter } from "../../../../styles/common.style";
import ButtonBox from "../../../../components/button";

const Signup = () => {
  return (
    <>
      <InputWrapper>
        <InputBox variant="secondary" size="large" placeholder="email" />
        <InputBox variant="secondary" size="large" placeholder="password" />
        <InputBox
          variant="secondary"
          size="large"
          placeholder="password check"
        />

        <ButtonBox variant="primary" size="large" font="small">
          Join
        </ButtonBox>
      </InputWrapper>
    </>
  );
};
export default Signup;
const InputWrapper = styled.div`
  border: 1px solid #97c7ff;
  width: 360px;
  height: 230px;
  ${flexCenter};
  flex-direction: column;
  /* position: relative; */
  /* margin-bottom: 16px; */
  input::placeholder {
    color: #97c7ff;
  }
`;