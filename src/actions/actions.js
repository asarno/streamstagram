import Rx from 'rxjs/Rx';

export const username = (text) => (
  { type: 'UPDATE_USERNAME', text }
)

export const password = (text) => (
  { type: 'UPDATE_PASSWORD', text }
)

export const selectImage = (image) => (
  { type: 'SELECT_IMAGE', image }
)

export const goHome = () => (
  { type: 'GO_HOME', data: null }
)

export const addLikes = (id) => (
  { type: 'ADD_LIKES', id }
)

const URL = 'http://localhost:3000/images'

export const getImages = (superstream) => {

  return Rx.Observable.fromPromise(
    fetch(URL)
    .then(response => response.json())
    .then(json => json))
    .flatMap((arr) => {
      return Rx.Observable.of({ images: arr, type: 'FETCH_IMAGES'})
    })
    .startWith({ data: null, type: 'REQUEST_IMAGES' })
    // .takeUntil(superstream.filter(action => action.type === 'REQUEST_ABORT'))
}

export const cancelRequest = (superstream) => (
  { data: null, type: 'REQUEST_ABORT' }
)
