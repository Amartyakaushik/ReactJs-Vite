// import Reac,{ useState } from "react";
import "../App.css";
const Todo = (props) => {
    return(
        <>
        <div className="todo-main">
            <p>Title: {props.title}</p>
            <p>Completed: {props.completed ? "yes" : "No"} </p>
            </div>
        </>
    )
}
export default Todo;