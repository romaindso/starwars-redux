import character from './character';

export default (state=[], action) => {

  switch (action.type) {
    case 'RECEIVE_CHARACTERS':
      return [...state, ...action.data.map(item => {
        let act = {data: {...item}, type: action.type}
        return character(undefined, act);
      })];
      //   id: item.url.match(/\/([0-9]+)\/$/)[1],
      //   name: item.name,
      //   gender: item.gender,
      //   birthYear: item.birth_year,
      // }))}

    // case 'RECEIVE_CHARACTERS':
    //   return [...state, ...action.data.map(item => {
    //     let act = {data: {...item}, type: action.type}
    //     return starship(undefined, act);
    //   })];

    default:
      return state
  }

}
