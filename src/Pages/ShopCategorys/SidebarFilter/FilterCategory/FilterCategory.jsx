import React from 'react';
import './FilterCategory.css';

const FilterCategory = () => {
    return (
        <>
            <h2 className='category-title'>CATEGORY</h2>
            <div>
                <label className='category-label-container'>
                    <input className='text-red-500 bg-red-500' type="radio" name="test" />
                    <span className='checkmark'></span>All
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>Shirt
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>Tshirt
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>pant
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>Jacket
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>Wallet
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>Belt
                </label>
                <label className='category-label-container'>
                    <input type="radio" name="test" />
                    <span className='checkmark'></span>Bag
                </label>
            </div>
        </>
    );
};

export default FilterCategory;