import React from 'react';
import * as BooksAPI from './BooksAPI';
import Header from './components/header';
import BookShelf from './components/bookshelf';
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

  getBooksForShelf(shelfId) {
    return this.state.books.filter(book => book.shelf === shelfId);
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
        <div className="list-books">
          <Header title="MyReads" />
        </div>

        <div className="list-books-content">
          <BookShelf
            title="Currently Reading"
            books={this.getBooksForShelf('currentlyReading')}
            onShelfChange={this.handleShelfChange}
          />
          <BookShelf
            title="Want to Read"
            books={this.getBooksForShelf('wantToRead')}
            onShelfChange={this.handleShelfChange}
          />
          <BookShelf
            title="Read"
            books={this.getBooksForShelf('read')}
            onShelfChange={this.handleShelfChange}
          />
        </div>
      </div>
    );
  }
}

export default BooksApp;
