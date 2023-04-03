import { createContext, useState } from "react";

export const Context=createContext()

export default function ContextProvider({children}){
    
    const [loading,setloading]=useState(false)

    return <Context.Provider value={{loading,setloading}}>{children}</Context.Provider>
}