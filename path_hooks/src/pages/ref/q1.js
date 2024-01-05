/*
목표: 나는 useState를 사용해야할 때와 사용하지 말아야할 때를 알고 있는가
      아래의 상황 중 useState와 useRef를 사용해야할 때를 나누어 생각해보세요

1. HTMl 테이블 태그에서 재료를 추가하면 테이블 UI에 ROW가 하나 추가되는 형태로 변화가
   일어난다. 이때 재료를 담고 있는 값은 어떤 훅함수를 사용해야하는가

   내가 하고싶은것 
   인풋에서 재료명을 적고 추가를 하면 
   아래 div창에 목록이 추가 되면 좋겠어 

   1. 인풋창과 버튼을 만들고 밑에는 맵을 돌릴거야 
   2. 일단은 인풋에서 사용할 상태를 만들자 = 1state
   3. 맵을 사용할 상태를 하나 더 만들자 배열로 = 2state
이 문제는 간단한 state만 사용해도 충분이 가능하기 때문에 
useRef 보다는 useState가 좋을 것 같습니다.
*/
import { useState } from "react";

const Q1 = () => {
  const [inputValue, setInputValue] = useState("");
  const [itemList, setItemList] = useState([]);

  //item 추가버튼
  const onAddItem = () => {
    setItemList([...itemList, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <h1>재료입력</h1>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onAddItem}>add</button>
      <div>
        {itemList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </>
  );
};
export default Q1;
