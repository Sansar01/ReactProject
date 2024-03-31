import { createContext, useState,useEffect } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeProvider = (props)=>{
    
    const[themeMode,setThemeMode] = useState("light");
    
    <ThemeContext.Provider value={{themeMode,setThemeMode}}>
        {props.children}
    </ThemeContext.Provider>
}