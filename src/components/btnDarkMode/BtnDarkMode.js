import { useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";

import "./style.css";

import sun from "../../images/icons/sun.svg";
import moon from "../../images/icons/moon.svg";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--activ");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--activ");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };

  return (
    <button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
      <img className='dark-mode-btn__icon' src={sun} alt='Свет' />
      <img className='dark-mode-btn__icon' src={moon} alt='Тьма' />
    </button>
  );
};

export default BtnDarkMode;
