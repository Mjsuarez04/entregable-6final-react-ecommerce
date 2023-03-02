import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/cardProduct.css'

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <article className='product' onClick={handleClick}>
      <header className='product__header'>
        <img className='product__img' src={product.images[0].url} alt="" />
      </header>
      <section className='product__body'>
        <header className='produc__titles'>
          <h3 className='product__brand'>{product.brand}</h3>
          <h2 className='product__name'>{product.title}</h2>
        </header>
        <div>
          <label className='product__price-label'>Price</label>
          <div className='product__price-number'>{product.price}</div>
        </div>
        <div>
          <button className='product__btn'>
            <i className="bx bx-cart"></i>
          </button>
        </div>
      </section>
    </article>
  );
}

export default CardProduct