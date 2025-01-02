import Link from 'next/link';
import React from 'react';
import Allsection from './Component/home';

const HomePage = () => {
  return (
    <div>
      
      {/* <nav>
      <li><Link href="/about/onnopage">Onnopage</Link></li>
      
      </nav>
      <button className='bg-red-500'><li><Link href="/about/error">Onnopage</Link></li></button> */}
        <Allsection/>
    </div>
  );
};

export default HomePage;