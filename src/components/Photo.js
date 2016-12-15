import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'
import { addLikes } from '../actions/actions'

class Photo extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.dispatch(addLikes(this.props.id))
  }

  render () {
    let likesTxt = this.props.likes + ' Likes';
    return (
      <div className='imgContainer' onClick={this.handleClick}>
        <div className='image'>
          <img src={this.props.url} />
        </div>
        <div className='likes'>{likesTxt}</div>
        <div className='heart'>&#x2764;</div>
      </div>
    )
  }
}

export default reactiveComponent(Photo, 'imagesState$');
