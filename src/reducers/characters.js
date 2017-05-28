const initialState = {
  items: []
};

export default (state=initialState, action) => {

  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      return {...state, items: action.items.map(item => ({
        id: item.url.match(/\/([0-9]+)\/$/)[1],
        name: item.name,
        gender: item.gender,
        birthYear: item.birth_year,
      }))}

    default:
      return state
  }

}
