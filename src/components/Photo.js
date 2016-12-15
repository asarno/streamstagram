import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'

const Photo = ({ url, id, likes }) => {
  return (
    <div className='imgContainer'>
      <div className='image'>
        <img src={url} />
      </div>
    </div>
  )
}

export default reactiveComponent(Photo, 'imagesState$');
