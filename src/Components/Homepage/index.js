
import { DisplayBox } from '../DisplayBox';

export function Homepage ({handleChange, setTasks,    tasks, inputValue, handleKeyPress})
{
  return(
    <div className="App">
      
      <DisplayBox inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress} setTasks={setTasks} tasks={tasks}  />

  </div>
  );

}