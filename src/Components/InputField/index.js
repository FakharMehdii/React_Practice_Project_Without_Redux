
export function InputField ({inputValue, handleChange, handleKeyPress})
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