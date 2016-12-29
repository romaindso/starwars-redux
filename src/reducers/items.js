const initialState = {
  items: []
};

export default (state=initialState, action) => {

  switch (action.type) {
    case 'fetch_all':
    return { ...state, items:['aaa', 'bbb'] }

    default:
    return state
  }

}
