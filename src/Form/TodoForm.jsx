import React,{useState} from "react";
function TodoForm(props){
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim().length == 0){
            alert("Please fill some input first");
            return;
        }
        const newTodo = {
            title:title,completed : false
        }
        props.addTodo(newTodo);
        setTitle("");
    }

    const [title, setTitle] = useState("");
    return(
        <>
        <h2>Todo List applicaiton</h2>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" value={props.title} />
                <button type="submit"></button> */}
                <input type="text" value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default TodoForm;