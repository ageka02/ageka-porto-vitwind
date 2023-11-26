import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPages from "./components/MainPages";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Splash from "./UI/Splash/Splash";
import {themes} from "./theme"
import StyleContext from "./contexts/StyledContext";

function App() {
  const [isDark, setIsDark] = useLocalStorage("theme", "light");
  
  const changeTheme = () => {
    setIsDark(!isDark);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      // element:
      children: [
        { index: true, element: <Splash /> },
        {
          path: "main",
          element: <MainPages />,
        },
      ],
    },
  ]);

  return (
    <>
    <StyleContext.Provider value={{ isDark: themes[isDark], changeTheme: changeTheme }} >
        <RouterProvider router={router} />
    </StyleContext.Provider>
    </>
  );
}

export default App;
