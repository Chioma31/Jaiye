/* eslint-disable react/function-component-definition */
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from '../components/navBar';
import Footer from '../components/footer';


const card = [
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
  {
    src:"/card.png", title: "I have a Dream standup Event", date:"Friday, November 25 2022 -2:00pm", location: "Ihiagwa, Owerri",
  },
]


function WebLandingPageViewbk2(props) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [fadeEffect, setFadeEffect] = useState(false);

  useEffect(() => {
    setFadeEffect(true);   
  }, []);

  
  
  return (
    <>
      <NavBar />
        <div className="h-[50px] "></div>

        <div  className="2xl:px-auto w-full h-screen ">
          {/* hero start */}
          <div className="relative w-auto lg:h-[88vh] h-[50vh] lg:bg-[url('/jaiye1.png')] bg-[url('/jaiye2.png')] bg-cover">
            {/* Black Filter */}
            <div className="absolute inset-0 bg-[#00000075] opacity-[96%]"></div>
          </div>

          {/* Image outside the container with opacity */}
          <div  
            className={` ${fadeEffect ? 'opacity-100 transition-opacity duration-[1500ms]' : 'opacity-0 transition-opacity duration-[1500ms]'}`}
          >
            <div className="hidden lg:flex px-6 2xl:px-28 absolute top-72  items-center justify-start">
              <Image
                className=""
                height={400}
                width={790}
                src="/text.png"
                alt="Text"
              />
            </div>
            <div className="lg:hidden  px-6 2xl:px-28 absolute top-60  flex items-center justify-start">
              <Image
                className=""
                height={400}
                width={290}
                src="/text.png"
                alt="Text"
              />
            </div>

          </div>

          
          {/* hero end */}
          <div className='bg-[#5B5B5B] p-5 2xl:px-80 lg:px-40 sm:px-10 px-3 flex justify-center text-white lg:gap-16 gap-4 items-center flex-wrap'>
            <div>Filter By</div>
            <div className=' border border-white py-4 '></div>
            <div className='flex gap-1'>
              <Image
                  className=""
                  height={10}
                  width={20}
                  src="/app.svg"
                  alt="icon"
                />
                <select className='bg-[#5B5B5B]'>
                  <option>Category</option>
                </select>
            </div>
            
            <div className='flex gap-1'>
              <Image
                  className=""
                  height={10}
                  width={20}
                  src="/Location.svg"
                  alt="icon"
                />
                <select className='bg-[#5B5B5B]'>
                  <option>Location</option>
                </select>
            </div>
            <div className='flex gap-1'>
              <Image
                  className=""
                  height={10}
                  width={20}
                  src="/date.svg"
                  alt="icon"
                />
                <select className='bg-[#5B5B5B]'>
                  <option>Date</option>
                </select>
            </div>
          </div>
          <div className='bg-black pb-20 lg:pt-0 pt-16 '>
            <div className='hidden lg:block '>
              <div className='lg:text-4xl text-3xl pt-20 pb-5 text-white text-center font-[500]'>Trending Events</div>

              <div className='flex justify-center items-center pb-14'>
                <div className='  bg-[#353434] px-10 h-1 rounded-full'></div>
                <div className='  bg-[#D20606] px-8 h-2 rounded-full'></div>
                <div className='  bg-[#353434] px-10 h-1 rounded-full'></div>
              </div>
            </div>

            <div className='bg-black px-6 md:px-20 xl:px-40 pb-9 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 '>
              {
                card.map((event) => (
                  <div className='bg-[#272727] rounded-sm shadow-xl  w-[100%] '>
                    <div className='relative overflow-hidden'>
                      
                      <a href='/events'>
                        <Image
                        className="w-full "
                        height={80}
                        width={300}
                        src={event.src}
                        alt=" Card Image"
                        />
                      </a>
                      <div
                        className='absolute rotate-45 top-9 -right-12 overflow-hidden '    
                      >
                        <div className="flex items-center justify-center rounded text-white py-2 px-12 text-xl font-bold bg-[#D20606] shadow-md " 
                          >
                          From: 10,000
                        </div>
                      </div>

                      
                    </div>
                  
                  <div className='text-white px-4 pb-6'>
                  <a href='/events'><div className='text-xl font-semibold py-3'>{event.title}</div></a>
                    <div className='flex gap-1 items-start text-[12px] pb-2'>
                      <Image
                      className=""
                      height={10}
                      width={20}
                      src="/date.svg"
                      alt="icon"
                      />
                    {event.date}</div>
                    <div className='flex gap-1 items-center text-[12px]'>
                      <Image
                      className=""
                      height={10}
                      width={20}
                      src="/Location.svg"
                      alt="icon"
                      />
                    {event.location}</div>
                  </div>
                  </div>
                ))
              }                               
            </div>

            <div className='hidden lg:block'>

              <div className='lg:text-4xl text-3xl pt-20 pb-5 text-white text-center font-[500]'>Other Events</div>

              <div className='flex justify-center items-center pb-14'>
                <div className='  bg-[#353434] px-10 h-1 rounded-full'></div>
                <div className='  bg-[#D20606] px-8 h-2 rounded-full'></div>
                <div className='  bg-[#353434] px-10 h-1 rounded-full'></div>
              </div>

              <div className='bg-black px-6 md:px-20 xl:px-40 pb-9 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 '>
                {
                  card.map((event) => (
                    <div className='bg-[#272727] rounded-sm shadow-xl  w-[100%] '>
                      <div className='relative overflow-hidden'>
                        
                        <a href='/events'>
                          <Image
                          className="w-full "
                          height={80}
                          width={300}
                          src={event.src}
                          alt=" Card Image"
                          />
                        </a>
                        <div
                          className='absolute rotate-45 top-9 -right-10 overflow-hidden '    
                        >
                          <div className="flex items-center justify-center rounded text-white py-2 px-12 text-xl font-bold bg-green-500 shadow-md " 
                            >
                            Free Event
                          </div>
                        </div>

                        
                      </div>
                    
                    <div className='text-white px-4 pb-6'>
                    <a href='/events'><div className='text-xl font-semibold py-3'>{event.title}</div></a>
                      <div className='flex gap-1 items-start text-[12px] pb-2'>
                        <Image
                        className=""
                        height={10}
                        width={20}
                        src="/date.svg"
                        alt="icon"
                        />
                      {event.date}</div>
                      <div className='flex gap-1 items-center text-[12px]'>
                        <Image
                        className=""
                        height={10}
                        width={20}
                        src="/Location.svg"
                        alt="icon"
                        />
                      {event.location}</div>
                    </div>
                    </div>
                  ))
                } 
              </div>                              
            </div>

            <div className=" lg:hidden  pt-10  flex items-center justify-center">
              <div>
                <nav className="isolate bg-white inline-flex -space-x-px rounded-sm shadow-sm" aria-label="Pagination">
                  <a
                    href="#"
                    className="relativebg-white inline-flex items-center rounded-l-md px-2 py-2 text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-[#D20606] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D20606]"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>

            <div className='hidden lg:flex  justify-center'>
            <Link href="/" className="bg-[#D20606] rounded-sm  text-lg font-semibold text-white m-3 px-16 py-[12px] mt-7">See More</Link>
            </div>
          </div>
          
          <Footer />
        </div>
    </>
  );
}

export default WebLandingPageViewbk2;









