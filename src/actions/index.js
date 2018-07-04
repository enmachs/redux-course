import * as ACTIONS from '../action-types/index';

export function openModal(mediaId) {
  // console.log(TYPES.OPEN_MODAL)
  return {
    type: ACTIONS.OPEN_MODAL,
    data: {
      mediaId
    }
  }
}

export function closeModal() {
  return {
    type: ACTIONS.CLOSE_MODAL
  }
}

export function searchEntities(query) {
  return {
    type: ACTIONS.SEARCH_ENTITIES,
    data: {
      query
    }
  }
}
