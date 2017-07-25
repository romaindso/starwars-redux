import { schema } from 'normalizr';

export const character = new schema.Entity('characters', {}, {
  idAttribute: (value, parent, key) => {
    return value.url.match(/\/([0-9]+)\/$/)[1];
  },
  processStrategy: (value, parent, key) => {
    return { ...value, id: value.url.match(/\/([0-9]+)\/$/)[1] };
  }
});
export const arrayOfCharacters = [ character ];