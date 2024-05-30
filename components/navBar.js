
import Link from 'next/link';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState,Fragment } from 'react';
import { useAuth } from '../contexts/AuthContext';







function NavBar () {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpening = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const { user, logout } = useAuth();

  const navigation = [
    { name: 'Home', href: '/', to: 'home' },
    { name: 'About', href: '/about', to: 'about' },
    { name: 'Create Event', href: '/info', to: 'create' },
    { name: 'Help', href: '/help', to: 'help' },
    
  ];

  if (!user) {
    navigation.push({ name: 'Login', href: '/login', to: 'login' });
  } else {
    null
  }


  
  // const genericHamburgerLine = `h-1 w-10 mt-[7px] rounded-full bg-[#AEAEAE] transition ease transform duration-300`;


  return (
    <div className="px-6 py-3  2xl:px-28 top-0 z-40 fixed bg-black   w-full">
      <nav className="flex h-12 items-center   justify-between" aria-label="Global">
        <div className="flex py-2" aria-label="Global">
          <a href="/" className="lg:hidden block ">
            <Image
              className=" "
              height={80}
              width={60}
              src="/jaiye.png"
              alt=" Logo"
            />

          </a>
          <a href="/" className="hidden lg:block ">
            <Image
              className=" "
              height={80}
              width={120}
              src="/jaiye.png"
              alt=" Logo"
            />

          </a>
        </div>
        <div className=" flex-1 my-4 px-6 ">
          <div className="hidden lg:flex  xl:gap-8 lg:gap-6 gap-2 items-center  bg-[#353434] rounded-sm">
              <div className="text-[#353434]  ml-4 inset-0 m-auto w-4 h-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"     width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
              </div>
              <input 
                className="bg-[#353434] w-full
                focus:outline-none rounded-sm   
                 text-sm text-white   py-3" 
                type="text" 
                placeholder="Search Event"
             />
          </div>
          <div className="lg:hidden flex gap-2 items-center  bg-[#353434] rounded-sm">
              <div className="text-[#353434]  ml-3 inset-0 m-auto w-3 h-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"     width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={10} cy={10} r={7} />
                      <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
              </div>
              <input 
                className="bg-[#353434] w-full
                focus:outline-none rounded-sm   
                 text-sm text-white   py-2" 
                type="text" 
                placeholder="Search"
             />
          </div>
        </div>
        {/* 
          <div className='text-black' onClick={handleOpening}>
              {mobileMenuOpen
            ? (<XMarkIcon className="lg:h-18 lg:w-10 w-9 h-11 text-[#AEAEAE] font-bold" aria-hidden="true" />)
            : (<Bars3Icon className="lg:h-18 lg:w-10 w-9 h-11 text-[#AEAEAE] font-bold" aria-hidden="true" />)}
          </div> 
        */}
        <div className="flex items-center lg:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center  text-gray-400 hover:text-gray-600 ">
                <span className="sr-only">Open options</span>
                <Bars3Icon className="lg:h-18 hover:text-[#D20606]  lg:w-10 w-9 h-11 text-[#AEAEAE] font-bold" aria-hidden="true" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#535151] text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {navigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link 
                          href={item.href}
                          className={`
                          ${
                            active ? 'text-[#D20606]' : 'text-white'
                          } 
                          block px-4 py-2 text-sm text-white hover:bg-[#D20606]`
                        }
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item >
                  {!user ? 
                    <Link href="/signup" className="bg-[#D20606]  block sm:hidden rounded-sm  text-white m-3 px-4 text-sm py-[5px]">Sign Up</Link> 
                    :
                    <div onClick={logout} className="bg-[#D20606]  cursor-pointer block sm:hidden rounded-sm  text-white m-3 px-4 text-sm py-[5px]">Logout</div> 

                  }
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link href="/signup" className="bg-[#D20606]  sm:block hidden rounded-sm  text-white m-3 px-4 text-sm py-[5px]">Sign Up</Link>
        </div>

        <div className="hidden font-normal lg:flex text-lg lg:min-w-0 space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              to={item.to}
              activeclass="active"
              offset={-100}
              duration={900}
              className="text-white m-2 p-2"
            >
              {item.name}
            </Link>
          ))}

          {!user ? 
            <Link href="/signup" className="bg-[#D20606] rounded-sm  text-white m-3 px-8 py-[5px]">Sign Up</Link>
            :
            <div onClick={logout} className="bg-[#D20606] rounded-sm  text-white m-3 px-8 py-[5px]">logout</div>
          }
        </div>
      </nav>
      
    </div> 
  )
}

export default NavBar


    
