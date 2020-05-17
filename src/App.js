import React, { useState } from 'react';
import OpenBox from './componentes/OpenBox';
import CloseBox from './componentes/CloseBox';
import './app.css';
function App() {
  const [active,setActive]=useState(false);
  const [disabled,setDisabled]=useState(false);
  const [disappear,setDisappear]=useState(false);

  const setCloseBox=()=>setActive(!active);
  const setOpenBox=()=>{
    setDisabled(!disabled)
    setDisappear(!disappear)
  }
  return (
    
    <div className="app_page">
      <OpenBox cliked={setCloseBox} disabled={disabled} disappear={disappear} setOpenBox={setOpenBox}/>
      <CloseBox active={active} cliked={setOpenBox} setCloseBox={setCloseBox}/>
    </div>
  );
}

export default App;
