import { useState } from "react";

export function Bar ({setTasks, tasks  ,element, index, handleDelete}) {
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState('');

    function handleCheckboxChange(event) {
        if(event.target.checked)
        {
            setDone(true);
        }
        else
        {
            setDone(false);
        }

    }
    function handleChange(event) {
        setInputValue(event.target.value);
        
    }
    
      function handleEdit(index) {
        //to be implemented
    }

    function handleKeyPress(event, index){
        if (event.key === 'Enter' && inputValue!=="") {

            setTasks((prevValues) => {
                const updatedValues = [...prevValues];
                updatedValues[index] = inputValue;
                return updatedValues;

            });
        }
    }

    if(edit)
    {
        
        return(
            <div key={index} className='bar'>
                
                <div>
        
                <input   className="cbox" type='text' value={tasks[index]} onChange={handleChange} onKeyDown={(event) => handleKeyPress(event, index)} autoFocus />
                
                </div>
                <div>
                <i id='edit' onClick={setEdit(true)} className='fa fa-edit edit'></i>
                <i id='del' onClick={() => handleDelete(index)}  className="fa-solid fa-trash-can"></i>
                </div>
            
          </div>
            );

    }
    else
    {
        return(
            <div key={index} className='bar'>
                
                <div>
        
                <input   className="cbox" type='checkbox' onChange={handleCheckboxChange} />
                <span className= {done? 'strike':'normal'} >{element}</span>
                </div>
                <div>
                <i id='edit' onClick={() => handleEdit(index)} className='fa fa-edit edit'></i>
                <i id='del' onClick={() => handleDelete(index)}  className="fa-solid fa-trash-can"></i>
                </div>
            
          </div>
            );

    }
}