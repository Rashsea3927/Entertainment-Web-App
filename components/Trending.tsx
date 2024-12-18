import { getTrendEntertainments } from '@/utils/utils';
import TrendingSlider from './TrendingSlider';
import 'swiper/css';

const Trending = async () => {
  const { entertainments } = await getTrendEntertainments();

  const validEntertainments = entertainments ?? [];

  return (
    <section className='pl-4 mb-6 sm:pl-6 lg:mb-10 lg:pl-0'>
      <h2 className='text-[20px] md:text-[32px] text-neutral-0 font-light'>Trending</h2>
      <TrendingSlider entertainments={validEntertainments} />
    </section>
  );
};

export default Trending;
