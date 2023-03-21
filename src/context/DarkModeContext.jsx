import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const userDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches);
    setIsDark(userDark);
    upDateDarkMode(userDark);
  }, []);
  const toggleDark = () => {
    setIsDark(!isDark);
    upDateDarkMode(!isDark);
  };
  return (
    <DarkModeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

//필요한곳에서 좀더 깔끔하게 쓰도록 useContext사용
export const useDarkMode = () => useContext(DarkModeContext);

const upDateDarkMode = (isDark) => {
  console.log(document.documentElement);
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};
