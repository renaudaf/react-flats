import React, { useState } from "react";
import GoogleMapReact from 'google-map-react';

import FlatList from "./flat_list";
import flatsD from '../../data/flats';
import Marker from './marker';

const App = () => {
  const flats = flatsD;
  const [selectedFlat, setSelectedFlat] = useState(flats[0]);

  const selectFlat = (index) => {
    setSelectedFlat(flats[index]);
  };

  const center = () => {
    return {
      lat: selectedFlat.lat,
      lng: selectedFlat.lng
    };
  };

  return (
    <div>
      <FlatList
        flats={flats}
        selectedFlat={selectedFlat}
        selectFlat={selectFlat}
      />
      <div className="map-container">
        <GoogleMapReact defaultCenter={center()} defaultZoom={12}>
          <Marker lat={selectedFlat.lat} lng={selectedFlat.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default App;
