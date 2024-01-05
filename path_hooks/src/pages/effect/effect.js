import { useEffect, useState } from "react";
import EffectModal from "./modal";

/*
목표: 나는 내가 원하는 시점에 effect를 일으킬 수 있는가

아래 조건을 채운 컴포넌트를 만들어보세요

1
	1-1) 특정 버튼을 누르면 <Modal/> component가 나타난다.
    상태하나 만들거야 t/f로 보여주기우해서 
	1-2) Modal 컴포넌트가 마운트(랜더, UI에 나타나다) 되었을 때 conosle.log가 출력된다. 
    Modal 이 열렸을때 콘솔이 찍힌다 =>Modal을 실행할때 useEffect에 콘솔을 넣는다 
	1-3) 특정 버튼을 한번 더 누르면 <Modal> component가 언마운트(사라진다)된다.
    리턴을 넣어서 닫기 
	1-4). 이때 console.log가 출력된다.

2
	특정 state가 변경될 때마다 해당 state를 console.log를 출력해야한다.
	

3
	state가 변경 된 직후 바로 다음에 console.log를 사용하면 state는 변경되지 않는다.
  왜 그런가? 또한 state 변경 이후의 로직을 동기적(순서대로) 실행시키려면 어떻게 해야하는가

*/
const Effect = () => {
  const [isModal, setIsModal] = useState(false);

  const onModalOpen = () => {
    setIsModal((prev) => !prev);
  };
  useEffect(() => {
    if (isModal) {
      console.log("modal is open!");
    } else {
      console.log("modal is closed!");
    }
    //종료로 닫기 언마운트
    return () => {};
  }, [isModal]);

  return (
    <>
      <h3>Effect</h3>
      <button onClick={onModalOpen}>
        {isModal ? "Modal Close!" : "Modal Open!"}
      </button>
      {isModal && <EffectModal />}
    </>
  );
};
export default Effect;
