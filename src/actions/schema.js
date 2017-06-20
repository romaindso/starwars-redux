import { schema, arrayOf } from 'normalizr';

export const character = new schema.Entity('characters', {}, {
  idAttribute: (value, parent, key) => {
    return value.url.match(/\/([0-9]+)\/$/)[1];
  }
});
export const arrayOfCharacters = [ character ];