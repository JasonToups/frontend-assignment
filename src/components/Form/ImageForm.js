import React from 'react';
import { useForm } from 'react-hook-form';

import schema from './Schema';

//TODO need to handle image form post after submit

const ImageForm = ({ code, id }) => {
  const { useState } = React;
  const [imageSubmitted, setImageSubmitted] = useState(false);
  const { register, handleSubmit } = useForm();
  const formFields = schema[code].fields;
  const onSubmit = data => {
    updateImage(data);
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

  const renderResponse = status => {
    console.log(status);
    return <h3>{status}</h3>;
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
      {imageSubmitted ? <h1>Submitted!</h1> : null}
    </>
  );
};

export default ImageForm;
