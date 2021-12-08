// Importing dependencies
import React from 'react'; 
import ReactDom from 'react-dom';

// CSS
import './index.css';




function BookList () {
  return (
    <section className="bookList"> 
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
      < Book/>
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'> 
      <Image />
      <Title />
      <Author />
    </article>
  )
};

const Image = () => (<img src="https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL254_SR254,254_.jpg" alt=""/>);

const Title = () => (
  <h1> Will </h1>
);

// Double curly braces to leave the js world to css
const Author = () => (<h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}> Unabriged </h4>)

ReactDom.render(<BookList />, document.getElementById('root'));