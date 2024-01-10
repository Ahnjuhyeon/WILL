import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("이메일을 작성해주세요")
    .matches(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
      "이메일 형식이 아닙니다"
    ),
  password: yup
    .string()
    .required("비밀번호는 필수 입력입니다.")
    .matches(
      // /(?=.*?[a-z])(?=.*?[A-Z])/,
      /(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])/,
      "비밀번호는 대소문자 특수문자가 포함되어야 합니다."
    )
    .min(8, "비밀번호는 8자리 이상입니다"),
});
