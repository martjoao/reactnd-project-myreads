import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Home from './screens/home';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleShelfChange = this.handleShelfChange.bind(this);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(response => this.setState({ books: response }));
  }

  handleShelfChange(bookId, shelf) {
    const books = this.state.books.map((book) => {
      let newBook = null;
      if (book.id === bookId) {
        newBook = book;
        newBook.shelf = shelf;
      }
      return newBook || book;
    });
    this.setState({ books });
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
      </div>
    );
  }
}

export default BooksApp;
