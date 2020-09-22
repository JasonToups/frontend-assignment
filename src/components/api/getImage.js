const getImage = async () => {
  const api = 'https://tyi19eoxij.execute-api.us-west-2.amazonaws.com/prod';
  const response = await fetch(api);
  const json = await response.json();
  return json;
};

export default getImage;
