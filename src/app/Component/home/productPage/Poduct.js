import React from 'react';
import Link from 'next/link';



const Page = () => {
    return (
        <div>
            top resturents
            <Link href="/about/mission"><button className="bg-red-400">clic me</button></Link>
            {/* <Link href={}><button>Click</button></Link> */}
           
            
        </div>
    );
};

export default Page;