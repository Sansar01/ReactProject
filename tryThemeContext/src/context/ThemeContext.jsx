import { createContext, useState,useEffect } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeProvider = ()=>{
    
    const[themeMode,setThemeMode] = useState("light");
    
    const darkTheme = ()=>{
        setThemeMode("dark")
    }

    const lightTheme = ()=>{
        setThemeMode("light")
     }

     useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
      }, [themeMode]);

    <ThemeContext.Provider value={{themeMode,lightTheme,darkTheme}}>

    </ThemeContext.Provider>
}