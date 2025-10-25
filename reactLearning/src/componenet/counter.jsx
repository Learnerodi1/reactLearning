import React,{useState} from "react";
import { use } from "react";

const Counter = ()=>{
    const styles ={
        display: "flex",
        justifyContent : "flex-start",
        marginBottom:"20px",
        gap : "30px"
    }
    let [count, countUpdate] = useState(0);
    return(
        <>
        <div style={styles}>
            <button onClick={()=> countUpdate(count-1)}>-</button>
            <h1>{count}</h1>
            <button onClick={()=>countUpdate(count+1)}>+</button>
        </div>
        <button onClick={()=>countUpdate(count =0)}>reset</button>
        </>
    )
}
export {Counter}