import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      home pag
      <nav>
      <li><Link href="/about/onnopage">Onnopage</Link></li>
      
      </nav>
      <button className='bg-red-500'><li><Link href="/about/error">Onnopage</Link></li></button>

    </div>
  );
};

export default HomePage;