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
      < Book 
      img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      />
 
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'> 
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4> {author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));