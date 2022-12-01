
function TodoItem(props) {
    return ( 
        <li>Užduotis: {props.title}, priskirta {props.assignedTo}</li>
     );
}

export default TodoItem;