import React, { useContext } from 'react';
import './FilterColor.css';
import FilterInput from '../FilterInput/FilterInput';
import { AuthContext } from '../../../../Authprovider/Authprovider';

const FilterColor = () => {
    const { handleChange } = useContext(AuthContext);

    return (
        <div className=' mr-12'>
            <h2 className='sidebar-title'>COLOR</h2>
            <div>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test3" />
                    <span className='checkmark all'></span>All
                </label>
                <FilterInput
                    handleChange={handleChange}
                    value="black"
                    title="Black"
                    name="test3"
                    color="black"
                />
                <FilterInput
                    handleChange={handleChange}
                    value="red"
                    title="Red"
                    name="test3"
                    color="red"
                />
                <FilterInput
                    handleChange={handleChange}
                    value="blue"
                    title="Blue"
                    name="test3"
                    color="blue"
                />
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="white" name="test3" />
                    <span className='checkmark' style={{ backgroundColor: "white" }}></span>White
                </label>
            </div>
        </div>
    );
};

export default FilterColor;


// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test3" />
// <span className='checkmark'></span>All
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test3" />
// <span className='checkmark'></span>BLACK
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test3" />
// <span className='checkmark'></span>RED
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test3" />
// <span className='checkmark'></span>BLUE
// </label>
// <label className='sidebar-label-container'>
// <input className='text-red-500 bg-red-500' type="radio" name="test3" />
// <span className='checkmark'></span>WHITE
// </label>