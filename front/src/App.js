import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

function App() {
//get information using the router - written in back/routes/nodedb.js
  const [data , setData] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/test/showexample').then((response)=>{
      setData(JSON.stringify(response.data))
    }).catch((error)=>{
      console.log(error);
  })
  }, [])
  
  return (
    <div className="App">
        <button onClick={()=> setVisible(!visible)}>Click here </button>
        {visible && <div> {data} </div>}
{/* 
  practicing frontend components
    1. Modal
    2. Toggle button
    3. Responsive Screen
    4. Map function 
    5. Using Components made in other file
    6. Styling - flex containers */}
    

    </div>

  );
}

export default App;
