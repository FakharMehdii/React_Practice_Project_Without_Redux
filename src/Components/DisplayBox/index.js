import { InputField } from "../InputField"
import { Bar } from "../Bar"

export function DisplayBox ({inputValue, handleChange, handleKeyPress, setTasks, tasks})
{
    return(
        <div className='area'>
            <h2 className='heading'>
              My Todo        </h2>
            <InputField inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
            <hr></hr>

              {tasks.map((task, index,) => (
                
                <Bar setTasks={setTasks}   tasks={tasks}   task={task} index={index} key={index}/>
                  
              ))}
            </div>

    );
}
