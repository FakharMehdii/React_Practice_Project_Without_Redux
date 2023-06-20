import { InputField } from "../InputField"
import { ToDoTask } from "../ToDoTask"

export function ToDoList ({inputValue, handleChange, handleKeyPress, setTasks, tasks})
{
    return(
        <div className='area'>
            <h2 className='heading'>
              My Todo        </h2>
            <InputField inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
            <hr></hr>

              {tasks.map((task, index,) => (
                
                <ToDoTask setTasks={setTasks}   tasks={tasks}   task={task} index={index} key={index}/>
                  
              ))}
            </div>

    );
}
