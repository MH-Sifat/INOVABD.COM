import React, { useContext } from 'react';
import './FilterPrice.css';
import FilterInput from '../FilterInput/FilterInput';
import { AuthContext } from '../../../../Authprovider/Authprovider';

const FilterPrice = () => {
    const { handleChange } = useContext(AuthContext);

    return (
        <>
            <div className='ml-5'>
                <h2 className='sidebar-title'>PRICE</h2>
                <div>
                    <label className="sidebar-label-container">
                        <input onChange={handleChange} type="radio" value="" name="test2" />
                        <span className='checkmark'></span>All
                    </label>
                    <FilterInput
                        handleChange={handleChange}
                        value={2000}
                        title="500-2000 TK"
                        name="test2"
                    />
                    <FilterInput
                        handleChange={handleChange}
                        value={4000}
                        title="2000-4000 TK"
                        name="test2"
                    />
                    <FilterInput
                        handleChange={handleChange}
                        value={5000}
                        title="over-4000 TK"
                        name="test2"
                    />
                </div>
            </div>
        </>
    );
};

export default FilterPrice;



// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test2" />
// <span className='checkmark'></span>All
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test2" />
// <span className='checkmark'></span>500-2000 <span className='text-red-500'>TK</span>
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test2" />
// <span className='checkmark'></span>2000-4000 <span className='text-red-500'>TK</span>
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test2" />
// <span className='checkmark'></span>Over-4000 <span className='text-red-500'>TK</span>
// </label>