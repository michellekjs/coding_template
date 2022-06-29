import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

import CustomModal from './components/modal.js'
import Checkbox from './components/checkbox.js'
import Dropdown from './components/dropdown.js'

const style= {
  dbButton : {
    border: 'none',
    borderRadius: '20px',
    width: '200px',
    height : '80px',
    marginBottom : '20px'
  },
  pageStyle: {
    margin:'40px',
    fontFamily: 'Open Sans',
  },
  dropdown: {
    marginTop: '20px'
  }
};

function App() {
//get information using the router - written in back/routes/nodedb.js
  const [data , setData] = useState();
  const [visible, setVisible] = useState(false);
  const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  useEffect(() => {
    axios.get('http://localhost:9000/test/showexample').then((response)=>{
      setData(JSON.stringify(response.data))
    }).catch((error)=>{
      console.log(error);
  })
  }, [])
  
  return (
    <div style={style.pageStyle}>
      {/* title */}
      <h2> Template Components </h2>

      {/* getting data from db */}
      <div>
        <button 
          style={style.dbButton}
          onClick={()=> setVisible(!visible)}>
            DB data display
        </button>
        {visible && <div> {data} </div>}
      </div>

      {/* custom modal component */}
        <div> <CustomModal/> </div>

      {/* custom toggle component */}
        <div> Toggle button <Checkbox/> </div>

      {/* custom animated dropdown component */}
        <div style={style.dropdown}> Animated Dropdown </div>
          <button style={style.dbButton} onClick={e => setDropdownVisibility(!dropdownVisibility)}>
              {
                  dropdownVisibility
                      ? 'Close'
                      : 'Open'
              }
          </button>
          <Dropdown visibility={dropdownVisibility}>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
                <li>item 4</li>
            </ul>
          </Dropdown>
        </div>

  );
}

export default App;
