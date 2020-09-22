import React from 'react';
import { useForm } from 'react-hook-form';
import './ImageForm.css';
import schema from './Schema';

const ImageForm = ({ code, id, setRenderImage }) => {
  const { register, handleSubmit, reset } = useForm();
  const formFields = schema[code].fields;

  const onSubmit = data => {
    // makes POST request from API, if passes form validation
    updateImage(data);
    // sets the state for the parent component to fetch and render a new image
    setRenderImage(id);
    // renders new form fields
    renderedFields();
    // resets the form fields
    reset();
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
    return console.log(response.statusText);
  };

  const renderedFields = () => {
    let returnFields = [];
    for (const name in formFields) {
      returnFields.push(
        <div key={name}>
          <label className='form-label'>{name}</label>
          <br />
          <input
            className='form-field'
            name={name}
            type={formFields[name].type}
            min={formFields[name].minimum}
            max={formFields[name].maximum}
            minLength={formFields[name].min_length}
            maxLength={formFields[name].max_length}
            required={true}
            ref={register}
          />
          <br />
        </div>,
      );
    }
    return (
      <>
        <div>{returnFields}</div>
      </>
    );
  };

  return (
    <div className='image-form'>
      <h1>Image Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderedFields()}
        <input className='submit-button' type='submit' value='submit'></input>
      </form>
    </div>
  );
};

export default ImageForm;
