import { InputField } from "../InputField"
import { Bar } from "../Bar"

export function TodoArea ({inputValue, handleChange, handleKeyPress, setTasks, tasks, handleDelete})
{
    return(
        <div className='area'>
            <h2 className='heading'>
              My Todo        </h2>
            <InputField inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
            <hr></hr>

              {tasks.map((element, index) => (
                
                <Bar setTasks={setTasks}   tasks={tasks}   element={element} index={index}  handleDelete={handleDelete} />
                  
              ))}
            </div>

    );
}
