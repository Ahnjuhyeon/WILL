import { styled } from "styled-components";
import InputBox from "../../../../components/input";
import { flexCenter } from "../../../../styles/common.style";
import ButtonBox from "../../../../components/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../utils/schema";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  return (
    <>
      <InputWrapper
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
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
          id={"password"}
          variant="secondary"
          size="large"
          placeholder="password"
          register={register}
          errors={errors}
        />

        <InputBox
          id={"password"}
          variant="secondary"
          size="large"
          placeholder="password check"
          register={register}
          errors={errors}
        />

        <ButtonBox variant="primary" size="large" font="small">
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
  /* position: relative; */
  /* margin-bottom: 16px; */
  input::placeholder {
    color: #97c7ff;
  }
`;
