import React, { Component } from 'react';

export class Searchbar extends Component {

  state = {
    query: '',
  };

  handleInputChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Введіть ключове слово, для пошуку зображення')
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render () {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            Search
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
  );
  }

};

export default Searchbar;