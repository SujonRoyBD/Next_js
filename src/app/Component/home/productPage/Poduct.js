import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div>
            top resturent
            <Link href="/about/mission"><button className="bg-red-400">clic me</button></Link>
        </div>
    );
};

export default Page;