import { RouterProvider } from "react-router-dom";
import "./App.css";

import router from "./routes/route";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.style";
import GlobalStyles from "./styles/global.style";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
