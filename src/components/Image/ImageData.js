import React from 'react';

import './ImageData.css';

const ImageData = ({ code, diameter, material, shape }) => {
  return (
    <div className='image-data'>
      <h1>Image Data</h1>
      <h3>Code: {code}</h3>
      <h3>Diameter: {diameter}</h3>
      <h3>Material: {material}</h3>
      <h3>Shape: {shape}</h3>
    </div>
  );
};

export default ImageData;
