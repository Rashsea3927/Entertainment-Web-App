import { cn } from '@/utils';
import BookmarkIcon from './icons/BookmarkIcon';

const BookmarkButton = ({ className }: { className: string }) => {
  return (
    <button
      type='button'
      className={cn(
        'group hover:bg-neutral-0 absolute top-2 right-2 md:top-4 z-20 w-8 h-8 bg-blue-900/50 rounded-full grid place-items-center',
        className
      )}
    >
      <BookmarkIcon />
    </button>
  );
};

export default BookmarkButton;
