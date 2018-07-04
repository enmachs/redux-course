import schema from '../schemas/index';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../action-types/index';

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
});

function data(state = initialState, action){
  switch (action.type) {
    case SEARCH_ENTITIES: {
      return state.set('search', action.data.query)
    }
  
    default:
      return state
  }
}

function mapStateToProps(state, props){
  return {
    data: state.get('data')
  }
}

export default data;
