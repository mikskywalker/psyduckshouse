import React from 'react';
import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="App" style={{height: '100vh'}}>
      <Spline scene="https://prod.spline.design/ekqlJiX42Sqf79M3/scene.splinecode" />
    </div>
  ); 
}

export default App;
