import { GoSun, GoMoon } from "react-icons/go";

const ThemeSwitcher = ({ toggleTheme, currentTheme }) => {
  return (
    <button onClick={toggleTheme} className="btn-toggle">
      {currentTheme === "light" ? (
        <GoMoon className="moon" />
      ) : (
        <GoSun className="sun" />
      )}
    </button>
  );
};
export default ThemeSwitcher;
