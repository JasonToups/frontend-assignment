import React from 'react';

const ImageData = ({ code, diameter, material, shape }) => {
  return (
    <div>
      <h1>Image Data</h1>
      <h3>Code: {code}</h3>
      <h3>Diameter: {diameter}</h3>
      <h3>Material: {material}</h3>
      <h3>Shape: {shape}</h3>
      <hr />
    </div>
  );
};

export default ImageData;
