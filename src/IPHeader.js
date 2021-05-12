import React from 'react';
import IPinfo from './IPinfo';
import arrow from './components/images/icon-arrow.svg';

function IPHeader({inputText, setInputText, setSubmitText, submitText, setPosition, setIpLocation}){

    const ip = (e) => {
        setInputText(e.target.value);
    }

    const submitInputText = (e) => {
        e.preventDefault();
        setSubmitText(inputText);
    }
    
    return(
        <section className='container'>
            <h1>IP Address Tracker</h1>
            <form className='searchbox'>
                <input value={inputText} onChange={ip} type='text' className='search' placeholder='Search for any IP address or domain'></input>
                <button onClick={submitInputText} className='submit1'>
                    <img src={arrow} alt='arrow'></img>
                </button>
            </form>
            <IPinfo setIpLocation={setIpLocation} submitText={submitText} setPosition={setPosition}></IPinfo>
        </section>

    );
}

export default IPHeader;