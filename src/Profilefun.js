import React from "react";

export default function Profilefun(p){
    const red=()=>{
        alert("hi")
    }
    const state={
        name:"pp",
        email:"pp@gg.com"
    }
    function pj(){
        alert("hi12")
    } 
    return <div>
        <h1 onClick={red}>{p.text.name}</h1>
        <h1>{p.data}</h1>
        <h1>{state.name}</h1>
        <button onClick={pj}>update</button>
    </div>
}