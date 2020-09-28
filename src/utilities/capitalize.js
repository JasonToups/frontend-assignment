const capitalize = string => {
  let puncutationless = string.replace(/[.,\\/#!$%\\^&\\*;:{}=\-_`~()]/g, ' ');
  const words = [];
  const splitWords = puncutationless.split(' ');
  if (splitWords.length > 0) {
    for (let i = 0; i < splitWords.length; i++) {
      words.push(splitWords[i][0].toUpperCase() + splitWords[i].substring(1));
    }
  }
  return words.join(' ');
};

export default capitalize;
