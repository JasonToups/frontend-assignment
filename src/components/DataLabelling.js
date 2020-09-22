import React from 'react';

import './DataLabelling.css';
import Image from './Image/Image';
import ImageData from './Image/ImageData';
import ImageForm from './Form/ImageForm';

const DataLabelling = () => {
  return (
    <section className='data-labelling'>
      <div className='image-display'>
        <Image
          url='https://sai-assignment.s3-us-west-2.amazonaws.com/frontend/addd0151-09af-4832-865a-5c461808de18.jpg'
          alt='addd0151-09af-4832-865a-5c461808de18'
        />
      </div>
      <div className='image-data'>
        <ImageData />
        <ImageForm />
      </div>
    </section>
  );
};

export default DataLabelling;
