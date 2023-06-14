// import React ,{useRef,useState,useEffect} from 'react'
// import '../styles/App.css';
// import InputField from './InputField.js';
// const App = () => {
 
// //code here 


 
//   return (
//     <div>
//     <InputField  ref={newRef}  type="text"/><br/>
//     <button id="settingValueButton" onClick={settingValue}>Set Value</button>
//     <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br/><br/>
//      <textarea id="textarea" value={values}></textarea>

//     </div>
//   );
// }


// export default App;

import React, { useRef, useState } from 'react';
import '../styles/App.css';
import InputField from './InputField.js';

const App = () => {
  const textareaRef = useRef(null);
  const inputRef = useRef(null);
  const [values, setValues] = useState('');

  const settingValue = () => {
    const inputValue = inputRef.current.value;
    setValues(inputValue);
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <InputField ref={inputRef} type="text" /><br />
      <button id="settingValueButton" onClick={settingValue}>Set Value</button>
      <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br /><br />
      <textarea id="textarea" value={values} ref={textareaRef}></textarea>
    </div>
  );
}

export default App;

