import React from "react";
import { useState, useEffect } from "react";
import PostCards from "./PostCards";
// function Home(){
//     const [value, setValue]=useState("starting");

//     useEffect(() => {
//       console.log("starting")
    
//     //   return () => {
//     //     console.log("Ending")
//     //   }
//     },[value])
    
//     return(
//         <div>
//             <button onClick={()=>setValue("starting")}>{value}</button>

//             <button onClick={()=>setValue("ending")}>END</button>
//         </div>
//     )
// }

const Home = () =>{
    return(
        <div>
            <PostCards></PostCards>
            <PostCards></PostCards>
            <PostCards></PostCards>
        </div>
    )
}
export default Home;