import Image from "next/image"
import CreateLayout from "../../components/createLayout"


const Publish = (props) => {
  return(
    <>
      <CreateLayout title="Publish Event">
        <div className="px-6 lg:px-1 mt-8 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-8 h-2/6"> 
            <div className="">
              <Image
              className=""
              height={300}
              width={300}
              src='/card.png'
              alt=" Card Image"
              />
            </div>
            
            <div className="border shadow-md flex flex-col justify-center p-4 lg:pl-20 lg:pr-40">
              <div className="text-2xl py-1 text-black font-semibold ">Lets dance</div>
              <div className="text-sm py-1 text-black font-normal ">Thursday, January 19, 2023 at 7:00 PM WAT 21 3rd Avenue, A Close, Lagos, LA 102102</div>
            </div>
              
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="text-3xl py-1 mt-6 text-black font-semibold ">Who can see your event</div>
              
              <div className="text-sm py-4  font-normal flex gap-1 items-center leading-tight tracking-tight text-[#858585]">
              
                <input
                  type="radio"
                  name=""
                  id=""
                  className=" accent-[#D20606] w-4"
                />
                <div >
                  <p className="text-lg font-medium text-black">Public</p>
                  <p>shared on platform</p>
                </div>
              </div>
              <div className="text-sm  font-normal flex gap-1 items-center leading-tight tracking-tight text-[#858585]">
              
                <input
                  type="radio"
                  name=""
                  id=""
                  className=" accent-[#D20606] w-4"
                />
                <div >
                  <p className="text-lg font-medium text-black">Private</p>
                  <p>only available to a selected audience</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-3xl py-1 mt-6 text-black font-semibold ">When should we publish your event</div>
              
              <div className="text-sm py-4  font-normal flex gap-1 items-center leading-tight tracking-tight text-[#858585]">
              
                <input
                  type="radio"
                  name=""
                  id=""
                  className=" accent-[#D20606] w-4"
                />
                <div >
                  <p className="text-lg font-medium text-black">Publish now</p>
                </div>
              </div>
              <div className="text-sm  font-normal flex gap-1 items-center leading-tight tracking-tight text-[#858585]">
              
                <input
                  type="radio"
                  name=""
                  id=""
                  className=" accent-[#D20606] w-4"
                />
                <div >
                  <p className="text-lg font-medium text-black">Schedule for later</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#D20606] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#9d0606] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D20606]"
            >
              Publish
            </button>
        </div>
        </div>

      </CreateLayout>
    </>
  )
}

export default Publish