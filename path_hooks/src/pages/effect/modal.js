import { useEffect, useState } from "react";

/*
2
	특정 state가 변경될 때마다 해당 state를 console.log를 출력해야한다
3
	state가 변경 된 직후 바로 다음에 console.log를 사용하면 state는 변경되지 않는다.
  왜 그런가? 또한 state 변경 이후의 로직을 동기적(순서대로) 실행시키려면 어떻게 해야하는가
*/
const EffectModal = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("input:", input);
  }, [input]);
  return (
    <>
      <p>모달입니다모달이에요</p>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      {/* <button onClick={}></button> */}
    </>
  );
};
export default EffectModal;
