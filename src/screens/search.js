import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import * as BooksAPI from '../BooksAPI';
import Book from '../components/book';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  searchBooks(query) {
    BooksAPI.search(query)
      .then(response => this.setState({ books: response }));
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
              Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={e => this.searchBooks(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book => (
              <li key={book.id}>
                <Book book={book} onShelfChange={this.props.onShelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onShelfChange: PropTypes.func.isRequired,
};

export default Search;
