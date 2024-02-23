import Image from "next/image"
import CreateLayout from "../../components/createLayout"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Footer from "../../components/footer"
import Link from "next/link"


const Info = (props) => {
  return(
    <>
      <CreateLayout title="Basic Info">
      <form  className="px-6 lg:px-0">
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12">

            <div className="mt-10 flex flex-col gap-6 ">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-6">
                <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                  Event Title :
                </label>
                <div className="flex py-1.5 px-1 flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                  <input
                    type="text"
                    name=""
                    id=""
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full poppins col-span-6">
                <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                  Organizer :
                </label>
                <div className="flex py-1.5 px-1 flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                  <input
                    type="text"
                    name=""
                    id=""
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className=" flex lg:pl-[99px] w-full poppins mt-3 items-center gap-10 sm:gap-20 justify-between">
                <div className="w-full">
                  <select
                    id=""
                    name=""
                    autoComplete="name"
                    className="block w-full rounded-sm border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                  >
                    <option>Type</option>
                    <option>Entertainment</option>
                    <option>Music</option>
                    <option>Dance</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    id=""
                    name=""
                    autoComplete="name"
                    className="block w-full rounded-sm border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                  >
                    <option>Category</option>
                    <option>Entertainment</option>
                    <option>Music</option>
                    <option>Dance</option>
                  </select>
                </div>
              </div>
            
              <div className=" col-span-6">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Tags
                </label>
                <div className="text-sm py-1 font-normal leading-tight tracking-tight text-[#858585]">Increase discoverability of your event by adding tags relevant to the subject matter</div>
                <div className="mt-2 grid grid-cols-4 gap-5  ">
                  <div className="flex rounded-md shadow-sm ring-1 col-span-3 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="text"
                      name=""
                      id=""
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="input tags"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-[4px] col-span-1 px-3 py-1 bg-[#D20606] text-white hover:bg-white focus:outline-none focus:ring-2 hover:border hover:text-black hover:border-[#D20606] focus:ring-offset-2"
                    >
                    Add
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2  col-span-6">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus-within:ring-[#333333] sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Describe the nature of the event</p>
              </div>             
            </div>
          </div>
        </div>
        <div className="py-10">
          <div className="mx-auto max-w-7xl  ">
            <div className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Location</div>
          </div>
          <div className="text-sm py-3 font-normal leading-tight tracking-tight text-[#858585]">Help people discover your event and attendees know where to show up</div>
          <div className="flex lg:flex-row flex-col lg:items-center gap-4">
            <button
              type="submit"
              className="rounded-[4px] col-span-1 px-3 py-1 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#D20606] focus:ring-offset-2"
              >
              Venue
            </button>
            <button
              type="submit"
              className="rounded-[4px] col-span-1 px-3 py-1 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#D20606] focus:ring-offset-2"
              >
              Online event
            </button>
            <button
              type="submit"
              className="rounded-[4px] col-span-1 px-3 py-1 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#D20606] focus:ring-offset-2"
              >
              To be announced
            </button>
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
            Save
          </button>
          <Link href='/details'  className="text-sm font-semibold leading-6 text-gray-900">
            Next
          </Link>
        </div>
      </form>
      </CreateLayout>
    </>
  )
}

export default Info




