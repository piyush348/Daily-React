import { useState } from "react"
export default function TodoList(){
    let [todos, setTodos] = useState(["Sample task"]);
    let [Newtodo, setNewtodo] = useState("");
    let addNewtask = () =>{
        console.log("we have to add new task to todo");
    }
    let updateTodovalue = (event) =>{
        console.log(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="Add the task" value={Newtodo} onChange={updateTodovalue}/>
            <br /><br />
            <button onClick={addNewtask}>Add Task</button>
            <br /><br /><br />
            <hr />
        <h4>Todo List</h4>
        <ul>
            {todos.map((todo)=>(
                <li>{todo}</li>
            ))}
        </ul>
        </div>
    )
}