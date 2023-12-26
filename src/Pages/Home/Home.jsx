import React from 'react';
import HomeBanner from './HomeBanner/HomeBanner';
import NewCollection from './NewCollection/NewCollection';
import LifeStyle from './LifeStyle/LifeStyle';
import TrendingCollection from './TrendingCollection/TrendingCollection';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <NewCollection />
            <LifeStyle />
            <TrendingCollection />
        </div>
    );
};

export default Home;