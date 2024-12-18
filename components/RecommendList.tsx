import Image from 'next/image';
// import ItemImage from '@assets/thumbnails/112/regular/thumb_112.jpg';
import BookmarkButton from './BookmarkButton';
import EntertainmentInfo from './entertainmets/EntertainmentInfo';
import { getAllEntertainments } from '@/utils/utils';

const RecommendList = async () => {
  const { entertainments, error } = await getAllEntertainments();

  if (error) {
    return <div>Failed to load data</div>;
  }

  if (!entertainments) {
    return <div>No entertainments available</div>;
  }

  return (
    <ul className='grid grid-cols-2 gap-4 mt-6 sm:grid-cols-3 md:mt-8 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-8 3xl:grid-cols-5'>
      {entertainments.map((entertainment) => (
        <li key={entertainment.id}>
          <div className='relative mb-2 rounded overflow-hidden'>
            <Image
              className='w-full h-auto'
              src={entertainment.image!}
              width={560}
              height={348}
              alt=''
            />
            <BookmarkButton className='md:right-4' />
          </div>
          <EntertainmentInfo entertainment={entertainment} />
        </li>
      ))}
      {/* //{' '}
      <li>
        //{' '}
        <div className='relative mb-2 rounded overflow-hidden'>
          // <Image className='w-full h-auto' src={ItemImage} width={560} height={348} alt='' />
          // <BookmarkButton className='md:right-4' />
          //{' '}
        </div>
        // <EntertainmentInfo />
        //{' '}
      </li> */}
    </ul>
  );
};

export default RecommendList;
