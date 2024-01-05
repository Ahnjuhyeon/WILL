/*
목표: 나는 useState를 사용해야할 때와 사용하지 말아야할 때를 알고 있는가
      아래의 상황 중 useState와 useRef를 사용해야할 때를 나누어 생각해보세요
3. 특정 배열의 길이가 5를 충족했을 때 버튼을 누르면 다음 화면으로 넘어가는 로직이 있다. 
   그러나 배열이 추가되는 것을 사용자는 굳이 화면에 볼 필요가 없다면 어떤 훅함수를 써야할까

   음 일단은?
    버튼을 누르면이랬으니까 버튼도 만들고
    버튼을 누를때 마다 값을 저장 => state 
    길이가 5가 넘어가면 다음화면 => effect?

    버튼을 누를때 마다 값을 저장할 이벤트 함수도 만들기 
    저장된 버튼의 길이가 5가 되었을때 이벤트 일으키기 "이제그만"
이것도 .. useState와 useEffect를 사용하는게 훨씬 적절한 것 같습니다...

*/

import { useRef, useState } from "react";
import Q1 from "./q1";

const Q3 = () => {
  const [nextBtn, setNextBtn] = useState(false);
  const count = useRef(0);

  const onClickSave = () => {
    if (count.current++ === 4) {
      console.log("이제그만", count.current++);
      setNextBtn((prev) => !prev);
    }
  };

  return (
    <>
      <button onClick={onClickSave}>add</button>
      {nextBtn && <Q1 />}
    </>
  );
};
export default Q3;
