import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <TodoItem
            title={todo.title}
            assignedTo={todo.assignedTo}
            key={todo.id}
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
