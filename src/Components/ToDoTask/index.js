import { useState } from "react";

export function ToDoTask ({setTasks, tasks  ,task, index}) {
    const [done, setDone] = useState(false);
    const [edit, setEdit] = useState(false);
    const [inputValue, setInputValue] = useState('');


    function handleCheckboxChange(event) {
        if(event.target.checked)
            setDone(true);
        else
            setDone(false);
    }

    function handleEditChange(event) {
        task= event.target.value
        setInputValue(event.target.value);

    }
    
      function handleEdit(index) {
        setEdit(true);
    }


    function handleEditKeyPress(event){
        if (event.key === 'Enter' && inputValue!=="") {

            setTasks((prevValues) => {
                const updatedValues = [...prevValues];
                updatedValues[index] = inputValue;
                setEdit(false);
                return updatedValues;

            });
        }
    }


  function handleDelete(index) {

    let updatedValues = [...tasks];
    // let toBeDeletedvalueIndex = updatedValues.find((value,ind) => index === ind);
    updatedValues.splice(index,1);


    console.log(updatedValues);

    setTasks([...updatedValues]);
  }

  let divToBeDisplayed;

  if(edit)
  {
    divToBeDisplayed = <div>  <input   className="checkbox" type='text' value={inputValue ? inputValue : task} onChange={handleEditChange} onKeyDown={handleEditKeyPress} autoFocus /></div>;

  }
  else
  {
    divToBeDisplayed =<div><input   className="cbox" type='checkbox' onChange={handleCheckboxChange} /> <span className= {done? 'strike':'normal'} >{task}</span> </div>

  }

  return(
    <div className='todoTask'>

        {divToBeDisplayed}
        
       
        <div>
        <i id='edit' onClick={() => handleEdit(index)} className='fa fa-edit edit'></i>
        <i id='del' onClick={() => handleDelete(index)}  className="fa-solid fa-trash-can"></i>
        </div>
    
  </div>
    );

  }
  