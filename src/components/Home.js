import React, { Component } from 'react'
import { reactiveComponent } from 'omnistream'
import { getImages } from '../actions/actions'
import Photo from'./Photo'

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatchObservableFn(getImages);
  }

  render() {
    const images = this.props.images
    ? this.props.images.map((image) => <Photo url={image.url} id={image.id} likes={image.likes}/>)
    : <div>'no images'</div>
    return (
      <div>
        {images}
      </div>
    )
  }
}

export default reactiveComponent(Home, 'imagesState$');
