import Image from 'next/image';
import Logo from '@assets/logo.svg';
import Avatar from '@assets/image-avatar.png';
import { HomeIcon, MoviesIcon, TvSeriesIcon, BookmarkIcon } from '@components/icons';
import Link from 'next/link';

const navItems = [
  { name: 'home', href: '/', icon: HomeIcon },
  { name: 'movies', href: '/movies', icon: MoviesIcon },
  { name: 'tv-series', href: '/tv-series', icon: TvSeriesIcon },
  { name: 'bookmarked', href: '/bookmarked', icon: BookmarkIcon },
];

const Header = () => {
  return (
    <header className='w-full xs:mt-6 lg:mt-0 lg:w-24 lg:sticky lg:top-8 lg:bottom-8 lg:h-[calc(100vh-64px)] lg:ml-8'>
      <div className='grid grid-cols-[auto_1fr_auto] items-center p-4 bg-blue-800 xs:rounded-lg xs:mx-6 xs:p-6 lg:mx-0 lg:h-full lg:grid-cols-none lg:grid-rows-[auto_1fr_auto] lg:px-0 lg:py-9 lg:rounded-2xl'>
        <h1 className='lg:justify-self-center lg:mb-18'>
          <Image src={Logo} alt='logo' width={25} height={20} />
        </h1>
        <nav className='justify-self-center lg:self-start'>
          <ul className='flex gap-6 items-center xs:gap-8 lg:flex-col lg:gap-10'>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href}>
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className='w-6 h-6 rounded-full border-[1px] border-neutral-0 xs:w-8 xs:h-8 lg:justify-self-center'>
          <Image src={Avatar} width={80} height={80} alt='Avatar' />
        </div>
      </div>
    </header>
  );
};

export default Header;
