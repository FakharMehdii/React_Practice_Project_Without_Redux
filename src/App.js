
import React, {  useState } from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Homepage} from './Components/Homepage/index'




function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  


  function handleChange(event) {
    setInputValue(event.target.value);
    
  }





  function handleKeyPress(event) {
    if (event.key === 'Enter' && inputValue!=="") {
      console.log("Enter pressed");
      // setTasks((prevValues) => [...prevValues, inputValue.trim()]);s
      setTasks([...tasks,inputValue.trim()])
      setInputValue('');
    }
  }

  return (
    <Homepage handleChange={handleChange} setTasks={setTasks}  tasks={tasks} inputValue={inputValue} handleKeyPress={handleKeyPress}  />

    
  );

}

export default App;