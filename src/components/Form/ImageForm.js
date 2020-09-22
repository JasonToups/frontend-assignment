import React from 'react';
import { useForm } from 'react-hook-form';

import schema from './Schema';

//TODO need to re-render the image component and render a new form

const ImageForm = ({ code, id, setRenderImage }) => {
  const { useState } = React;
  const { register, handleSubmit, reset } = useForm();
  const [imageSubmitted, setImageSubmitted] = useState(false);
  const formFields = schema[code].fields;

  const onSubmit = data => {
    updateImage(data);
    setRenderImage(true);
    renderedFields();
    reset(null);
  };

  const updateImage = async data => {
    const api = `https://tyi19eoxij.execute-api.us-west-2.amazonaws.com/prod/${id}`;
    const response = await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response.statusText);
    return setImageSubmitted(true);
  };

  const renderedFields = () => {
    let returnFields = [];
    for (const name in formFields) {
      returnFields.push(
        <>
          <label className='form-label'>{name}</label>
          <br />
          <input
            name={name}
            type={formFields[name].type}
            value={null}
            min={formFields[name].minimum}
            max={formFields[name].maximum}
            minLength={formFields[name].min_Length}
            maxLength={formFields[name].max_Length}
            required={true}
            ref={register}
          />
          <br />
        </>,
      );
    }
    return (
      <>
        <div>{returnFields}</div>
      </>
    );
  };

  return (
    <>
      <h1>Image Form</h1>
      <p>ID: {id}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderedFields()}
        <input className='submit-button' type='submit' value='submit'></input>
      </form>
    </>
  );
};

export default ImageForm;
