import React from 'react';
import PropTypes from 'prop-types';

const Book = props => (
  <div className="book">
    <div className="book-top">
      <img
        className="book-cover"
        src={props.book.imageLinks.thumbnail}
        alt={`Cover for ${props.book.title}`}
      />
      <div className="book-shelf-changer">
        <select value={props.book.shelf} readOnly>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.authors.join(' and ')}</div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageLinks: PropTypes.objectOf(PropTypes.string).isRequired,
    shelf: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
