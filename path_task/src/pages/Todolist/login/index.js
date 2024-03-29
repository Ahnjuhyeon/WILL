import { useState } from "react";
import { flexCenter } from "../../../styles/common.style";
import Signin from "./components/signIn";
import Signup from "./components/signUp";
import styled from "styled-components";

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  return (
    <Wrapper>
      <h1>Welcome</h1>
      <Header>
        <div
          onClick={() => {
            setIsLoginForm(false);
          }}
        >
          signIn
        </div>
        <div
          onClick={() => {
            setIsLoginForm(true);
          }}
        >
          signUp
        </div>
      </Header>
      {isLoginForm ? <Signup setIsLoginForm={setIsLoginForm} /> : <Signin />}
    </Wrapper>
  );
};
export default LoginPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 60px;
  ${flexCenter}
  flex-direction: column;
  & > h1 {
    font-size: 40px;
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
    padding-bottom: 30px;
  }
  background-color: #fff;
`;

const Header = styled.div`
  background-color: ${({ theme }) => theme.COLORS.secondary};
  width: 360px;
  height: 48px;
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.COLORS.font};

  & > div {
    width: 50%;
    ${flexCenter}
    cursor:pointer;
    &:hover {
      background-color: ${({ theme }) => theme.COLORS.primary};
    }
  }
`;
