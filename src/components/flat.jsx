import React from 'react';

const Flat = (props) => {
  const handleClick = () => {
    const { selectFlat, index } = props;
    selectFlat(index);
  };

  const { flat } = props;
  return (
    <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${flat.imageUrl}')` }}>
      <div className="card-category">
        {flat.price}
        {' '}
        {flat.priceCurrency}
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <button type="button" className="card-link" href="#" onClick={handleClick} />
    </div>
  );
};

export default Flat;
