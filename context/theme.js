import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/themes";

// remove that if you use other toggle dark mode functionality
import styled from "styled-components";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const activeTheme = theme === "light" ? lightTheme : darkTheme;

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={activeTheme}>
        {children}
        <ToggleModeButton onClick={toggleTheme}>
          <MoonIcon className="w-6 h-6" style={{ width: 16, height: 16 }} />
        </ToggleModeButton>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

const ToggleModeButton = styled.button.attrs({
  className: "fixed items-center justify-center flex bottom-4 right-4 z-20 p-2",
  // id: "toggle-dark-mode",
})`
  border-radius: 6px;
  border: 1px solid #d8dbdf;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.textPrimary};
  bottom: 24px;
  right: 20px;
  width: 24px;
  height: 24px;
  z-index: 20;
  opacity: 0.1;
  hover: {
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    // top: 20px;
  }
`;

export { ThemeProvider, ThemeContext };
