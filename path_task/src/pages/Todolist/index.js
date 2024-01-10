import LoginPage from "./login";
import TodoMainPage from "./todo";

const TodoPage = () => {
  return (
    <>
      {/* <LoginPage /> */}
      <TodoMainPage />
    </>
  );
};
export default TodoPage;
/*
(1) ** 가장 먼저 재사용 및 상태 최적화를 고려하여 폴더 구조를 고민하기 **
  - 기존에 있던 수업자료는 다양한 학습 과정을 담기 위해 폴더 구조를 과장했어요!
  - 정말 필요에 따라 나누어 폴더 구조를 먼저 생각 해봐야해요 :)
  내가 어떤 todolist를 만들지
  - 회원가입페이지 
    로그인페이지
    회원가입페이지 
  - todo페이지 
    모달페이지(할일등록)
    리스트페이지

  - utils 페이지 
    스키마
  - components페이지 
   버튼, 인풋등 
  - 스타일 페이지 
    글로벌, 테마, 스타일


(2) ** RHF와 yup을 활용하여 회원가입, 로그인을 구현해야해요 **
	- email을 email 양식을 보여줘야해요!
  - password는 특수문자가 반드시 포함되어야해요!
  - 에러 메세지를 반드시 실시간으로 표시해줘야해요!
  - 유효성 검사가 되지 않았다면 버튼이 disabled 되어야해요!

(3) ** react-query를 활용하여 캐싱 되어있는 것을 꼭 확인해야해요! **
	- staleTime 값을 0이었을 때, 아니었을 떄를 설정해서 캐싱이 뭔지 확인해야해요!
  - todo가 추가되었을 때 캐싱되어 데이터가 재호출되지 않는 것을 경험 해야하고 해소해야해요! 

(4) ** todo의 완료 상태를 바꿨을 때는 반드시 낙관적 업데이트(optimistic-update)를 해봐요 **
(5) ** access_token, refresh_token을 이용해서 인증 로직을 구현해야해요 **
*/
