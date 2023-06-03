import React, {Component} from "react";
import "./App.css";
class ClassComp extends Component{
    render(){
        const mystyle = {
            color : "blue",
            fontSize : "20px"
        }
        return (
            <div className="ClassComp">
                <h1>This is created using class Component</h1>
                <p>This is done using external CSS</p>
                <p style={mystyle}>This is done using internal CSS</p>
            </div>
        )
    }
}
export default ClassComp;