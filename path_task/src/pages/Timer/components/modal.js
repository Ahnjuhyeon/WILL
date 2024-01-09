import { useEffect, useRef, useState } from "react";

const TimerModal = ({ isTimerView }) => {
  const [count, setcount] = useState(0);
  const countRef = useRef(null);
  //alret
  useEffect(() => {
    if (isTimerView) {
      alert("Tada!");
    }
    return () => {
      alert("Okay, Bye...");
    };
  }, [isTimerView]);
  const onStartBtn = () => {
    countRef.current = setInterval(() => setcount((num) => num + 1), 1000);
  };
  const onStopBtn = () => {
    clearInterval(countRef.current);
  };
  const onResetBtn = () => {
    clearInterval(countRef.current);
    setcount(0);
  };
  const onAddBtn = () => {
    setcount(count + 10);
    console.log(`증가되었습니다, ${count + 10}`);
  };

  return (
    <div>
      <p>현재 초 :{count}</p>
      <button onClick={onStartBtn}>start</button>
      <button onClick={onStopBtn}>stop</button>
      <button onClick={onResetBtn}>reset</button>
      <button onClick={onAddBtn}>+10s</button>
    </div>
  );
};
export default TimerModal;
