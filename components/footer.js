
import Image from 'next/image';





function Footer () {

  return (
   
    <footer  className="  w-full text-white bg-[#333333] ">
      <div className='px-6 md:px-20 xl:px-40 flex  sm:flex-row flex-col  justify-between  pt-10 mb-7'>
        <div className="hidden lg:block lg:mb-0 pb-14">
          <a href="/">
            <Image
              className="py-2 "
              height={100}
              width={120}
              src="/jaiye.png"
              alt=" Logo"
            />
          </a>
          <div className='pt-5' >Feel to reach or contact us <br/>on our social media handles </div>
          <div className='flex gap-5'>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/ig.svg"
                alt=" Logo"
              />
            </a>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/fb.svg"
                alt=" Logo"
              />
            </a>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/tk.svg"
                alt=" Logo"
              />
            </a>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/tw.svg"
                alt=" Logo"
              />
            </a>

          </div>
        </div>
        <div className='flex flex-col gap-4 justify-start lg:mb-0 pb-14'>
          <div className='sm:text-3xl text-xl'>Services</div>
          <div className='flex items-center '>
            <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
            <div className='  bg-[#6b1010] sm:px-14 px-8 h-[2px]'></div>
          </div>
          <div 
            className='flex flex-col items-start gap-6 pt-5'
          >
            <div>Movie Ticket</div>
            <div>Event Ticket</div>
            <div>Seat Reservations</div>
          </div>
          
        </div>
        <div className='flex flex-col gap-4 justify-start lg:mb-0 pb-14'>
          <div className='sm:text-3xl text-xl'>Quick Links</div>
          <div className='flex  items-center'>
            <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
            <div className='  bg-[#6b1010] sm:px-14 px-8 h-[2px]'></div>
          </div>
          <div 
            className='flex flex-col items-start gap-6 pt-5'
          >
            <div>About Us</div>
            <div>Privacy Policy</div>
            <div>Terms and conditions</div>
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-start '>
          <div className='sm:text-3xl text-xl'>Contact</div>
          <div className='flex item-center'>
            <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
            <div className='  bg-[#6b1010] sm:px-14 px-8 h-[2px]'></div>
          </div>
          <div 
            className='flex flex-col items-start gap-6 pt-5'
          >
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
                  
      </div>
      <div className=' border-t pb-3 border-[#D20606] '>
        <div className="hidden lg:flex pt-3  justify-center text-center text-4xl font-bold  tracking-tight">
          <span className=" text-[18px] tracking-wider text-[#fefefe] font-normal ">© Jaiye 2023</span>
        </div>
        <div className="lg:hidden block  py-4 px-6 md:px-20 xl:px-40 ">
          <a href="/">
            <Image
              className="py-2 "
              height={100}
              width={120}
              src="/jaiye.png"
              alt=" Logo"
            />
          </a>
          <div className=' text-lg tracking-wide' >Feel to reach or contact us <br/>on our social media handles </div>
          <div className='flex gap-5'>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/ig.svg"
                alt=" Logo"
              />
            </a>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/fb.svg"
                alt=" Logo"
              />
            </a>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/tk.svg"
                alt=" Logo"
              />
            </a>
            <a href="/">
              <Image
                className="mt-7 "
                height={20}
                width={30}
                src="/tw.svg"
                alt=" Logo"
              />
            </a>

          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer



