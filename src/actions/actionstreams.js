import { createSuperstream, createStatestream } from 'omnistream';

export const login$ = (superstream) => {
  return superstream.filterForActionTypes(['LOG_IN', 'UPDATE_USERNAME', 'UPDATE_PASSWORD'])
}

export const views$ = (superstream) => {
  return superstream.filterForActionTypes(['GO_HOME', 'SELECT_IMAGE'])
}

export const images$ = (superstream) => {
  return superstream.filterForActionTypes(['FETCH_IMAGES', 'REQUEST_IMAGES', 'REQUEST_ABORT', 'ADD_LIKES'])
}
