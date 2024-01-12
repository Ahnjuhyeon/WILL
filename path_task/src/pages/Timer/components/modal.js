import { useEffect, useRef, useState } from "react";

const TimerModal = ({ isTimerView }) => {
  const [count, setcount] = useState(0);
  const [disabled, setDisabled] = useState(false);
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
    setDisabled(true);
  };
  const onStopBtn = () => {
    clearInterval(countRef.current);
    setDisabled(false);
  };
  const onResetBtn = () => {
    clearInterval(countRef.current);
    setcount(0);
  };
  const onAddBtn = () => {
    setcount(count + 10);
    console.log(`증가되었습니다, ${count + 10}`);
  };
  const mapObject = [
    {
      onClick: onStartBtn,
      content: "start",
      start: true,
    },
    {
      onClick: onStopBtn,
      content: "stop",
    },
    {
      onClick: onResetBtn,
      content: "reset",
    },
    {
      onClick: onAddBtn,
      content: "+10s",
    },
  ];

  return (
    <div>
      <p>현재 초 :{count}</p>
      {mapObject.map((el) =>
        el.start ? (
          <button onClick={el.onClick} disabled={disabled}>
            {el.content}
          </button>
        ) : (
          <button onClick={el.onClick}>{el.content}</button>
        )
      )}
    </div>
  );
};
export default TimerModal;
