import React from 'react';
import Search from './Search';
import patternbg from './images/pattern-bg.png';
import IPinfo from './IPinfo';

function IPHeader(){
    return(
        <section className='container'>
            <h1>IP Address Tracker</h1>
            <Search></Search>
            <IPinfo></IPinfo>
        </section>
    );
}

export default IPHeader;