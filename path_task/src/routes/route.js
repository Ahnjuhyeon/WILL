import { createBrowserRouter } from "react-router-dom";
import Pages from "../pages";
import TodoMainPage from "../pages/Todolist/todo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
  {
    path: "/todo",
    element: <TodoMainPage />,
  },
]);
export default router;
