import Footer from "../../../components/footer";
import NavBar from "../../../components/navBar";
import Image from "next/image";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { MdDone } from "react-icons/md";

const AttendeeDashboard =()=> {

    const [activeTicket , setActiveTicket] = useState(5);
    const [registeredEvent , setRegisteredEvent] = useState(10);

    const [TicketList, setTicketList] = useState([
        {
            id:1,
            code: 'T1234',
            Name: 'Alleluia',
            Date: '16/11/23',
            Organiser: 'FUTO',
        },
        {
            id:2,
            code: 'T1234',
            Name: 'Alleluia',
            Date: '16/11/23',
            Organiser: 'FUTO',
        },
        {
            id:3,
            code: 'T1234',
            Name: 'Alleluia',
            Date: '16/11/23',
            Organiser: 'FUTO',
        },
        {
            id: 4,
            code: 'T1234',
            Name: 'Alleluia',
            Date: '16/11/23',
            Organiser: 'FUTO',
        },
        {
            id:5,
            code: 'T1234',
            Name: 'Alleluia',
            Date: '16/11/23',
            Organiser: 'FUTO',
        },
    ]);

    return (
        <>
            <NavBar/>
            <div className="h-[72px] w-full"/>
            <div className="flex flex-col w-full py-10 px-3 gap-3 overflow-hidden">
                <div className="flex w-full h-[144px] gap-2">
                    <div className="flex flex-col items-center justify-around w-full gap-1.5 shadow-md p-2">
                        <div className="flex bg-[#FCEEEE] items-center justify-center rounded-full w-4 h-4">
                            <Image src="/Tickett.svg" width={9} height={8} alt="/"/>
                        </div>
                        <div className="font-poppins font-normal text-[38px] text-black" >
                            {activeTicket}
                        </div>
                        <div className="font-poppins font-normal text-sm text-[#353434]">
                            Active Ticket
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-around w-full gap-1.5 shadow-md p-2">
                        <div className="flex bg-[#FCEEEE] items-center justify-center rounded-full w-4 h-4">
                            <MdDone className="text-[#D20606] text-[8px]"/>
                        </div>
                        <div className="font-poppins font-normal text-[38px] text-black" >
                            {registeredEvent}
                        </div>
                        <div className="font-poppins font-normal text-sm text-[#353434]">
                            Registered Events
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center w-[60%] border-b pb-1 border-[#858585] gap-5 cursor-pointer">
                        <RiSearch2Line className="text-base"/>
                        <input className="bg-transparent outline-none placeholder:font-poppins placeholder:font-normal placeholder:text-sm placeholder:text-[#858585]"
                            type="search" placeholder="Name, organizers, code"
                        />
                    </div>
                    <div className="flex w-full overflow-auto">
                        <div className="flex w-fit items-center gap-2">
                            <div className="flex items-center px-2 py-4 gap-3 border border-[#AEAEAE]">
                                <div className="flex items-center">
                                    <div className="font-poppins font-normal text-sm text-[#858585]">
                                        Ticket category:
                                    </div>
                                    <div className=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <div className="flex w-full justify-between px-2 py-4 items-center shadow-md">
                        <div className="font-inter font-medium text-black text-sm">
                            Ticket code
                        </div>
                        <div className="font-inter font-medium text-black text-sm">
                            Ticket name
                        </div>
                        <div className="font-inter font-medium text-black text-sm">
                            Created
                        </div>
                        <div className="font-inter font-medium text-black text-sm">
                            Organisers
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        {TicketList.map((List)=>(
                            <div className="flex w-full justify-between p-4 shadow-md" key={List.id}>
                                <div className="font-inter font-normal text-black text-sm">
                                    {List.code}
                                </div>
                                <div className="font-inter font-normal text-black text-sm">
                                    {List.Name}
                                </div>
                                <div className="font-inter font-normal text-black text-sm">
                                    {List.Date}
                                </div>
                                <div className="font-inter font-normal text-black text-sm">
                                    {List.Organiser}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default AttendeeDashboard