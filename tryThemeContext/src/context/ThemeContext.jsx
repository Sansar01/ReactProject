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
      // document.getElementById("card").classList.remove("light","dark")
      // document.getElementById("card").classList.add(themeMode); 
      
      /**may be implemented later on */
    }, [themeMode]);


    const darkTheme = ()=>{
      setThemeMode((themeMode)=>themeMode="dark")
      //setThemeMode("dark")
  }

  const lightTheme = ()=>{
    setThemeMode((themeMode)=>themeMode="light")
    //setThemeMode("light");
   }

    return(
      <ThemeContext.Provider value={{themeMode,setThemeMode,darkTheme,lightTheme}}>
      {props.children}
  </ThemeContext.Provider>
    )
}