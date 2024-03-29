import { styled } from "styled-components";
import InputBox from "../../../../components/input";
import { flexCenter } from "../../../../styles/common.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema2 } from "../../../../utils/schema";
import ButtonBox from "../../../../components/button";
import { useAuth } from "../../../../provider/auth-provider";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { SignIn } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema2) });
  const { email, pw } = getValues();
  const inform = {
    email,
    pw,
  };
  //signIn
  const onSubmitSignIn = async () => {
    console.log(inform);
    try {
      const res = await SignIn(inform);
      alert("로그인이 완료되었습니다.");
      navigate("/todo");
    } catch (err) {
      alert(err.res);
    }
  };

  return (
    <>
      <InputWrapper onSubmit={handleSubmit(onSubmitSignIn)}>
        <InputBox
          id={"email"}
          variant="secondary"
          size="large"
          placeholder="email"
          register={register}
          errors={errors}
        />
        <InputBox
          id={"pw"}
          variant="secondary"
          size="large"
          placeholder="password"
          register={register}
          errors={errors}
        />

        <ButtonBox
          variant="primary"
          size="large"
          font="small"
          disabled={!isValid}
        >
          Login
        </ButtonBox>
      </InputWrapper>
    </>
  );
};
export default Signin;
const InputWrapper = styled.form`
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
