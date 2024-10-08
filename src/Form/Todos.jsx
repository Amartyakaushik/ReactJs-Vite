import { useState } from "react";
import Todo from "./Todo";
const Todos = (props) => {
    return(
        // {props.todos.map(todo => (<Todo {...todo}/>))
        // }
        <>
            {/* {todos.map(todo => (
                <Todo {...todo}/>
                    ))} */}
                    {/* {todos.map((todo) => (<Todo {...todo} />
                ))} */}

                    {/* <h1>heya</h1> */}

                    {props.todos.map((todo) => (<Todo {...todo} />))}

                    {/* <Todo {...todos}/> */}

        </>
    
    )
}

export default Todos;