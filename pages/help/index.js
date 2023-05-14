import Image from "next/image"
import Footer from "../../components/footer"
import NavBar from "../../components/navBar"

const Help = () => {
  return(
    <>
    <NavBar />
      <div className="bg-[#AF0505] pb-8 pt-4">
        <div className='text-4xl pt-20 pb-5 text-white text-center font-medium'>Jaiye Help Centre</div>
        <div className='text-lg  text-white text-center font-normal'>Get answers to your to your questions
        </div>
      </div>
      <div className="px-6 md:px-10 xl:px-60 grid my-20 sm:grid-cols-2 grid-cols-1 gap-6 ">
        <div className="p-14 shadow-md flex flex-col gap-2 justify-center items-center  flex-wrap">
          <Image
          className=""
          height={50}
          width={65}
          src="/help1.svg"
          alt="icon"
          />
          <div className="font-normal pt-1 text-[#353434] text-2xl">Account</div>
        </div>
        <div className="p-14 shadow-md flex flex-col gap-2 justify-center items-center  flex-wrap">
          <Image
          className=""
          height={50}
          width={65}
          src="/help2.svg"
          alt="icon"
          />
          <div className="font-normal pt-1 text-[#353434] text-2xl">Privacy Policies</div>
        </div>
      </div>
      <div className="px-6 md:px-10 xl:px-60 pb-28 bg-white">
        <div className='text-lg  text-[#0C0B0B] mb-8 font-normal'>Still have questions?, email us <span className="text-[#D20606]">jaiyeteams@gmail.com </span>or send drop your question below
        </div>
        <div className="flex sm:flex-row  flex-col sm:gap-0 gap-4  mb-14">
          <input type="text" id="help" name="help" placeholder="Your questions" className="border border[#AEAEAE] p-2"/>
          <button className="bg-[#D20606] rounded-sm  text-lg font-semibold text-white px-4 py-2">submit</button>
        </div>
        

        <div className='text-lg  text-[#0C0B0B] mb-5 font-normal'>Reach out to Us on our Social media accounts
        </div>
        <div className='flex gap-8'>
          <a href="/">
            <Image
              className="mt-7 "
              height={40}
              width={40}
              src="/ig2.svg"
              alt=" Logo"
            />
          </a>
          <a href="/">
            <Image
              className="mt-7 "
              height={40}
              width={40}
              src="/fb.svg"
              alt=" Logo"
            />
          </a>
          <a href="/">
            <Image
              className="mt-7 "
              height={40}
              width={40}
              src="/tk2.svg"
              alt=" Logo"
            />
          </a>
          <a href="/">
            <Image
              className="mt-7 "
              height={40}
              width={40}
              src="/tw2.svg"
              alt=" Logo"
            />
          </a>
        </div>
      </div>
      
    <Footer />
    </>
  )
}

export default Help