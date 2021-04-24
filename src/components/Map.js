import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Map(){
    
    return(
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
                id= 'mapbox/streets-v11'
                accessToken='pk.eyJ1IjoiYW5hc2FmemFsIiwiYSI6ImNrbnV5a2x1YzBoaDMyb3Fud3d3YnBlaHkifQ.ecXZ2mCNpOwkUtJQKYOExw'
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;