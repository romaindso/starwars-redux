const initialState = {
  items: []
};

export default (state=initialState, action) => {

  switch (action.type) {
    case 'RECEIVE_STARSHIPS':
      return {...state, items: action.items.map(item => ({
        id: item.url.match(/\/([0-9]+)\/$/)[1],
        name: item.name,
        model: item.model,
        length: item.length
      }))}

    default:
      return state
  }

}
