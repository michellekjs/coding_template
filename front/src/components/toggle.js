import React from 'react'

const Toggle = (props) => {
  const {isChecked, handleToggle} = props;

  return (
    <div>
      <input type="checkbox"
    checked={isChecked} onChange={handleToggle}/>
    </div>
  );
}

export default Toggle; 