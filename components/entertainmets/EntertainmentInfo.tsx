import Image from 'next/image';
import IconMovie from '@assets/icon-category-movie.svg';
import IconTvSeries from '@assets/icon-category-tv.svg';
import { cn } from '@/utils';
import { EnetertainmentProps } from '@/types';

const EntertainmentInfo = ({
  className = '',
  entertainment,
}: {
  className?: string;
  entertainment: EnetertainmentProps;
}) => {
  return (
    <div className={cn('w-full', className)}>
      <div className='flex items-center mb-1'>
        <span className='text-[12px] md:text-[15px] text-white/75 font-light'>{entertainment.year}・</span>
        <span className='flex items-center gap-[6px]'>
          {entertainment.type === 'movie' ? (
            <Image src={IconMovie} width={12} height={12} alt='' />
          ) : (
            <Image src={IconTvSeries} width={12} height={12} alt='' />
          )}
          <span className='text-[12px] md:text-[15px] text-white/75 font-light'>
            {entertainment.type}・
          </span>
        </span>
        <span className='text-[12px] md:text-[15px] text-white/75 font-light'>
          {entertainment.rating}
        </span>
      </div>
      <h3 className='text-[15px] md:text-[18px] text-white font-medium'>{entertainment.name}</h3>
    </div>
  );
};

export default EntertainmentInfo;
