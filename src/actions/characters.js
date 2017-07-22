const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
const receiveCharacters = data => {
  return {
    type: RECEIVE_CHARACTERS,
    data
  }
}

// TODO 
// Declare a normalizr schema and use it on the fetched data
export const fetchCharacters= () => {
  return function (dispatch) {
    return fetch('https://swapi.co/api/people/')
      .then(response => {
        return response.json();
      }).then(data => {
        dispatch(receiveCharacters(data.results));
      }).catch(err => {
        console.log(err);
      });
  }
}