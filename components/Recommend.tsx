import RecommendList from './RecommendList';

const Recommend = () => {
  return (
    <section className='px-4 sm:px-6 lg:pl-0 lg:pr-9'>
      <h2 className='text-[20px] md:text-[32px] text-neutral-0 font-light'>Recommended for you</h2>
      <RecommendList />
    </section>
  );
};

export default Recommend;
