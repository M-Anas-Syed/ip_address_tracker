import React from 'react';
import './components/App.scss';
import patternbg from './components/images/pattern-bg.png';
import Map from './components/Map';
import Search from './components/Search';
import IPinfo from './components/IPinfo';
import IPHeader from './components/IPHeader';

function App() {
  return (
    <div className="App">
      <IPHeader></IPHeader>
      
      <Map></Map>
      {/* <h1>IP Address Tracker</h1>
      <Search></Search>
      <img className='background-img' src={patternbg} alt='backgroundimage'></img>
      <IPinfo></IPinfo> 
      <Map></Map>*/}
    </div>
  );
}

export default App;
