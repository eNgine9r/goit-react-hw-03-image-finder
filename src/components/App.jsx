import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';

import Searchbar from './Searchbar/Searchbar';
import ImageApi from '../services/Pixaby-api';
// import ImageGallery from 'components/ImageGallery';

export class App extends Component {

  state = {
    query: '',
    images: [],
    img: null,
    loading: false,
    currentPage: 1,
  }

  handleFormSubmit = query => {
    this.setState({query});
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, currentPage } = this.state;

  if (prevState.query !== query) {
    this.setState({ loading: true, img: null });
    
    ImageApi.fetchImage(query)
    fetch(`https://pixabay.com/api/?q=${query}&page=${currentPage}&key=34447371-d1c04ab6613d972420d21a436&image_type=photo&orientation=horizontal&per_page=12`)
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
    <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <div className="image-gallery">
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
    </div>
  );
  }

};
