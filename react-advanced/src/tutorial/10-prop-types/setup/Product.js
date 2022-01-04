import React from 'react';
// Prop types to avoid errors of undefined properties from apis (eg).
// rafcp short hand for proptypes
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ id, image, name, price }) => {
  const imageUrl = image && image.url;
  return (
    <article className='product'>
      {/* Wouldn't work if done in this way ( <img src={image.url || defaultImage} alt={name} />)  becuase the image object is undefined, React will still throw back the error*/}
      <img src={imageUrl || defaultImage} alt={name} />
      <h4>{name} </h4>
      <p>${price || 3.99}</p>
    </article>
  );
};

// Working with propTypes and defaultProps
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: 'Single bed',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product;
