import React from 'react';

import './DataLabelling.css';
import Image from './Image/Image';
import ImageData from './Image/ImageData';
import ImageForm from './Form/ImageForm';

const DataLabelling = () => {
  const { useState, useEffect } = React;
  const [results, setResults] = useState(null);
  const [renderImage, setRenderImage] = useState(null);

  // whenever renderImage updates in state, a new image is fetched
  useEffect(() => {
    getImage();
  }, [renderImage]);

  const getImage = () => {
    const api = 'https://tyi19eoxij.execute-api.us-west-2.amazonaws.com/prod';
    fetch(api)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setResults(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const renderResults = () => {
    const { frame_url, id, code, pipe_parameters } = results;
    const { diameter, material, shape } = pipe_parameters;
    return (
      <section className='data-labelling'>
        <div className='image-display'>
          <Image url={frame_url} alt={id} />
        </div>
        <div className='image-info'>
          <ImageData
            code={code}
            diameter={diameter}
            material={material}
            shape={shape}
          />
          <hr />
          <ImageForm code={code} id={id} setRenderImage={setRenderImage} />
        </div>
      </section>
    );
  };

  return <>{results ? renderResults() : <h1>Loading Image</h1>}</>;
};

export default DataLabelling;
