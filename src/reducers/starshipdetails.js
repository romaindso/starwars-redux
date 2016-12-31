const initialState = {
  data: {}
};

export default (state=initialState, action) => {

  switch (action.type) {
    case 'RECEIVE_STARSHIP_DETAILS':
      return {...state, data: action.data}

    default:
      return state
  }

}
