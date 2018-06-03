import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <li key={book.id}>
            <Book book={book} onShelfChange={props.onShelfChange} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default BookShelf;
