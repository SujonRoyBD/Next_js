import React from 'react';
import TopPage from './topResturent/Topresturent';
import Page from './productPage/Poduct';

const Allsection = () => {
    return (
        <div>
        <section>
            <TopPage/>
            <Page/>
        </section>
        </div>
    );
};

export default Allsection;