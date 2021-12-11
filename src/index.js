// Importing dependencies
import React from 'react'; 
import ReactDom from 'react-dom';

// CSS
import './index.css';

// JS Files
// Don't need js extensions 
import {books} from './books';
import {Book} from './Book' 

function BookList () {
  return ( 
    <section className="bookList"> 
    {books.map((book) => {
       return (
        <Book key={book.id} {...book}></Book>
      );
    })}
    </section>
  );
}  




ReactDom.render(<BookList />, document.getElementById('root'));