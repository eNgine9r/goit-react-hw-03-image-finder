import React, { Component } from 'react';

export class ImageGallery extends Component  {

  state = {
    img: null,
    loading: false,
    currentPage: 1,
  }


  componentDidUpdate(prevProps, prevState) {
    const prevImages = prevProps.images;
    const nextImages = this.props.images;
    const { currentPage } = this.state;

    if (prevImages !== nextImages) {
      console.log('змінилась картинка');

      this.setState({ loading: true });
      fetch(`https://pixabay.com/api/?q=${nextImages}&page=${currentPage}&key=34447371-d1c04ab6613d972420d21a436&image_type=photo&orientation=horizontal&per_page=12`)
          .then(res => res.json())
          .then(img => this.setState({ img }))
          .finally(() => this.setState({ loading: false }));
    }
  }

  handleLoadMore = () => {
    this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { img, loading } = this.state;

    return (
      <div className="image-gallery">
        {loading && <div>Завантажуємо...</div>}
        {/* {!img && <div>Неможливо відобразити зображення по цьому запиту</div>} */}
        {img && (
        <div>
          <div>{img.tags}</div>
          <ul>
            {img.hits.map((hit) => (
              <li key={hit.id} className="gallery-item">
                <img src={hit.webformatURL} alt="" width="250" />
              </li>
            ))}
          </ul>
            {!loading && img.length > 0 && (
            <button className="load-more-button" onClick={this.handleLoadMore}>
              Показати ще
            </button>
        )}
        </div>
      )}
        {!img && <div>Потрібно ввести назву для пошуку.</div>}
        {img && <div>{img.tags}</div>}
      </div>
      
    );
  }
};

export default ImageGallery;