import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    // console.log(todo);
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            assignedTo={todo.assignedTo}
          />
        );
      })}

      {/* <TodoItem title="Nupirkti duonos" assignedTo="Jonas"/>
        <TodoItem title="Išvesti šunį" assignedTo="Ona"/>
        <TodoItem title="Išmokti React" assignedTo="JP"/> */}
    </ul>
  );
}

export default TodoList;
