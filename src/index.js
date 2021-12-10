// Importing dependencies
import React from 'react'; 
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [
{
  author: "Unabriged",
  img: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
  title: "Will"
},
{
  author: "Unabriged",
  img: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
  title: "Will"
}
];

function BookList () {
  return ( 
    <section className="bookList"> 
    {books.map((book) => {
      const {img, title, author} = book;

      return (
        <Book book = {book}></Book>
      );
    })}
    </section>
  );
}  

const Book = (props) => {
  const {img, title, author} = props.book;
  console.log(props)
  return (
    <article className='book'> 
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>

    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));