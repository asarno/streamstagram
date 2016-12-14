import Rx from 'rxjs/Rx';

export const username = (text) => (
  { type: 'UPDATE_USERNAME', text }
)

export const password = (text) => (
  { type: 'UPDATE_PASSWORD', text }
)

export const login = () => (
  { type: 'LOG_IN', data: null }
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

// export const getImages = (superstream) => {
//   return Rx.Observable.fromPromise(
//     fetch('http://localhost:3000/images').then((result) => result.json())
//     .then((json) => json[0].map((urlArray) => { type: 'FETCH_IMAGES', images: urlArray}))
//     .startWith({ data: null, type: 'REQUEST_IMAGES' })
//     .takeUntil(superstream.filter(action => action.type === 'REQUEST_ABORT'))
// }

export const cancelRequest = (superstream) => (
  { data: null, type: 'REQUEST_ABORT' }
)
