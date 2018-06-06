import React from 'react';
import { Route } from 'react-router-dom';
import Spinner from 'react-spinkit';

import * as BooksAPI from './BooksAPI';
import Home from './screens/home';
import Search from './screens/search';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
    this.clearShelves = this.clearShelves.bind(this);
    this.state = {
      books: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  shouldComponentUpdate() {
    return true;
  }

  async fetchBooks() {
    this.setState({ loading: true });
    try {
      const response = await BooksAPI.getAll();
      this.setState({ books: response });
    } finally {
      this.setState({ loading: false });
    }
  }

  async changeShelf(book, shelf) {
    this.setState({ loading: true });
    try {
      await BooksAPI.update(book, shelf);
      await this.fetchBooks();
    } finally {
      this.setState({ loading: false });
    }
  }

  async clearShelves() {
    if (!this.state.books || this.state.books.length === 0) return;
    this.setState({ loading: true });
    try {
      await Promise.all(this.state.books.map(book =>
        BooksAPI.update(book, 'none')));
      await this.fetchBooks();
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home
              books={this.state.books}
              onShelfChange={this.changeShelf}
              onClearShelves={this.clearShelves}
            />
          )}
        />

        {
          /*
           * The 'this.state.books' array is passed to Search screen
           * in order to properly select the current shelf on the dropdown
           */
        }
        <Route
          exact
          path="/search"
          render={() => (
            <Search books={this.state.books} onShelfChange={this.changeShelf} />
          )}
        />

        {this.state.loading &&
          <div className="app-loading-overlay">
            <Spinner
              className="app-loading-spinner"
              name="circle"
              fadeIn="none"
              color="#60ac5d"
            />
          </div>
        }
      </div>
    );
  }
}

export default BooksApp;
