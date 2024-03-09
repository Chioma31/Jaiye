import Footer from "../../../components/footer";
import NavBar from "../../../components/navBar";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import {TbCurrencyNaira } from "react-icons/tb";
import { MdDone } from "react-icons/md";

const OrganiserDashboard = ()=> {

    const [action, setAction] = useState(0);

    const [ ticketBuyer, setTicketBuyer ] = useState([
        {
            id: 1,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },
        {
            id: 2,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },
        {
            id: 3,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },
        {
            id: 4,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },
        {
            id: 5,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },
        {
            id: 6,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },
        {
            id: 7,
            Name: 'Paul Silas',
            Email: 'Paul@gmail.com',
            Status: 'registered'
        },

    ])

    const [GrossSales , setGrossSales] = useState(45000)

    return(
        <>
            <NavBar />
            <div className="h-[72px] w-full"/>
            <div className="flex flex-col w-full py-10 px-3 gap-3">
                <div className="flex w-full h-[144px] gap-2">
                    <div className="flex flex-col w-full gap-1.5 shadow-md p-2">
                        
                    </div>
                    <div className="flex flex-col w-full justify-around items-center shadow-md py-1 px-1.5">
                        <div className="flex bg-[#FCEEEE] items-center justify-center rounded-full w-4 h-4">
                            <MdDone className="text-[#D20606] text-[8px]"/>
                        </div>
                        <div className="inline-flex items-center font-poppins font-normal text-[38px] text-black" >
                            <TbCurrencyNaira className="text-[38px]" />{GrossSales}
                        </div>
                        <div className="font-poppins font-normal text-sm text-[#353434]">
                            Gross sales
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <div className="flex flex-col w-full gap-4 shadow-md p-4">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex items-center w-full gap-2">
                                <div className="font-poppins font-normal text-sm text-[#858585]">
                                    Action ({action}) 
                                </div>
                                <div>
                                    <PiCaretDownBold className="text-sm text-[#858585]" />
                                </div>
                            </div>
                            <div className="flex items-center border-b pb-1 border-[#858585] gap-5 cursor-pointer">
                                <RiSearch2Line className="text-base"/>
                                <input className="bg-transparent outline-none placeholder:font-poppins placeholder:font-normal placeholder:text-sm placeholder:text-[#858585]"
                                    type="search" placeholder="Name, email, confirmation"
                                />
                            </div>
                        </div>
                        <div className="flex w-full items-end justify-between">
                            <div className="font-poppins font-medium text-black text-base">
                                NAME
                            </div>
                            <div className="font-poppins font-medium text-black text-base">
                                EMAIL
                            </div>
                            <div className="font-poppins font-medium text-black text-base">
                                STATUS
                            </div>
                        </div>
                    </div>
                    {ticketBuyer.map((ticket)=>(
                        <div className="flex w-full px-4 py-3 items-end justify-between shadow-md" key={ticket.id}>
                            <div className="font-poppins font-normal text-black text-base">
                                {ticket.Name}
                            </div>
                            <div className="font-poppins font-normal text-black text-base truncate">
                                {ticket.Email}
                            </div>
                            <div className="font-poppins font-normal text-black text-base">
                                {ticket.Status}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
            <Footer/>
        </>
    )
}

export default OrganiserDashboard;