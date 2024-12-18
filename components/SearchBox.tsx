'use client';

import Image from 'next/image';
import SearchIcon from '@assets/icon-search.svg';
import { usePathname } from 'next/navigation';

const SearchBox = () => {
  const pathname = usePathname();

  let placeholderText: string;

  switch (pathname) {
    case '/movies':
      placeholderText = 'Search for movies';
      break;
    case '/tv-series':
      placeholderText = 'Search for TV Series';
      break;
    case '/bookmarked':
      placeholderText = 'Search for bookmarked shows';
      break;
    default:
      placeholderText = 'Search for movies or TV Series';
  }

  return (
    <form className='flex items-center gap-4 px-4 mb-6 h-8 xs:mb-8 xs:px-6 md:h-12 md:items-start lg:mb-9 lg:px-0 lg:pr-9'>
      <Image
        className='w-6 h-6 md:w-8 md:h-8 lg:mt-0'
        src={SearchIcon}
        width={24}
        height={24}
        alt=''
      />
      <input
        type='text'
        className='w-full bg-transparent border-none text-white pb-1 caret-red-500 focus-within:outline-none focus-within:border-b-[1px] focus-within:border-blue-400 focus-within:border-solid placeholder:text-base md:pb-3 lg:pb-4 md:placeholder:text-[24px] md:pt-[1px] md:placeholder:font-light md:leading-tight md:text-[24px] lg:placeholder:text-[20px] lg:text-[20px]'
        placeholder={placeholderText}
      />
    </form>
  );
};

export default SearchBox;
