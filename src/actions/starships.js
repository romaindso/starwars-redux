export const RECEIVE_STARSHIPS = 'RECEIVE_STARSHIPS';
const receiveStarships = data => {
  return {
    type: RECEIVE_STARSHIPS,
    data
  }
}

export const fetchStarships = () => {
  return function (dispatch) {
    return fetch('https://swapi.co/api/starships/')
      .then(response => {
        return response.json();
      }).then(data => {
        dispatch(receiveStarships(data.results));
      }).catch(err => {
        console.log(err);
      });
  }
}
