import React from 'react';
import OpenBox from './componentes/OpenBox';
import CloseBox from './componentes/CloseBox';
import './app.css';
function App() {
  return (
    <div className="app_page">
      <OpenBox/>
      <CloseBox/>
    </div>
  );
}

export default App;
