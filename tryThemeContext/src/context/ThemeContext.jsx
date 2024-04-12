import { createContext, useState,useEffect } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeProvider = (props)=>{
    
    const[themeMode,setThemeMode] = useState("light");

    useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
    }, [themeMode]);


    const darkTheme = ()=>{
      setThemeMode(themeMode=="dark")
  }

  const lightTheme = ()=>{
    setThemeMode(themeMode=="light")
   }

    
    <ThemeContext.Provider value={{themeMode,setThemeMode,darkTheme,lightTheme}}>
        {props.children}
    </ThemeContext.Provider>
}