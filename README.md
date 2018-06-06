This project was developed as the first programming assignment for the Udacity React Nanodegree program. Click [here](https://martjoao.github.io/reactnd-project-myreads/) to check it out.

----

# MyReads

Web app that manages a book shelf, categorizing books as 'currently reading', 'want to read' or 'read'. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Installation

To install the app, run the code:

```
$ npm install
```

## Development mode

Start the development server with the following command:

```
$ npm start
```

## Backend Server

The backend server was provided by Udacity, together with the API for accessing it. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.