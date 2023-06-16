
import React, { useState } from 'react';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
    
  }

  function handleDelete(index) {
    console.log("Delete Button");
  }

  function handleEdit(index) {
    console.log("Edit Button");
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      setTasks((prevValues) => [...prevValues, inputValue.trim()]);
      setInputValue('');
    }
  }

  function InputField ({inputValue, handleChange, handleKeyPress})
  {
    return(
      <input 
      type='text'
      id='task'
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyPress}
      className='input'
      placeholder='Input task name and then tab enter to add'
      autoFocus
    />
    );
  }

  function ReturnApp ({inputValue, handleChange, handleKeyPress, handleEdit, handleDelete})
  {
    return(
      <div className="App">

      <div className='area'>
        <h2 className='heading'>
          My Todo        </h2>
      <InputField inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress}/>
    
        <hr></hr>
        

          {tasks.map((element, index) => (
            
            <div key={index} className='bar'>
              <div>
              <input className='cbox' type='checkbox'/>
              <span className='desc'>{element}</span>
              </div>
              <div>
                <i id='edit' onClick={() => handleEdit(index)} className='fa fa-edit edit'></i>
                <i id='del' onClick={() => handleDelete(index)}  className="fa-solid fa-trash-can"></i>
                </div>
              
            </div>
              
          ))}
        </div>
    </div>
    );

  }



  return (
    <ReturnApp inputValue={inputValue} handleChange={handleChange} handleKeyPress={handleKeyPress} handleDelete={handleDelete} handleEdit= {handleEdit} />

    
  );

}

export default App;