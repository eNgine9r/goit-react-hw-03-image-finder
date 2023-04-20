import React, { Component } from 'react';

export class Searchbar extends Component {

  state = {
    images: '',
    currentPage: 1,
    loading: true,
    modalIsOpen: false
  };

  handleInputChange = e => {
    this.setState({ images: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.images.trim() === '') {
      alert('Введіть ключове слово, для пошуку зображення')
      return;
    }

    this.props.onSubmit(this.state.images);
    this.setState({ images: [] });
  };

  render () {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="buttoLabel" onClick={this.handleSubmit}>Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.images}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
  );
  }

};

export default Searchbar;