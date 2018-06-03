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
            <Book book={book} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BookShelf;
