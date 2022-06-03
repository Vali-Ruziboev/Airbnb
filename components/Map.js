import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { useState } from 'react'

const MyMap = ({ searchResults }) => {
    const coordinates = searchResults.map((result) => ({
        width: "100%", 
        height: "100%",
        longitude: result.long,
        latitude: result.lat,
    }));
    
    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
            longitude: center.longitude,
            latitude: center.latitude,
            zoom: 11,
    })

  return (
    <Map
        mapStyle="mapbox://styles/vali-ruziboev/cl3ycy90k000i14p7wp9x3gci"
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={(nextViewPort)=>setViewport(nextViewPort.viewState)}
        // viewState={nextViewPort=>setViewport(nextViewPort)}
    >
        {searchResults.map(result=>(
                <Marker
                    key={result.long}
                    longitude={result.long}
                    latitude ={result.lat}
                    offset={[-20, 10]}
                >
                    <p
                    role='img'
                    className="cursor-pointer text-2xl"
                    >📍</p> 
                </Marker>
        ))}
    </Map>
  );
};

export default MyMap;
