import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPages from "./components/MainPages";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { StyleProvider } from "./contexts/StyledContext";
import Splash from "./UI/Splash/Splash";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: light)");
  const [isDark, setIsDark] = useLocalStorage("theme", darkPref.matches);

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
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <RouterProvider router={router} />
      </StyleProvider>
    </>
  );
}

export default App;
