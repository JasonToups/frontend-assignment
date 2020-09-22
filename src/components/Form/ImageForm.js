import React from 'react';

import schema from './Schema';

//use the code provided from the parent to make a validation against the schema code

const ImageForm = ({ code, id }) => {
  const formFields = schema[`${code}`];
  // console.log(formFields);

  let newObj = Object.fromEntries(
    Object.entries(formFields.fields).map(([k, v]) => [k, v]),
  );
  console.log(newObj);

  const renderedFields = () => {
    const returnFields = {};

    return <div>Need to Render Fields</div>;
  };
  return (
    <>
      <h1>Image Form</h1>
      <p>ID {id}</p>
      {renderedFields()}
    </>
  );
};

export default ImageForm;
