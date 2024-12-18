'use client';

import Image from 'next/image';
import IconMovie from '@assets/icon-category-movie.svg';
import IconTV from '@assets/icon-category-tv.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import BookmarkButton from './BookmarkButton';
import { EnetertainmentProps } from '@/types';

const TrendingSlider = ({ entertainments }: { entertainments: EnetertainmentProps[] }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      breakpoints={{ 640: { spaceBetween: 40 } }}
      spaceBetween={16}
      className='!pr-4 !mt-4 sm:!pr-6 sm:!mt-6 lg:!pr-0'
    >
      {entertainments.map((entertainment) => {
        return (
          <SwiperSlide key={entertainment.id} className='!w-max'>
            <div className='relative w-60 h-[140px] overflow-hidden rounded sm:w-[470px] sm:h-[230px]'>
              <div className='absolute inset-0 bg-gradient-to-b from-black/0 to-black/75 z-10' />
              <Image src={entertainment.trendingImage!} className='object-cover' fill alt='' />
              <BookmarkButton className='md:right-6' />
              <div className='absolute bottom-4 left-4 z-20 w-full'>
                <div className='flex items-center mb-1'>
                  <span className='text-[12px] md:text-[15px] text-white/75 font-light'>
                    {entertainment.year}・
                  </span>
                  <span className='flex items-center gap-[6px]'>
                    {entertainment.type === 'movie' ? (
                      <Image src={IconMovie} width={12} height={12} alt='' />
                    ) : (
                      <Image src={IconTV} width={12} height={12} alt='' />
                    )}
                    <span className='text-[12px] md:text-[15px] text-white/75 font-light'>
                      {entertainment.type}・
                    </span>
                  </span>
                  <span className='text-[12px] md:text-[15px] text-white/75 font-light'>
                    {entertainment.rating}
                  </span>
                </div>
                <h3 className='text-[15px] md:text-[24px] text-white font-medium'>
                  {entertainment.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TrendingSlider;
