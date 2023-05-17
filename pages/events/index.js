import Image from "next/image"
import Footer from "../../components/footer"
import NavBar from "../../components/navBar"
import Link from "next/link"

const Events = () => {
  return(
    <>
    <NavBar />
    <div className="flex lg:flex-row flex-col xl:gap-24 px-6 md:px-10 xl:px-48 ">
      <div className="lg:mb-20 mt-28 lg:mx-10  p-8  lg:w-2/4 border">
        <Image
          className=""
          height={500}
          width={700}
          src="/card.png"
          alt="Text"
        />
        <div className="pb-10 pt-3 lg:px-7 ">
        <div  className=" text-[#004E89] font-semibold pb-2 lg:text-4xl text-xl" >I have a Dreamstandup Event</div>
        <div className=" lg:text-lg text-sm font-medium flex pb-2  flex-wrap">The biggest celebration of Owerri artiste</div>
        <div className=" text-sm font-normal flex flex-wrap text-justify">The biggest celebration of African music and culture is here again. I have a dream standup, a festival that unites people both in Nigeria and diaspora, is back, bigger and better.In this festival, watch out as we bring SME business owners from all over the country to put on display not only their ready-made products but their homemade African products. There'll be many other events like spoken words, etc. We will also be crowning the vendor of the year.</div>
        </div>
        
        <Image
          className=""
          height={500}
          width={700}
          src="/map.png"
          alt="Text"
        />
        <div className="flex lg:flex-row flex-col w-full gap-5 pt-16">
          <Image
            className=""
            height={100}
            width={300}
            src="/card.png"
            alt="Text"
          />
          <Image
            className=""
            height={100}
            width={300}
            src="/card.png"
            alt="Text"
          />
        </div>
      </div>
      <div className="lg:mb-20 mb-10 lg:mt-28 mt-14 lg:w-1/4 h-1/4 px-8 pt-8 pb-14 border">
        <div className="pb-7">
          <div className=" text-xl font-medium pb-3" >Date</div>
          <div className="flex gap-2 text-[#858585] text-sm font-normal">
            <span>
              <Image
                className=""
                height={10}
                width={20}
                src="/date2.svg"
                alt="Text"
              />
            </span>
            Friday, November 25 2022</div>
        </div>
        <div className="pb-7">
          <div className=" text-xl font-medium pb-3">Time</div>
          <div className="flex gap-2 text-[#858585] text-sm font-normal">
           <span>
              <Image
                className=""
                height={10}
                width={20}
                src="/clock.svg"
                alt="Text"
              />
            </span>
            09:00am (GMT+1)Friday, November 25 2022</div>
        </div>
        <div className="pb-9">
          <div className=" text-xl font-medium pb-3">Location</div>
          <div className="flex gap-2 text-[#858585] text-sm font-normal">
            <span>
              <Image
                className=""
                height={10}
                width={20}
                src="/location.svg"
                alt="Text"
              />
            </span>
            Landmark event centre, Nekede Layout, Owerri</div>
        </div>
        <div className="border-t bg-black mb-3"></div>
        <div className='flex flex-col justify-center items-center '>
          <div className="text-[#D20606] font-medium">($20, 000-$50,000)</div>
          <Link href="/" className="bg-[#D20606] rounded-sm  text-lg font-semibold text-white m-2 px-16 py-[12px] mt-7">Buy Ticket</Link>
        </div>
        <div className="border-t bg-black mt-3"></div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Events