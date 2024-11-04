import { useState } from "react";
import "./index.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Counter from "./components/Counter";

function App() {
  // Initialize counter state with useState, default to 0
  const [counter, setCounter] = useState(0);

  // Initialize theme state with useState, default to 'light'
  const [theme, setTheme] = useState("light");

  // Function to toggle theme between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app-container ${theme}`}>
      <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={theme} />
      <Counter counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
