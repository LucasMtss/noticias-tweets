import React, { createContext, useState, useContext } from "react";

interface ThemeProps {
  theme: "light" | "dark";
  changeTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const Theme = createContext<ThemeProps>({} as ThemeProps);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  function changeTheme() {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <Theme.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </Theme.Provider>
  );
};

export function useTheme(): ThemeProps {
  const context = useContext(Theme);

  if (!context) {
    throw new Error(
      "useTheme must be used within an CaptarProjetoFornecedorProvider"
    );
  }

  return context;
}
