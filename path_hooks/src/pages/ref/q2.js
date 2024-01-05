/*
목표: 나는 useState를 사용해야할 때와 사용하지 말아야할 때를 알고 있는가
      아래의 상황 중 useState와 useRef를 사용해야할 때를 나누어 생각해보세요

2. 계산기를 구현하고자 한다. 계산기 구현 시 다음 연산을 진행할 때 현재까지의 연산 결과가
   UI에 나와야한다. 결과 값은 어떤 훅함수에 담아두어야 하는가

	 ex) 5 + 5 = 10 (UI에 보여야함)
       10 + 3 = 13 (다음 연산)

       내가 하고싶은거 
       인풋 두개 있고 값을 받으면 연산된 결과값이 
       아래로 찍힐 수 있도록  =>map

       1. 일단 인풋에서 사용할 상태 만들어주기 2개
       2. 버튼 클릭할 때에 일어날 이벤트 함수 만들기
       3. 맵도 돌려서 연산했던 결과 보여주고 싶은데 

이것도 충분히 state로 어렵지 않게 구현이 되는데.. 이... 전 이렇게 푸는게 잘 이해됐습니다만..별론가요
*/
import { useState } from "react";

const Q2 = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [result, setResult] = useState([]);

  const onSumBtn = () => {
    const sum = Number(first) + Number(second);
    const sumResult = `${first} + ${second} = ${sum}`;
    setResult([...result, sumResult]);
    setFirst("");
    setSecond("");
  };

  return (
    <>
      <input
        type="number"
        value={first}
        onChange={(e) => setFirst(e.target.value)}
      />
      +
      <input
        type="number"
        value={second}
        onChange={(e) => setSecond(e.target.value)}
      />
      <button onClick={onSumBtn}>더하기</button>
      <div>
        {result.map((res, index) => (
          <p key={index}>{res}</p>
        ))}
      </div>
    </>
  );
};
export default Q2;
