import React, {useState} from "react";
import useDarkSide from '../hook/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState( colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkSide(checked)
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <DarkModeSwitch checked={darkSide}
        onChange={toggleDarkMode}
        size={56} />
        <h3 className="text-gray-800" dark:text-gray-300 pt-4>{colorTheme === 'light' ? "Dark Mode" : "Light Mode"} </h3>
      </div>
    </>

  )
}




export default Switcher