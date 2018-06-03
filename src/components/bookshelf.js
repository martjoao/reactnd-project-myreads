import React from 'react';
import PropTypes from 'prop-types';

const BookShelf = props => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{props.title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.map(book => (
          <p>{book.title}</p>
        ))}
      </ol>
    </div>
  </div>
);

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookShelf;
