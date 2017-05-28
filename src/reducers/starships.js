import starship from './starship.js';

export default (state=[], action) => {

  switch (action.type) {
    case 'RECEIVE_STARSHIPS':
      return [...state, ...action.data.map(item => {
        let act = {data: {...item}, type: action.type}
        return starship(undefined, act);
      })];

    default:
      return state
  }

}