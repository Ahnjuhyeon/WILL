import { createBrowserRouter } from "react-router-dom";
import Pages from "../pages";
import TodoMainPage from "../pages/Todolist/todo";
import Layout from "../components/layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/todo",
        element: <TodoMainPage />,
      },
    ],
  },
]);
export default router;
