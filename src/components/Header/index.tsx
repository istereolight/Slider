import Logo from '../icons/logo';
import Login from '../icons/login';
import Link from 'next/link';

export const Header = () => {
  return (
    
      <div className='grid pb-4 pl-4 pt-4 lg:grid-cols-4 border-b-[2px] border-[#E1E1E1]'>
        <div className='flex justify-normal'>
          <div className='mr-4'> 
            <Logo />
          </div>

          <span className='sm:block hidden w-16 h-6 pt-[2px]'>
            STEMPS
          </span>
        </div>
      <div className='sm:flex hidden justify-start gap-5 pt-[2px]'>
          <div className='min-w-[67px]'>
            <Link href='/about'>
              О школе
            </Link>
          </div>
          <div>
            <Link href='/courses'>
              Курсы
            </Link>
          </div>
          <div className='pl-1'>
            <Link href='/library'>
              Библиотека
            </Link>
          </div>
        </div>
        
        <div className='sm:flex hidden col-start-4 justify-end pr-5'>
          <div className='pr-[17px] pt-[2px]'>
            <Link href='/loginform'>
              Вход
            </Link>
          </div>
          <Login />
        </div>
        <div className='sm:hidden flex col-start-4 justify-end pr-5'>
          <div className=''>
            <Link href='/'>
            <button type="button" className="text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-md px-2 py-1 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              Меню
            </button>
            </Link>
          </div>
        </div>
      </div>
  )
}
