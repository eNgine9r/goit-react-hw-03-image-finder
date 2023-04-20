import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Loader from './Loader/Loader';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

export class App extends Component {

  state = {
    images: []
  }

  handleFormSubmit = images => {
    this.setState({images});
  }

  render () {
    return (
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
      {/* <ImageGalleryItem/>
      <Loader/>
      <Button/>
      <Modal/> */}
    </div>
  );
  }

};
