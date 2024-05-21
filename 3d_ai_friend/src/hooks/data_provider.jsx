import { useState } from "react";
import DataContext from "./data_context";

const UseDataProvider=({children})=>{
    const [resData,setResData]=useState(null)

    return(
        <DataContext.Provider value={{ resData,setResData }}>
            {children}
        </DataContext.Provider>
    )
}

export default UseDataProvider;
