import React from 'react';
import arrow from './images/icon-arrow.svg';

function Search(){
    return(
        <form className='searchbox'>
            <input type='text' className='search' placeholder='Search for any IP address or domain'></input>
            <button className='submit1'>
                <img src={arrow} alt='arrow'></img>
            </button>
        </form>
        
    );
}

export default Search ;