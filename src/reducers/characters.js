import character from './character';

export default (state=[], action) => {

  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      return [...state, ...action.data.map(item => {
        let act = {data: {...item}, type: action.type}
        return character(undefined, act);
      })];

    default:
      return state
  }

}
