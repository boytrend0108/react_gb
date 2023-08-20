import {GET_GISTS_REQUEST, GET_GISTS_SUCCESS, GET_GISTS_ERROR} from './actions'

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};
  
const initialState = {
  error: null,
  gists: [],
  request: STATUSES.IDLE,
  loading: false
}

const gistsReduser = (state = initialState, action) => {
  switch(action.type) {
    case GET_GISTS_REQUEST: 
    console.log('GET_GISTS_REQUEST')
      return {
        ...state,
        request: STATUSES.REQUEST, 
        loading: true,
      }

    case GET_GISTS_SUCCESS :
      return {
        ...state, 
        request: STATUSES.SUCCESS,
        gists: action.payload,
        loading:false, 
        error: null
      }

    case GET_GISTS_ERROR:
      return {
        ...state, 
        request: STATUSES.FAILURE,
        error: action.payload,
        loading:false,
        gists: []
      }

    default: return state
  }

}

export default gistsReduser;