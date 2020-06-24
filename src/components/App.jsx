import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../App.css';

function App() {
  return (
    <div>
      <Display result="0" />
      <ButtonPanel />
    </div>
  );
}

export default App;