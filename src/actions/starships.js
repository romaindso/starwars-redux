export const RECEIVE_STARSHIPS = 'RECEIVE_STARSHIPS';
const receiveStarships = data => {
  return {
    type: RECEIVE_STARSHIPS,
    items: data
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

export const RECEIVE_STARSHIP_DETAILS = "RECEIVE_STARSHIP_DETAILS";
const receiveStarshipDetails = data => ({
  type: RECEIVE_STARSHIP_DETAILS,
  data
})

export const fetchStarshipDetails = (starshipId) => {
  return function (dispatch) {
    return fetch(`https://swapi.co/api/starships/${starshipId}`)
    .then(response => {
      return response.json();
    }).then(data => {
      dispatch(receiveStarshipDetails(data));
    }).catch(err => {
      console.log(err);
    });
  }
}
