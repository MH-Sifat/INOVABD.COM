import React from 'react';
import FilterCategory from './FilterCategory/FilterCategory';
import FilterPrice from './FilterPrice/FilterPrice';
import FilterColor from './FilterColor/FilterColor';
import './SidebarFilter.css';

const SidebarFilter = () => {

    return (
        <div className='sidebar'>
            <FilterCategory />
            <FilterPrice />
            <FilterColor />
        </div>
    );
};

export default SidebarFilter;