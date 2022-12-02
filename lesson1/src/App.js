import React from "react";
import "./App.css";
import Bpp from './components/Bpp/Bpp';
import TodoList from "./components/Todolist";

function App() {
  const todos = [{
    id:1,
    title: "support for priorities",
    assignedTo: "Jonas"
  },
  {
    id:2,
    title: "fix bug with 'tod' not being recognized",
    assignedTo: "Ona"
  },
  {
    id:3,
    title: "Watch Pluralsight course on Docker",
    assignedTo: "Petras"
  }
   ]

  return (
<div className="App">
  <TodoList todos={todos}/>
  <Bpp/>
</div>   


);
}

export default App;
