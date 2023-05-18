import Image from "next/image"
import Link from "next/link"
import CreateLayout from "../../components/createLayout"


const Ticket = (props) => {
  return(
    <>
      <CreateLayout title="Ticket">
        <div className="px-6 lg:px-1 mt-8">
          <div className="flex lg:flex-row flex-col lg:items-center gap-10">
            <button
              type="submit"
              className="rounded-[4px] col-span-1 px-8 py-1 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#D20606] focus:ring-offset-2"
              >
              Paid
            </button>
            <button
              type="submit"
              className="rounded-[4px] col-span-1 px-8 py-1 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#D20606] focus:ring-offset-2"
              >
              Free
            </button>
          </div>
          <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12">

              <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="sm:col-span-1  col-span-6">
                  <label  className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                      <input
                        type="text"
                        name=""
                        id=""
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent  py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-6">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Avalable Quantity
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                      <input
                        type="number"
                        name=""
                        id=""
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="avalable quantity"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-6">
                  <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                    Ticket Type
                  </label>
                  <div className="mt-2">
                    <select
                      id=""
                      name=""
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-[10px] px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                    >
                      <option>Entertainment</option>
                      <option>Music</option>
                      <option>Dance</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-1 col-span-6">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Price
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  ">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
                      <input
                        type="number"
                        name=""
                        id=""
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                        placeholder="avalable quantity"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-sm py-1 sm:col-span-2 col-span-6 font-normal flex gap-2 items-center leading-tight tracking-tight text-[#858585]">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className=" accent-[#D20606]"
                  />
                  Show ticket sale end dates and sale status at checkout</div>
                
                <div className="sm:col-span-1 col-span-6">
                  <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                    Ticket sales per day
                  </label>
                  <div className="grid grid-cols-2 lg:gap-10 gap-4">
                    <div className="sm:col-span-1 col-span-6">
                    <div className="mt-2">
                      <select
                        id=""
                        name=""
                        autoComplete="name"
                        className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                      >
                        <option>Maximum</option>
                        <option>100</option>
                        <option>50</option>
                      </select>
                    </div>
                    </div>
                    <div className="sm:col-span-1 col-span-6">
                      <div className="mt-2">
                        <select
                          id=""
                          name=""
                          autoComplete="name"
                          className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                        >
                          <option>Minimum</option>
                          <option>10</option>
                          <option>20</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  

                </div>
                
                <div className="sm:col-span-1 col-span-6">
                  <label htmlFor="" className="block text-sm font-medium leading-6 text-gray-900">
                    Sales channel
                  </label>
                  <div className="mt-2">
                    <select
                      id=""
                      name=""
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                    >
                      <option>Social Media</option>
                      <option>Physical</option>
                      <option>Onsite</option>
                    </select>
                  </div>
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
              Save
            </button>
            <Link href='/details'  className="text-sm font-semibold leading-6 text-gray-900">
              Next
            </Link>
          </div>
        </div>

      </CreateLayout>
    </>
  )
}

export default Ticket