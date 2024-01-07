import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { id, productName, productCategory,oldPrice, newPrice, image, price } = product;

    return (
        <div>
            <div className='item'>
                <div className='img-box'>
                    <Link><img src={image} alt="" /></Link>
                </div>

                {/* <Link to={`/product/${id}`}><img src={image} alt="" /></Link> */}
                {/* <div className='overlay'>
                    <div className='button-container'>
                        <button onClick={() => { addToCart(props.id) }}><img src="../../../src/assets/images/cart_icon.png" alt="" /></button>
                     <Link to={`/product/${props.id}`}><img src="../../../src/assets/images/cart_icon.png" alt="" /></Link>
                    </div>
                </div> */}

                <Link><p className='font-medium hover:text-red-500'>{productName}</p></Link>
                <Link><p className='font-medium hover:text-red-500'>{productCategory}</p></Link>
                <div className='item-prices'>
                    {
                        price ?
                            <div className="item-price">
                                Tk. {price}
                            </div> : null
                    }
                    {
                        newPrice ? <div className="item-price-new">
                            Tk. {newPrice}
                        </div> : null
                    }
                    {
                        oldPrice ? <div className="item-price-old">
                            Tk. {oldPrice}
                        </div> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;