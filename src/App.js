import React from 'react';
import './scss/App.scss';
import patternbg from './components/images/pattern-bg.png';
import Map from './components/Map';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <h1>IP Address Tracker</h1>
      <Search></Search>
      <img className='background-img' src={patternbg} alt='backgroundimage'></img>
      <Map></Map>
    </div>
  );
}

export default App;
