import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

const MyMap = ({ searchResults }) => {
    const [selectedLocation, setSelectedLocation] = useState({})


    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    console.log(selectedLocation);
    
    const center = getCenter(coordinates);


    const [viewport, setViewport] = useState({
            longitude: center.longitude,
            latitude: center.latitude,
            zoom: 11,
    })

  return (
    <Map
        mapboxAccessToken={process.env.mapbox_key}
        style={{width: '100%', height: '100%'}}
        {...viewport}
        onMove={(nextViewPort)=>setViewport(nextViewPort.viewState)}
        mapStyle="mapbox://styles/vali-ruziboev/cl3ycy90k000i14p7wp9x3gci"
    >
        {searchResults.map(result=>(
            <div key={result.long}>
                <Marker    
                    longitude={result.long}
                    latitude ={result.lat}
                    // offset={[-20, -10]}
                >
                    <p 
                    onClick={()=>setSelectedLocation(result)}
                    role='img'
                    className="cursor-pointer text-2xl animate-bounce"
                    aria-label="push-pin"
                    >📍</p> 
                </Marker>

                {selectedLocation.long == result.long && (
                    <Popup
                    // onClose={()=>setSelectedLocation({})}
                    closeOnClick={true}
                    latitude={result.lat}
                    longitude={result.long}
                    >
                        {result.title}
                    </Popup>
                )}
            </div>
        ))}
    </Map>
  );
};

export default MyMap;
