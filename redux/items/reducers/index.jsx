import produce from 'immer'
import { PROCESS_RAW_DATA, SET_FIRE_NAME } from '../actions/index'
import { INITIAL_STATE } from '../types/initialState'

export const items = (state = INITIAL_STATE, action) => {
  const actionType = action.type
  const payload = action.payload

  switch (actionType) {
    case PROCESS_RAW_DATA: {
      return {
        ...state,
        total: payload.total,
        labels: payload.labels,
        sizes: payload.sizes
      }
    }
    case SET_FIRE_NAME: {
      return {
        ...state,
        single_fire: payload.single_fire
      }
    }
    default:
      return state
  }
}
