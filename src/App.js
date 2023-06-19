
import React, {  useState } from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {RenderApp} from './Components/RenderApp/index'




function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  


  function handleChange(event) {
    setInputValue(event.target.value);
    
  }



  function handleDelete(index) {
    setTasks( (prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues.splice(index, 1);
      return updatedValues;
    }

    );

  }


  function handleKeyPress(event) {
    if (event.key === 'Enter' && inputValue!=="") {
      console.log("Enter pressed");
      setTasks((prevValues) => [...prevValues, inputValue.trim()]);
      setInputValue('');
    }
  }

  return (
    <RenderApp handleChange={handleChange} setTasks={setTasks}  tasks={tasks} inputValue={inputValue} handleKeyPress={handleKeyPress} handleDelete={handleDelete}  />

    
  );

}

export default App;