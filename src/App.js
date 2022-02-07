import React from "react";
import "./App.css";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div>
        
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div className='btn'>
          <Button variant="outlined" color="success" onClick={() => completeTodo(index)} className="complete-undo">{todo.isCompleted?<i className="fa fa-undo" aria-hidden="true"></i>:"completed"} </Button>
          <Button startIcon={<DeleteIcon />} color="error" onClick={() => removeTodo(index)} className="delete"><i className="fa fa-trash" aria-hidden="true"></i></Button>
        </div>                       
      </div>
    </div>
  );
}
//addtodo
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");
//handle sumbit
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    //form and buttons
    <form onSubmit={handleSubmit}    className="form">

<TextField
          required
          className="input"
          id="outlined-required"
          label="New Task"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      
      <Button type='submit' variant="contained" endIcon={<SendIcon />} className='add'>ADD Task</Button>

    </form>
  );
}

function App() {
  //initial values
  const [todos, setTodos] = React.useState([
    {
      text: "Create Theme",
      isCompleted: false
    },
    {
      text: "Work on WordPress",
      isCompleted: false
    },
    {
      text: "Organize office main department",
      isCompleted: false
    },
    {
      text : "Error Solve in HTML Template",
      isCompleted: false
    }
  ]);
//adding a new todo task
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

//completing a todo task
  const completeTodo = index => {
    const newTodos = [...todos];

   
  if(newTodos[index].isCompleted){
    newTodos[index].isCompleted=false;
  }

  else{
    newTodos[index].isCompleted=true;
  }
  
    setTodos(newTodos);
  };

//removing a todo task
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
    <h1>To-Do List using React App</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;