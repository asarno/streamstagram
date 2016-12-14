import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'
import Login from './Login'
import Home from './Home'
import Photo from './Photo'
import { goHome } from '../actions/actions'

const App = ( {...props} ) => {
  if (props.view === 'image') {
    return <Photo />
  } else if (props.view === 'home') {
    return <Home />
  } else {
    return <Login />
  }
};


export default reactiveComponent(App, 'viewsState$');
