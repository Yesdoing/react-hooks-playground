import React, { useState } from 'react';
import './App.sass';
const App = () => {
  const [count, setCount] = useState(0);

  return (
  <div className="app">
    <h1 className="title">Counter</h1>
    <div className="btn-list">
      <button onClick={() => setCount(count + 1)} className="btn">
        Plus
      </button>
      <button onClick={() => setCount(count - 1)} className="btn">Minus</button>
    </div>
    <div className="counter">
      {count}
    </div>
  </div>
  );
}

export default App;
