import React from 'react';
// import * as BooksAPI from './BooksAPI'
import Header from './components/header';
import './App.css';

const BooksApp = () => (
  <div className="app">
    <div className="list-books">
      <Header title="MyReads" />
    </div>
  </div>
);

export default BooksApp;
