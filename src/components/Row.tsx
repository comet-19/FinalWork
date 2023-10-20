import React from "react";
import "./App.css"

function Row (props:any) {
    
    return (
        <tr>
            <td className="line1"><input type="checkbox" onChange={props.checked} checked = {props.checkbool}/></td>
            <td className="line2">{props.date}</td>
            <td className="line3">{props.content}</td>
            <td className="line4"><button onClick={props.onClick}>Delete</button></td>
        </tr>
    )
}

export default Row;