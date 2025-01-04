import React from 'react';
import Link from 'next/link'

const AboutPage = () => {
   
    return (
        <div>
            
            <nav>
          <ul className="flex justify-center items-center gap-10">
            <li><Link href="/about/mission">Mission</Link></li>
            <li><Link href="/about/vission">Vission</Link></li>
            <li><Link href="/about/onnopage">Onnopage</Link></li>
          </ul>
        </nav>
        </div>
    );
};

export default AboutPage;