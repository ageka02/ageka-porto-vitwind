import { createContext } from "react";

const StyleContext = createContext({
      isDark: "light",
      changeTheme: "",
});

export default StyleContext;