// Importing dependencies
import React from 'react'; 
import ReactDom from 'react-dom';

// CSS
import './index.css';
const firstBook = {
  author: "Unabriged",
  img: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg",
  title: "Will"
}

const author = 'Unabriged';
const title = 'Will';
const img = "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg";

function BookList () {
  return ( 
    <section className="bookList"> 
  {/* This method shows repitition */}
      < Book 
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      >
        {/* children */}
      <p>lorem20</p>
      </Book>

 
    </section>
  );
}

// children name is special
const Book = ({img, title, author, children}) => {
  // const {img, title, author} = props;
  return (
    <article className='book'> 
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>
      {children}
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));