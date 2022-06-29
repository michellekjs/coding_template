import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

import CustomModal from './components/modal.js'

const style= {
  dbButton : {
    border: 'none',
    borderRadius: '20px',
    width: '200px',
    height : '80px',
  },
  pageStyle: {
    margin:'40px',
    fontFamily: 'Open Sans',
  }
};

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
    <div style={style.pageStyle}>
      <h1> Template Components </h1>
      <div>
        <button style={style.dbButton} onClick={()=> setVisible(!visible)}>DB data display </button>
        {visible && <div> {data} </div>}
        <div> <CustomModal/> </div>
      </div>
    </div>

  );
}

export default App;
