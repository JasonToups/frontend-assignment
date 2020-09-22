import React from 'react';

import './Image.css';

const Image = ({ url, id }) => {
  return <img src={url} alt={id} />;
};

export default Image;
