function TodoItem(props) {
  return (
    
    
    <li className="myClass" key='{props.id}'>
      {/* <li className="myClass" key='{props.id}'> */}
     
        {props.id}. Užduotis: {props.title}, priskirta {props.assignedTo}. 
      
    </li>
  );
}

export default TodoItem;

// title={todo.title}
//             assignedTo={todo.assignedTo}
//             key={todo.id}
