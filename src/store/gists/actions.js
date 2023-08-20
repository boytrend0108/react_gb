export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST';
export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';
export const GET_GISTS_ERROR = 'GISTS::GET_GISTS_ERROR';

import {API_URL_PUBLIC} from "../../constants/gists"

export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST
});

export const getGistsSuccess = (gists) => ({
  type: GET_GISTS_SUCCESS,
  payload: gists
});

export const getGistsError = (err) => ({
  type: GET_GISTS_ERROR,
  payload: err
});

export const getAllGists = () => async (dispatch) => {
  dispatch(getGistsRequest);
  try {
    const respons = await fetch(API_URL_PUBLIC);
    if(!respons.ok) {
      throw new Error('Request failed')
    }
    const result = await respons.json();
    dispatch(getGistsSuccess(result));
  } catch (err) {
    dispatch(getGistsSuccess(err.message));
    console.log(err);
  }
};

