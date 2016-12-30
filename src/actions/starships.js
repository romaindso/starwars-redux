export const REQUEST_STARSHIPS = 'REQUEST_STARSHIPS';
const requestStarships = () => {
  return {
    type: REQUEST_STARSHIPS
  }
}

export const RECEIVE_STARSHIPS = 'RECEIVE_STARSHIPS';
const receiveStarships = data => {
  return {
    type: RECEIVE_STARSHIPS,
    items: data
  }
}

export const fetchStarship = () => {
  return function (dispatch) {
    dispatch(requestStarships());
    return fetch('http://swapi.co/api/starships/')
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
    return fetch(`http://swapi.co/api/starships/${starshipId}`)
    .then(response => {
      return response.json();
    }).then(data => {
      dispatch(receiveStarshipDetails(data.results));
    }).catch(err => {
      console.log(err);
    });
  }
}
