import api from '../api.json';
import { normalize, schema } from 'normalizr';

// Schema fo media
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({ ...value, category: parent.id })
});
// const media = new schema.Entity(key, definicion de mi esquema, opciones)

// Schema fo Category
const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
})


const categories = { categories: new schema.Array(category) }



const normalizedData = normalize(api, categories);

export default normalizedData;
