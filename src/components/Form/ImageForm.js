import React from 'react';

import schema from './Schema';

const ImageForm = ({ code, id }) => {
  const { useState } = React;
  const formFields = schema[code].fields;
  console.log(formFields);

  const renderedFields = () => {
    let returnFields = [];
    for (const name in formFields) {
      console.log(name);
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
            maxLength={formFields[name].max_Length}></input>
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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <h1>Image Form</h1>
      <p>ID: {id}</p>
      <form onSubmit={handleSubmit}>
        {renderedFields()}
        <input className='submit-button' type='submit' value='submit'></input>
      </form>
    </>
  );
};

export default ImageForm;
