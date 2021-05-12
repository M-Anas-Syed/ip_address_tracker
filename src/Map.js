import React,{useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { map } from 'leaflet';

function Map({position, ipLocation}){

    
    if(position == ''){
        position = [51.505, -0.09];
    }
    /* const ipLocation = () => {
        let x = [];
        x.push(items.location.lat, items.location.lng);
        console.log(x); 
    }

    if(items !== null){
        ipLocation();
    }   */

    /* function createMap(){
        return (React.createElement(MapContainer, {
            center: position,
            zoom: 13,
            scrollWheelZoom: false
            },
            React.createElement(TileLayer, {
            attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
            url: "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            id: "mapbox/streets-v11",
            accessToken: "pk.eyJ1IjoiYW5hc2FmemFsIiwiYSI6ImNrbnV5a2x1YzBoaDMyb3Fud3d3YnBlaHkifQ.ecXZ2mCNpOwkUtJQKYOExw"
            }),
            React.createElement(Marker, {
            position: position
            }, React.createElement(Popup, null, "A pretty CSS3 popup. ", React.createElement("br", null), " Easily customizable."))
            )
        );
        
    }  */
        
    

    {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            id= 'mapbox/streets-v11'
            accessToken='pk.eyJ1IjoiYW5hc2FmemFsIiwiYSI6ImNrbnV5a2x1YzBoaDMyb3Fud3d3YnBlaHkifQ.ecXZ2mCNpOwkUtJQKYOExw'
        />
        <Marker position={position}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer> */}
    
    /* var mymap = map('mapid').setView([51.505, -0.09], 13);

    tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYW5hc2FmemFsIiwiYSI6ImNrbnV5a2x1YzBoaDMyb3Fud3d3YnBlaHkifQ.ecXZ2mCNpOwkUtJQKYOExw'
    }).addTo(mymap);

    var marker = marker([51.5, -0.09]).addTo(mymap);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    var popup = popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap); */

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
            accessToken: "pk.eyJ1IjoiYW5hc2FmemFsIiwiYSI6ImNrbnV5a2x1YzBoaDMyb3Fud3d3YnBlaHkifQ.ecXZ2mCNpOwkUtJQKYOExw"
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