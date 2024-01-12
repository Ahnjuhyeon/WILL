import { styled } from "styled-components";
import InputBox from "../../../../components/input";
import { flexCenter } from "../../../../styles/common.style";
import ButtonBox from "../../../../components/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../utils/schema";
import { useAuth } from "../../../../provider/auth-provider";

const Signup = () => {
  const { SignUp } = useAuth();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const { email, pw } = getValues();
  const inform = {
    email,
    pw,
  };

  const onSubmitSignUp = async () => {
    //e.preventDefault();
    try {
      const res = await SignUp(inform);
      //어떻게 로그인으로 보낼까?
      console.log(res);
      alert("축하");
    } catch (err) {
      alert(err.res.data.error);
    }
  };

  return (
    <>
      <InputWrapper
        // onSubmit={handleSubmit((data) => {
        //   console.log(data);
        // })}
        onSubmit={handleSubmit(onSubmitSignUp)}
      >
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

        <InputBox
          id={"pwconfirm"}
          variant="secondary"
          size="large"
          placeholder="password check"
          register={register}
          errors={errors}
        />

        <ButtonBox
          variant="primary"
          size="large"
          font="small"
          disabled={!isValid}
        >
          Join
        </ButtonBox>
      </InputWrapper>
    </>
  );
};
export default Signup;
const InputWrapper = styled.form`
  border: 1px solid #97c7ff;
  width: 360px;
  height: 230px;
  ${flexCenter};
  flex-direction: column;
  input::placeholder {
    color: #97c7ff;
  }
`;
//그... 아이디 확인 같은지 그거 해야한다
