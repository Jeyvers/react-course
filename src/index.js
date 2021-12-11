// Importing dependencies
import React from 'react'; 
import ReactDom from 'react-dom';

// CSS
import './index.css';
const books = [
{
  id: 1,
  author: "Unabriged",
  img: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
  title: "Will"
},
{
   id: 2,
  author: "Unabriged",
  img: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
  title: "Will"
}
];

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

const Book = (props) => {
  // Events in React
  // attribute, eventHandler
  // onClick, onMouseOver
  const {img, title, author} = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target)
    alert('hello world')
  };
  const complexExample = (author) => {
    console.log({author})
  }

  return (
    <article className='book'> 
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>
      <button type="button" onClick={clickHandler}>Reference</button>
      <button type="button" onClick={() => complexExample(author)}>More complex example</button>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));