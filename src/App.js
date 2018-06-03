import React from 'react';
import * as BooksAPI from './BooksAPI';
import Header from './components/header';
import BookShelf from './components/bookshelf';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(response => this.setState({ books: response }));
  }

  getBooksForShelf(shelfId) {
    return this.state.books.filter(book => book.shelf === shelfId);
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <Header title="MyReads" />
        </div>

        <div className="list-books-content">
          <BookShelf title="Currently Reading" books={this.getBooksForShelf('currentlyReading')} />
          <BookShelf title="Want to Read" books={this.getBooksForShelf('wantToRead')} />
          <BookShelf title="Read" books={this.getBooksForShelf('read')} />
        </div>
      </div>
    );
  }
}

export default BooksApp;
