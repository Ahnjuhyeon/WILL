import { useSearchParams } from "react-router-dom";
import TimerPage from "./Timer";
import TodoPage from "./Todolist";

const pageArr = ["timer", "todo"];
const Pages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  return (
    <>
      {page === "timer" && <TimerPage />}
      {page === "todo" && <TodoPage />}
      {pageArr.includes(page) ? null : (
        <div>
          {pageArr.map((el) => (
            <button
              key={el}
              onClick={() => {
                setSearchParams({ page: el });
              }}
            >
              {el}
            </button>
          ))}
        </div>
      )}
    </>
  );
};
export default Pages;
