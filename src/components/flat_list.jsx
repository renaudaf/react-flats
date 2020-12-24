import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const { flats } = props;
  return (
    <div className="flat-list">
      { flats.map((flat, index) => (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      )) }
    </div>
  );
};

export default FlatList;
