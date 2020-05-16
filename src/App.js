import React, { useState } from 'react';
import OpenBox from './componentes/OpenBox';
import CloseBox from './componentes/CloseBox';
import './app.css';
function App() {
  const [active,setActive]=useState(false);

  const clickedActive=()=>setActive(true);
  return (
    
    <div className="app_page">
      <OpenBox cliked={clickedActive}/>
      <CloseBox active={active}/>
    </div>
  );
}

export default App;
