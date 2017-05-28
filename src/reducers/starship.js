export default (state={}, action) => {

  switch (action.type) {
    case 'RECEIVE_STARSHIPS':
      let {type, url, ...rest} = action.data;
      return {
        ...state, 
        id: url.match(/\/([0-9]+)\/$/)[1],
        ...rest
      }

    default:
      return state
  }
}