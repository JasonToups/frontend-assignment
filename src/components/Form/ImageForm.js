import React from 'react';
import { useForm } from 'react-hook-form';

import schema from './Schema';

const ImageForm = ({ code, id }) => {
  const formFields = schema[code].fields;

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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
    </>
  );
};

export default ImageForm;
