import React from "react";

import "./App.css";
import TodoList from "./components/Todolist";




function App() {
  const todos = [{
    id:1,
    title: "support for priorities",
    assignetTo: "Jonas"
  },
  {
    id:2,
    title: "fix bug with 'tod' not being recognized",
    assignetTo: "Ona"
  },
  {
    id:3,
    title: "Watch Pluralsight course on Docker",
    assignetTo: "Petras"
  }
   ]

  return (
<div className="App">
  <TodoList todos={todos}/>
</div>   
);
}

export default App;
