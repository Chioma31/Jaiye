import Image from "next/image"
import Link from "next/link"
import CreateLayout from "../../components/createLayout"
import { useState } from "react"


const Ticket = (props) => {

  const [current , setCurrent]= useState(null)

  const [ticketSections, setTicketSections] = useState([{ id: 1 }]);

  const handleAddTicketSection = () => {
    const newId = ticketSections.length + 1;
    setTicketSections([...ticketSections, { id: newId }]);
  };

  const handleCurrent = (e, tag) =>{
    e.preventDefault()
    setCurrent(tag)
  }

  return(
    <>
      <CreateLayout title="Ticket">
        <div className="px-6 lg:px-1 mt-8">
          <div className="flex  items-center gap-10">
            <button
              onClick={(e)=> handleCurrent(e, "paid")}
              className={`rounded-[4px] col-span-1 px-9 py-1.5 hover:bg-[#D20606] hover:text-white  border  border-[#AEAEAE] 
                ${current === "paid" ? 'border-[#D20606] text-black' : 'bg-white text-black'} 
                `}
              >
              Paid
            </button>
            <button
              onClick={(e)=> handleCurrent(e, "free")}
              className={`rounded-[4px] col-span-1 px-9 py-1.5 hover:bg-[#D20606] hover:text-white  border  border-[#AEAEAE] 
                ${current === "free" ? 'border-[#D20606] text-black' : 'bg-white text-black'} 
                `}
              >
              Free
            </button>
          </div>

          <div className="space-y-12 ">
            <div className="border-b border-gray-900/10 pb-12">

              <div className="mt-10 flex flex-col gap-6 ">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-6">
                  <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                  Name:
                  </label>
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="text"
                      name=""
                      id=""
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full poppins col-span-6">
                  <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                  Available quantity:
                  </label>
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="text"
                      name=""
                      id=""
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                    />
                  </div>
                </div>

                
                  <div className=" lg:w-[65%]">
                    {ticketSections.map((section, index) => (
                      <div  id={`ticket${section.id}`} className=" lg:grid grid-cols-2 w-full  lg:gap-32 mt-3">
                        <div className="flex  items-center gap-4 w-full mb-8 poppins col-span-1">
                          <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                            Ticket type:
                          </label>
                          <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                            <select
                              id={`ticket${section.id}_type`}
                              name=""
                              autoComplete="name"
                              className="block w-full bg-white rounded-sm border-0 py-4 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                            >
                              <option></option>
                              <option>Entertainment</option>
                              <option>Music</option>
                              <option>Dance</option>
                            </select>
                          </div>
                        </div>
                        <div className="  w-full col-span-1">
                          <div className="flex items-center gap-4  poppins ">
                            <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                              Price:
                            </label>
                            <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                              <input
                                type="number"
                                name=""
                                id={`ticket${section.id}_price`}
                                autoComplete="username"
                                className="block flex-1 border-0 bg-transparent py-3 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="$"
                              />
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    ))}
                    <div 
                      onClick={handleAddTicketSection} 
                      className=" cursor-pointer text-right  font-[400] text-[#D20606] text-[14px] mt-3"
                    >
                      Other ticket types
                    </div>
                  </div>
                

                <div className=" flex items-center gap-3 mt-4">
                  <input
                    type="checkbox" 
                    className=" accent-[#248227] w-8 h-8"
                  />
                  <div>
                  <div className=" font-[400] text-[14px] ">Show ticket sale end dates and sale status at checkout</div>
                  </div>
                </div>
                <div className=" font-[400] text-[14px] mt-3">Ticket sales per day</div>
                <div className="flex sm:grid grid-cols-6 w-full poppins  items-center gap-2 sm:gap-10  justify-between">
                  <div className="col-span-2">
                    <select
                      id=""
                      name=""
                      autoComplete="name"
                      className="block w-full bg-white rounded-sm border-0 mr-3 py-5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                    >
                      <option>Minimum</option>
                      <option>Entertainment</option>
                      <option>Music</option>
                      <option>Dance</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <select
                      id=""
                      name=""
                      autoComplete="name"
                      className="block w-full bg-white rounded-sm border-0 py-5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                    >
                      <option>Maximum</option>
                      <option>Entertainment</option>
                      <option>Music</option>
                      <option>Dance</option>
                    </select>
                  </div>
                </div>
                <div className=" lg:grid grid-cols-6 w-full mt-5 poppins  items-center gap-10 sm:gap-20 justify-between">
                  <div className="col-span-4">
                    <select
                      id=""
                      name=""
                      autoComplete="name"
                      className="block w-full bg-white rounded-sm border-0 mr-3 py-5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                    >
                      <option>Sales channel</option>
                      <option>Entertainment</option>
                      <option>Music</option>
                      <option>Dance</option>
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