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
    this.handleShelfChange = this.handleShelfChange.bind(this);
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

  fetchBooks() {
    this.setState({ loading: true });
    BooksAPI.getAll()
      .then(response => this.setState({ books: response, loading: false }))
      .catch(() => this.setState({ loading: false }));
  }

  handleShelfChange(book, shelf) {
    this.setState({ loading: true });

    BooksAPI.update(book, shelf)
      .then(() => this.fetchBooks())
      .catch(() => this.setState({ loading: false }));
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home books={this.state.books} onShelfChange={this.handleShelfChange} />
          )}
        />

        <Route
          exact
          path="/search"
          render={() => (
            <Search onShelfChange={this.handleShelfChange} />
          )}
        />

        {this.state.loading &&
          <div className="app-loading-overlay">
            <Spinner className="app-loading-spinner" name="circle" fadeIn="none" color="#60ac5d" />
          </div>
        }
      </div>
    );
  }
}

export default BooksApp;
