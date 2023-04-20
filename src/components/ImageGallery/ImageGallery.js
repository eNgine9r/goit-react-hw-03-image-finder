import React, { Component } from 'react';

export class ImageGallery extends Component  {

  state = {
    img: null,
    loading: false,
  }


  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevProps.images;
    const nextImages = this.props.images;

    if (prevImages !== nextImages) {
      console.log('змінилась картинка');

      this.setState({ loading: true });

      fetch(`https://pixabay.com/api/?q=${nextImages}&page=1&key=34447371-d1c04ab6613d972420d21a436&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => res.json())
          .then(img => this.setState({ img }))
          .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { img, loading } = this.state;
    const { images } = this.props;

    return (
      <div className="image-gallery">
        {loading && <div>Завантажуємо...</div>}
        <ul>
          <li className="gallery-item">
            {/* <img src={img.hits.areau.webformatURL} alt="" width="250" /> */}
          </li>
        </ul>
        {!images && <div>Потрібно ввести назву для пошуку.</div>}
        {img && <div>{img.tags}</div>}
      </div>
    );
  }
};

export default ImageGallery;