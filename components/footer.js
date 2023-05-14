
import Image from 'next/image';





function Footer () {

  return (
   
    <footer  className="  w-full text-white bg-[#333333] ">
      <div className='px-6 2xl:px-72 flex  flex-col lg:flex-row   justify-between  pt-10 mb-20'>
        <div className=" lg:mb-0 pb-14">
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
        <div className='flex flex-col gap-4 justify-start lg:mb-0 pb-14'>
          <div className='text-2xl'>Services</div>
          <div className='flex -mt-2'>
            <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
            <div className='  bg-[#6b1010] px-10 py-[1px]'></div>
          </div>
          <div>Movie Ticket</div>
          <div>Event Ticket</div>
          <div>Seat Reservations</div>
        </div>
        <div className='flex flex-col gap-4 justify-start lg:mb-0 pb-14'>
          <div className='text-2xl'>Quick Links</div>
          <div className='flex -mt-2'>
            <div className='  bg-[#D20606] px-8 py-[2px] rounded-full'></div>
            <div className='  bg-[#6b1010] px-10 py-[1px]'></div>
          </div>
          <div>About Us</div>
          <div>Privacy Policy</div>
          <div>Terms and conditions</div>
        </div>
        <div className='flex flex-col gap-4 justify-start '>
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
      <div className='flex  justify-center text-center border-t border-[#D20606] flex-col items-center'>
        <div className="text-4xl font-bold  tracking-tight">
          <span className="text-lg text-[#fefefe] font-normal ">© Jaiye 2023</span>
        </div>
      </div>
    </footer>

  )
}

export default Footer



