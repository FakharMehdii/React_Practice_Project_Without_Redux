import { ToDoList } from '../ToDoList';

export function Homepage ({handleChange, setTasks,    tasks, inputValue, handleKeyPress})
{
  return(
    <div className="App">
      
      <ToDoList inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress} setTasks={setTasks} tasks={tasks}  />

  </div>
  );

}