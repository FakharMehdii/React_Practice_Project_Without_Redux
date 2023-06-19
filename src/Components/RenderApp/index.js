
import { TodoArea } from '../TodoArea';

export function RenderApp ({handleChange, setTasks,    tasks, inputValue, handleKeyPress,  handleDelete})
{
  return(
    <div className="App">
      
      <TodoArea inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress} setTasks={setTasks} tasks={tasks} handleDelete={handleDelete}  />

  </div>
  );

}