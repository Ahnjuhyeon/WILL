/*
목표: 나는 불필요한 상태를 없애고 원하는 시점에 리랜더링을 시킬 수 있는가
"코드에서의 불필요한 상태는 무엇인지 고민하고 의견을 나눠보세요.
리랜더링 시점에서 깊게 생각해본다면 불필요한 상태가 한가지 존재합니다" 난..두가지?

자연어로 쓰기 
불필요한 상태 찾기..
 const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(first + second);
  }, [first, second]);


const [result, setResult] = useState(0); 왜쓰는지 잘 모르겠습니다
first second는 초기 값을 보여주기 위함과 새로 받는 숫자를 화면에 보여주기 위해 사용했지만
result 상태는 없어도 잘 동작 될 것 같습니다 그래서 그냥 first + second는 숫자 더한 값을 
result라는 변수명에 담아주었습니다.

useEffect는.. 여기에서 왜쓰이는지 모르겠어서 빼버렸어요 
first second의 값이 변경될 때마다 실행되는건데
코드가 복잡했다면 사용할 수 있겠는데 여기에서는 없어도 잘 동작해서 뺏..
*/
import { useState } from "react";
const State = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const sum = Number(first) + Number(second);
  console.log(sum);
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
      ={sum}
    </>
  );
};
export default State;
