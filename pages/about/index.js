import Image from "next/image"
import Footer from "../../components/footer"
import NavBar from "../../components/navBar"
import Link from "next/link"

const About = () => {
  return(
    <>
    <NavBar />
      <div className=" w-full lg:bg-[url('/about.png')] bg-[url('/about.png')] bg-cover ">            
        <div className='px-6  2xl:px-28 lg:py-56 py-20 text-center font-semibold flex items-center justify-center text-white lg:text-6xl text-4xl tracking-wide lg:leading-[80px]  backdrop-blur-[2px]'>
          <h1>Discovering Events Online <br /> Made Easy with Jaiye  </h1>
        </div>
      </div>
      <div className='bg-white pb-20'>
          <div className='text-4xl pt-20 pb-5 text-black text-center font-medium'>About Us</div>
          <div className='flex justify-center pb-5'>
            <div className='  bg-[#771010] px-10 py-[2px] my-1'></div>
            <div className='  bg-[#D20606] px-8 py-[4px] rounded-full'></div>
            <div className='  bg-[#771010] px-10 py-[2px] my-1 '></div>
          </div>
          <div className='text-lg px-6 md:px-10 xl:px-60 pb-5 text-[#353434] text-center font-normal'>Jaiye is an event management  platform that allows anyone to create, find and attend events that fuel their passions and enrich their lives. From music festivals to movie premier. Our mission is to bring the world together through live experiences.
          </div>
          <div className='text-4xl pt-20 pb-5 text-black text-center font-medium'>Why Choose Us?</div>
          <div className="px-6 md:px-10 xl:px-60 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
            <div className="px-6 py-8 border shadow-md flex flex-col gap-2  flex-wrap">
              <Image
              className=""
              height={50}
              width={65}
              src="/user.svg"
              alt="icon"
              />
              <div className="font-normal text-[#353434] text-2xl">User Friendly Platform</div>
              <div className=" font-normal text-[#858585] text-sm">Jaiye provides a user friendly platform for all users making it easy for them to navigate through the site</div>
            </div>
            <div className="px-6 py-8 border shadow-md flex flex-col gap-2  flex-wrap">
              <Image
              className=""
              height={50}
              width={65}
              src="/ticket.svg"
              alt="icon"
              />
              <div className="font-normal text-[#353434] text-2xl">Easy Ticket Booking</div>
              <div className=" font-normal text-[#858585] text-sm">With Jaiye you can easily book and register for your favorite upcoming events and you would receive a QR code ticket via your email immediately</div>
            </div>
            <div className="px-6 py-8 border shadow-md flex flex-col gap-2  flex-wrap">
              <Image
              className=""
              height={50}
              width={65}
              src="/events.svg"
              alt="icon"
              />
              <div className="font-normal text-[#353434] text-2xl">Create/ Post Events</div>
              <div className=" font-normal text-[#858585] text-sm">Create and publish your events within minutes. Input the necessary details for your event such as Title, Date, Time, Location, Ticket category and all necessary details.</div>
            </div>
            <div className="px-6 py-8 border shadow-md flex flex-col gap-2  flex-wrap">
              <Image
              className=""
              height={50}
              width={65}
              src="/search.svg"
              alt="icon"
              />
              <div className="font-normal text-[#353434] text-2xl">Search and Analysis</div>
              <div className=" font-normal text-[#858585] text-sm">See analysis based on your recent searches with ease</div>
            </div>
            <div className="px-6 py-8 border shadow-md flex flex-col gap-2  flex-wrap">
              <Image
              className=""
              height={50}
              width={65}
              src="/money.svg"
              alt="icon"
              />
              <div className="font-normal text-[#353434] text-2xl">Money Refund Policy</div>
              <div className=" font-normal text-[#858585] text-sm">Easily get refund for your ticket upon cancellation after successful verification</div>
            </div>
            <div className="px-6 py-8 border shadow-md flex flex-col gap-2  flex-wrap">
              <Image
              className=""
              height={50}
              width={65}
              src="/money.svg"
              alt="icon"
              />
              <div className="font-normal text-[#353434] text-2xl">Money Refund Policy</div>
              <div className=" font-normal text-[#858585] text-sm">Easily get refund for your ticket upon cancellation after successful verification</div>
            </div>
          </div>

          <div className='text-xl mt-20  py-5 text-[#353434] text-center font-medium'>
          Ready to Discover your next events?
          </div>
          <div className='flex justify-center'>
            <Link href="/" className="bg-[#D20606] rounded-sm  text-lg font-semibold text-white m-3 px-16 py-[12px] mt-7">Discover Events</Link>
          </div>


        </div>
    <Footer />
    </>
  )
}

export default About