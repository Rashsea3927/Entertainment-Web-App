import Image from 'next/image';
import SearchIcon from '@assets/icon-search.svg';

const SearchBox = () => {
  return (
    <form className='flex items-center gap-4 px-4 mb-6 h-8 xs:mb-8 xs:px-6 md:h-12 md:items-start lg:mb-9 lg:px-0 lg:pr-9'>
      <button type='submit' className='block xs:w-8 xs:h-8'>
        <Image
          className='w-full h-auto md:-mt-3 lg:mt-0'
          src={SearchIcon}
          width={24}
          height={24}
          alt=''
        />
      </button>
      <input
        type='text'
        className='w-full bg-transparent border-none text-white pb-1 caret-red-500 focus-within:outline-none focus-within:border-b-[1px] focus-within:border-blue-400 focus-within:border-solid placeholder:text-base md:placeholder:text-2xl md:leading-none lg:placeholder:text-[20px] lg:text-[20px] md:pb-4'
        placeholder='Search for movies or TV Series'
      />
    </form>
  );
};

export default SearchBox;
