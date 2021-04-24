import React from 'react';
import './scss/App.scss';
import patternbg from './images/pattern-bg.png';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <img src={patternbg}></img>
      <Map></Map>
    </div>
  );
}

export default App;
