import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const UvodCard = ({ text, image, href } : 
  { text: string; 
    image: string;
    href: string;}) => {
  return (
    <Link href={`/${href}`}>
      <span className="flex flex-col items-center">
        <Image 
          width={0} 
          height={0}
          src={`/img/${image}.svg`}
          alt={text}
          sizes="100vw"
          className='w-1/3 h-auto sm:w-1/4 md:w-1/2'
        />
        <h1 className="text-white text-xl mt-4 lg:text-2xl xl:text-3xl md:hover:underline">{text}</h1>
      </span>
    </Link>
  );
};

export default UvodCard;
