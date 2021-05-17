import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

function Map({position, ipLocation}){

    require('dotenv').config;
    
    if(position == ''){
        position = [51.505, -0.09];
    }

    function ChangeView({ center, zoom }) {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    }

    function createMap(){
        return (React.createElement(MapContainer, {
            center: position,
            zoom: 13,
            scrollWheelZoom: false
            },
            React.createElement(ChangeView, {
                center: position,
                zoom: 13
            }),
            React.createElement(TileLayer, {
            attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
            url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            id: "mapbox/streets-v11",
            accessToken: process.env.REACT_APP_MAP_API_KEY
            }),
            React.createElement(Marker, {
            position: position
            }, React.createElement(Popup, null, ipLocation))
            )
        );
        
    } 
    return(
        <section>
            {
                createMap()
                
            }
        </section>
    );
}

export default Map;