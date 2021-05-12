import React, { useState } from 'react';
import './components/App.scss';
import Map from './Map';
import IPHeader from './IPHeader';

function App() {
  const [inputText, setInputText] = useState('');
  const [submitText, setSubmitText] = useState('');
  const [position, setPosition] = useState('');
  const [ipLocation, setIpLocation] = useState('');

  return (
    <div className="App">
      <IPHeader setIpLocation={setIpLocation} setPosition={setPosition} inputText={inputText} setInputText={setInputText} submitText={submitText} setSubmitText={setSubmitText}/>
      <Map ipLocation={ipLocation} position={position}></Map>
    </div>
  );
}

export default App;
