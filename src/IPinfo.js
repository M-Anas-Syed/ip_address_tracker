import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IPinfo({submitText, setPosition, setIpLocation}){
    const ip = submitText;
    const api_key = process.env.REACT_APP_IP_API_KEY;
    const url = "https://geo.ipify.org/api/v1";
    const [items, setItems] = useState(null);

    const ipLocation = () => {
        if(items){
            let coordinates = [];
            coordinates.push(items.location.lat);
            coordinates.push(items.location.lng);
            setPosition(coordinates);
            setIpLocation(items.location.region);
        }
        
    } 

    useEffect(() => {
        axios.get(url, {
            params: {apiKey: api_key,
                domain: ip
                },
        })
        .then((response) => {
            setItems(response.data);
            
        }, (error) => {
            console.log(error);
        });
    },[ip]);

    useEffect(() => {
        ipLocation(items);
    },[items]); 
    

    if(items){
        return(
            <div className='ipinfo'>
                <div className='ip_item right_border'>
                    <h2>IP Address</h2>
                    <p>{items.ip}</p>
                </div>
                <div className='ip_item right_border'>
                    <h2>Location</h2>
                    <p>{items.location.city}, {items.location.region} {items.location.postalCode}</p>
                </div>
                <div className='ip_item right_border'>
                    <h2>Timezone</h2>
                    <p>{items.location.timezone}</p>
                </div>
                <div className='ip_item right_border'>
                    <h2>ISP</h2>
                    <p>{items.isp}</p>
                </div>  
            </div>
        );
    }else{
        return(
            <div className='ipinfo ipinfo_container'>
                <h3>
                    Loading...
                </h3>
            </div>
        );
    }

    

    
}

export default IPinfo;