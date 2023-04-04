/* eslint-disable react/function-component-definition */
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavBar from '../components/navBar';


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
  
  return (
    <div className="2xl:mx-auto 2xl:my-auto flex justify-center h-screen text-primary">

          <div className="2xl:px-auto w-full h-screen ">
            <div className=" " />
            {/* text on the slide start */}
            {/* hero start */}
            <div className=" w-full bg-[url('/image1.png')]  bg-cover ">
              <NavBar />
              <div className='px-6  2xl:px-28 py-56 flex items-center justify-start '>
                <Image
                  className=""
                  height={400}
                  width={700}
                  src="/text.png"
                  alt="Text"
                />
              </div>
            </div>
            {/* hero end */}
            <div className='bg-[#5B5B5B] p-5 2xl:px-80 lg:px-40 px-10 flex justify-center text-white gap-16 items-center'>
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
            <div className='bg-black pb-20'>
              <div className='text-4xl pt-20 pb-5 text-white text-center font-bold'>Trending Events</div>
              <div className='flex justify-center pb-14'>
                <div className='  bg-[#353434] px-10 py-[3px] rounded-full'></div>
                <div className='  bg-[#D20606] px-8 py-[4px] rounded-full'></div>
                <div className='  bg-[#353434] px-10 py-[3px] rounded-full'></div>
              </div>
              <div className='bg-black px-6 md:px-10 xl:px-40 3xl:px-72 pb-9 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 '>
                {
                  card.map((event) => (
                    <div className='bg-[#272727] rounded-sm shadow-xl  w-72 '>
                    <Image
                      className=" "
                      height={80}
                      width={300}
                      src={event.src}
                      alt=" Card Image"
                    />
                    <div className='text-white px-3 pb-6'>
                      <div className='text-xl font-semibold py-3'>{event.title}</div>
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
              <div className='text-4xl pt-20 pb-5 text-white text-center font-bold'>Other Events</div>
              <div className='flex justify-center pb-14'>
                <div className='  bg-[#353434] px-10 py-[3px] rounded-full'></div>
                <div className='  bg-[#D20606] px-8 py-[4px] rounded-full'></div>
                <div className='  bg-[#353434] px-10 py-[3px] rounded-full'></div>
              </div>
              <div className='bg-black px-6 md:px-10 xl:px-40 3xl:px-72 pb-9 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-10 '>
                {
                  card.map((event) => (
                    <div className='bg-[#272727] rounded-sm shadow-xl  w-72 '>
                    <Image
                      className=" "
                      height={80}
                      width={300}
                      src={event.src}
                      alt=" Card Image"
                    />
                    <div className='text-white px-3 pb-6'>
                      <div className='text-xl font-semibold py-3'>{event.title}</div>
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
              <div className='flex justify-center'>
              <Link href="/" className="bg-[#D20606] rounded-sm  text-lg font-semibold text-white m-3 px-16 py-[12px] mt-7">See More</Link>
              </div>
            </div>
            
            <footer  className=" z-10  w-full text-white bg-[#333333] ">
              <div className='px-6 2xl:px-72 flex justify-between  pt-10 pb-20'>
                <div className="">
                  <a href="/">
                    <Image
                      className="py-2 "
                      height={100}
                      width={100}
                      src="/jaiye.png"
                      alt=" Logo"
                    />
                  </a>
                  <div >Feel to reach or contact us <br/>on our social media handles </div>
                  <div className='flex gap-5'>
                    <a href="/">
                      <Image
                        className="mt-7 "
                        height={20}
                        width={20}
                        src="/ig.svg"
                        alt=" Logo"
                      />
                    </a>
                    <a href="/">
                      <Image
                        className="mt-7 "
                        height={20}
                        width={20}
                        src="/fb.svg"
                        alt=" Logo"
                      />
                    </a>
                    <a href="/">
                      <Image
                        className="mt-7 "
                        height={20}
                        width={20}
                        src="/tk.svg"
                        alt=" Logo"
                      />
                    </a>
                    <a href="/">
                      <Image
                        className="mt-7 "
                        height={20}
                        width={20}
                        src="/tw.svg"
                        alt=" Logo"
                      />
                    </a>

                  </div>
                </div>
                <div className='flex flex-col gap-4 justify-start'>
                  <div className='text-2xl'>Services</div>
                  <div className='flex -mt-2'>
                    <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
                    <div className='  bg-[#6b1010] px-10 py-[1px]'></div>
                  </div>
                  <div>Movie Ticket</div>
                  <div>Event Ticket</div>
                  <div>Seat Reservations</div>
                </div>
                <div className='flex flex-col gap-4 justify-start'>
                  <div className='text-2xl'>Quick Links</div>
                  <div className='flex -mt-2'>
                    <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
                    <div className='  bg-[#6b1010] px-10 py-[1px]'></div>
                  </div>
                  <div>About Us</div>
                  <div>Privacy Policy</div>
                  <div>Terms and conditions</div>
                </div>
                <div className='flex flex-col gap-4 justify-start'>
                  <div className='text-2xl'>Contact</div>
                  <div className='flex -mt-2'>
                    <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
                    <div className='  bg-[#6b1010] px-10 py-[1px]'></div>
                  </div>
                  <div className='flex gap-2 items-center '>
                      <Image
                      className=""
                      height={10}
                      width={20}
                      src="/place.svg"
                      alt="icon"
                      />
                    192, Ohio, USA
                  </div>
                  <div className='flex gap-2 items-center '>
                      <Image
                      className=""
                      height={10}
                      width={20}
                      src="/phone.svg"
                      alt="icon"
                      />
                    +011-456-789-23
                  </div>
                  <div className='flex gap-2 items-center '>
                      <Image
                      className=""
                      height={10}
                      width={20}
                      src="/email.svg"
                      alt="icon"
                      />
                    jaiye@gmail.com
                  </div>
                </div>  
                          
              </div>
              <div className='flex justify-center border-t border-[#D20606] flex-col items-center'>
                <div className="text-4xl font-bold  tracking-tight wrap">
                  <span className="text-lg text-[#fefefe] font-normal  wrap">© Jaiye 2023</span>
                </div>
              </div>
            </footer>
          </div>
    </div>
  );
}

export default WebLandingPageViewbk2;





