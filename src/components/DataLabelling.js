import React from 'react';

import './DataLabelling.css';
import Image from './Image/Image';
import ImageData from './Image/ImageData';
import ImageForm from './Form/ImageForm';
// import getImage from './api/getImage';

const DataLabelling = () => {
  const { useState, useEffect } = React;
  const [results, setResults] = useState(null);
  const [renderImage, setRenderImage] = useState(null);
  // const [renderData, setRenderData] = useState(null);

  useEffect(() => {
    getImage();
  }, []);
  // useEffect(() => {
  //   setRenderData(true);
  // }, [renderData]);

  // useEffect(() => {
  //   getImage();
  //   // setRenderImage(false);
  // }, [renderImage]);

  const getImage = async () => {
    const api = 'https://tyi19eoxij.execute-api.us-west-2.amazonaws.com/prod';
    const response = await fetch(api);
    const json = await response.json();
    setResults(json);
  };

  const renderResults = () => {
    const { frame_url, id, code, pipe_parameters } = results;
    const { diameter, material, shape } = pipe_parameters;
    return (
      <section className='data-labelling'>
        <div className='image-display'>
          <Image url={frame_url} alt={id} />
        </div>
        <div className='image-data'>
          <ImageData
            code={code}
            diameter={diameter}
            material={material}
            shape={shape}
          />
          <ImageForm code={code} id={id} setRenderImage={setRenderImage} />
        </div>
      </section>
    );
  };

  return <>{results ? renderResults() : <h1>Loading Image</h1>}</>;
};

export default DataLabelling;
