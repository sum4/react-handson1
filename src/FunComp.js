import React from "react";
import "./App.css";
function FunComp(){
    const mystyle = {
        color : "blue",
        fontSize : "20px"
    }
    return (
        <div className="FunComp">
            <h1>This is created using Functional Component</h1>
            <p>This is done using external CSS</p>
            <p style={mystyle}>This is done using inline CSS</p>
        </div>
    )
}
export default FunComp;