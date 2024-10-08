import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import UseStateExm from "./State/useStateExamples";
// Todo list application
import Todos from "./Form/Todos";
import TodoForm from "./Form/TodoForm";

function App() {
  // const [count, setCount] = useState(0)

  const [users, setUsers] = useState([
    { id: 1, fName: "Amartya", lName: "Kaushik", age: 20 },
    { id: 2, fName: "Charchil", lName: "Raj", age: 21 },
    { id: 3, fName: "Himanshu", lName: "choudhary", age: 22 },
  ]);

  const increaseAge = (id) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  };

  const decreaseAge = (id) => {
    // setUsers((prevState) => prevState.filter(user => user.id !== id));

    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age - 1 };
        } else {
          return user;
        }
      });
    });
  };

  const deleteUser = (id) => {
    setUsers((prevState) => {
      return prevState.filter((user) => {
        return user.id !== id;
      });

      // return prevState.filter(user => user.id !== id);
    });
  };

  // #####################   08-oct
  const [todos, setTodos] = useState([
    { id: 1, title: "Buy milk", completed: false },
    { id: 1, title: "Buy chocolate", completed: true },
    { id: 1, title: "Buy cherry", completed: true },
  ]);

  const addTodo = (newTodo) =>{
    setTodos((prevState) => [...prevState, newTodo]);
  }
  return (
    <>
      {/* <Todos todos = {todos} /> */}
      <TodoForm  addTodo={addTodo} />
      <Todos todos={todos} />
      {/* <UseStateExm users = {users} increaseThisAge = {increaseAge} decreaseThisAge = {decreaseAge} deleteThisUser = {deleteUser} /> */}
    </>
  );

  // <>
  //   <div>
  //     <a href="https://vitejs.dev" target="_blank">
  //       <img src={viteLogo} className="logo" alt="Vite logo" />
  //     </a>
  //     <a href="https://react.dev" target="_blank">
  //       <img src={reactLogo} className="logo react" alt="React logo" />
  //     </a>
  //   </div>
  //   <h1>Vite + React</h1>
  //   <div className="card">
  //     <button onClick={() => setCount((count) => count + 1)}>
  //       count is {count}
  //     </button>
  //     <p>
  //       Edit <code>src/App.jsx</code> and save to test HMR
  //     </p>
  //   </div>
  //   <p className="read-the-docs">
  //     Click on the Vite and React logos to learn more
  //   </p>
  // </>
}

export default App;
