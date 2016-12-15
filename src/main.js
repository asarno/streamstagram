import React, { Component } from 'react'
import { render } from 'react-dom'
require('./styles/styles.css')
import App from './components/App'
import { StreamProvider, Timeline, createSuperstream, createStore } from 'omnistream';
import { login$, views$, images$, likes$ } from './actions/actionStreams';
import loginReducer from './reducers/loginReducer'
import imagesReducer from './reducers/imagesReducer'
import viewsReducer from './reducers/viewsReducer'

const superstream = createSuperstream();
const loginState$ = superstream.createStatestream(loginReducer, login$);
const viewsState$ = superstream.createStatestream(viewsReducer, views$);
const imagesState$ = superstream.createStatestream(imagesReducer, images$);
const streamCollection = { loginState$, viewsState$, imagesState$ };

superstream.createStore(streamCollection);

render((
  <StreamProvider superstream={superstream}>
    <App />
    <Timeline superstream={superstream}/>
  </StreamProvider>
), document.getElementById('root'))
