import React from "react";
import './App.css'

const ToDoList = (props) =>{
    
    return (
        <>
            <div className="todo_style">
            <i className="fas fa-times-circle" 
            onClick={()=>{
                props.onSelect(props.id);
            }}>

            </i>
                <li>{props.text}</li>
            </div>
            

        </>
    );

}

export default ToDoList;