import React from 'react';

function IPinfo(){
    return(
        <div className='ipinfo'>
            <div className='ip_item right_border'>
                <h2>IP Address</h2>
                <p>192.210.174.101</p>
            </div>
            <div className='ip_item right_border'>
                <h2>Location</h2>
                <p>Brooklyn, NY 10001</p>
            </div>
            <div className='ip_item right_border'>
                <h2>Timezone</h2>
                <p>UTC-05:00</p>
            </div>
            <div className='ip_item right_border'>
                <h2>ISP</h2>
                <p>SpaceX Starlink</p>
            </div>  
        </div>
    );
}

export default IPinfo;