import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../components/header';
import BookShelf from '../components/bookshelf';

const getBooksForShelf = (books, shelfId) =>
  books.filter(book => book.shelf === shelfId);

const Home = props => (
  <div>
    <div className="list-books">
      <Header title="MyReads" />
    </div>

    <div className="list-books-content">
      <BookShelf
        title="Currently Reading"
        books={getBooksForShelf(props.books, 'currentlyReading')}
        onShelfChange={props.onShelfChange}
      />
      <BookShelf
        title="Want to Read"
        books={getBooksForShelf(props.books, 'wantToRead')}
        onShelfChange={props.onShelfChange}
      />
      <BookShelf
        title="Read"
        books={getBooksForShelf(props.books, 'read')}
        onShelfChange={props.onShelfChange}
      />
    </div>
    <div className="open-search">
      <Link
        to="/search"
        title="Add a book"
        className="floating-button"
      >
        Add a book
      </Link>
    </div>

    <div className="clear-shelves">
      <link
        onClick={props.onClearShelves}
        title="Clear all shelves"
        className="floating-button"
      />
    </div>
  </div>
);

Home.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onShelfChange: PropTypes.func.isRequired,
  onClearShelves: PropTypes.func.isRequired,
};

export default Home;
