import { createBrowserRouter } from "react-router-dom";
import Pages from "../pages";
import Signin from "../pages/Todolist/login/components/signIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pages />,
  },
  // {
  //   path: "/sign-in",
  //   element: <Signin />,
  // },
]);
export default router;
