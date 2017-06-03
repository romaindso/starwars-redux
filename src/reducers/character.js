export default (state={}, action) => {

  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      let {type, url, birth_year, eye_color, hair_color, ...rest} = action.data;
      return {
        ...state, 
        id: url.match(/\/([0-9]+)\/$/)[1],
        birthYear: birth_year,
        eyeColor: eye_color,
        hairColor: hair_color,
        ...rest
      }

    default:
      return state
  }
}