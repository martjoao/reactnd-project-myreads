import React from 'react';
import PropTypes from 'prop-types';
import bookPlaceholder from '../images/book_placeholder.jpg';

const Book = props => (
  <div className="book">
    <div className="book-top">
      <img
        className="book-cover"
        src={(props.book.imageLinks && props.book.imageLinks.thumbnail) || bookPlaceholder}
        alt={`Cover for ${props.book.title}`}
      />

      <div className="book-shelf-changer">
        <select
          value={props.book.shelf || 'none'}
          onChange={event => props.onShelfChange(props.book, event.target.value)}
        >
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors && props.book.authors.join(' and ')}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.objectOf(PropTypes.string),
    shelf: PropTypes.string,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default Book;
