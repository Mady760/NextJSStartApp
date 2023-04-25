import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
return <>
      <header>
       <nav className='sticky top-0 sm:flex justify-evenly bg-gray-300 p-2 grid grid-flow-row gap-2'>
       <div className='order-2 lg:order-1'>
          <input type="text" placeholder='Search...' className='shadow-lg rounded-lg w-64 p-2 outline-none'/>
        </div>
        <div className='order-1 text-center lg:font-bold text-3xl font-Logo sm:order-2'>
          <Link href='/'><h1>Dial <span className='text-rose-700'>Sink</span></h1></Link>
        </div>
        <div className='pt-2 grid gap-6 order-3 text-center lg:grid grid-flow-col'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Blog</Link>
            <Link href={'/'}>Service</Link>
            <Link href={'/'}>About</Link>
        </div>
       </nav>
       <div className='lg:h-[90vh] h-[35vh] opacity-90 flex justify-center'>
                <Image
                    src="/Images/header.4.jpg"
                    alt="Header.1"
                    width={'1400'}
                    height={'500'}
                />
            </div>
      </header>
</>
};

export default NavBar;
