import { CHARACTERS_REQUEST } from '../constants/type';

export const fetchCharacters = () => {
  return {
    type: CHARACTERS_REQUEST
  }
}