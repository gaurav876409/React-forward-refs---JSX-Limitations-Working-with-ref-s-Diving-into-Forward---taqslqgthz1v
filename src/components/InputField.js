// import React ,{useRef,useState,useEffect} from 'react';
// import '../styles/App.css';

// //complete the following using forward refs concept 

// const InputField=()=>{
//     return(
//     <div>
//       <input id="input" type="text"  ref={ref}/>
//     </div>
//     )
//     }
// export default InputField;

import React, { forwardRef } from 'react';
import '../styles/App.css';

const InputField = forwardRef((props, ref) => {
  return (
    <div>
      <input id="input" type="text" ref={ref} />
    </div>
  );
});

export default InputField;
