import React, { useContext } from 'react';
import './FilterCategory.css';
import FilterInput from '../FilterInput/FilterInput';
import { AuthContext } from '../../../../Authprovider/Authprovider';

const FilterCategory = () => {
    const { handleChange } = useContext(AuthContext);

    return (
        <div className='mt-5'>
            <h2 className='sidebar-title'>CATEGORY</h2>
            <div>
                <label className="sidebar-label-container">
                    {/* <FilterInput onChange={handleChange} type="radio" value="" name="test" /> */}
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className='checkmark'></span>All
                </label>
                <FilterInput
                    handleChange={handleChange}
                    value="shirt"
                    title="Shirt"
                    name="test" />
                <FilterInput
                    handleChange={handleChange}
                    value="tshirt"
                    title="Tshirt"
                    name="test" />
                <FilterInput
                    handleChange={handleChange}
                    value="pant"
                    title="Pant"
                    name="test" />
                <FilterInput
                    handleChange={handleChange}
                    value="jacket"
                    title="Jacket"
                    name="test" />
                <FilterInput
                    handleChange={handleChange}
                    value="wallet"
                    title="Wallet"
                    name="test" />
                <FilterInput
                    handleChange={handleChange}
                    value="belt"
                    title="Belt"
                    name="test" />

                <FilterInput
                    handleChange={handleChange}
                    value="bag"
                    title="Bag"
                    name="test" />
            </div>
        </div>
    );
};

export default FilterCategory;

// i have use it first 

{/* <label className='sidebar-label-container'>
<input className='text-red-500 bg-red-500' type="radio" name="test" />
<span className='checkmark'></span>All
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>Shirt
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>Tshirt
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>pant
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>Jacket
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>Wallet
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>Belt
</label>
<label className='sidebar-label-container'>
<input type="radio" name="test" />
<span className='checkmark'></span>Bag
</label> */}