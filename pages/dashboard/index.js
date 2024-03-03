
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import { useState } from "react";
import Calendar from 'react-calendar'; 
import Image from "next/image";
import 'react-calendar/dist/Calendar.css';
import { ArrowRightIcon, } from "@heroicons/react/24/outline";
import {PiNotePencilDuotone, PiCaretDownBold} from 'react-icons/pi';
import {RxTrash} from 'react-icons/rx';
import { TbCurrencyNaira } from "react-icons/tb";



const AdminDashboard =()=> {

    const [calendarValue, CurrentDate] = useState(new Date());
    
    const [UsersData, setUsersData] = useState(
        {
            RegisterUserData: 532,
            ThisMonth: 50,
            LastMonth: 100,
        })

    const [eventData, setEventData] = useState([
        {
            id: 1,
            Event: 'I have a dream standup event',
            picture: '/event-dashboard.jpg',
            date: '03/09/23 - 05/09/23'
        },
        {
            id: 2,
            Event: 'I have a dream standup event',
            picture: '/event-dashboard.jpg',
            date: '03/09/23 - 05/09/23'
        },
        {
            id: 3,
            Event: 'I have a dream standup event',
            picture: '/event-dashboard.jpg',
            date: '03/09/23 - 05/09/23'
        },
        {
            id: 4,
            Event: 'I have a dream standup event',
            picture: '/event-dashboard.jpg',
            date: '03/09/23 - 05/09/23'
        },
    ])
    const [recentUserData, setRecentUserData] = useState([
        {
            id: 1,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 2,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 3,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 4,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 5,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 6,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 7,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
        {
            id: 8,
            name: 'Okoro Ebube', gender:'Female',
            picture: '/event-dashboard.jpg',
            date: '06/04/2023'
        },
    ])

    const [netSales, setNetSales] = useState([

        {
            id: 1,
            parameter: "Gross sales",
            amount: 1200,
        },
        {
            id: 2,
            parameter: "Ticket sold",
            amount: 500,
        },
        {
            id: 3,
            parameter: "Page views",
            amount: 1001,
        },
    ])
    

    return (
        <>
            <NavBar />
            <div className="h-[72px] w-full"/>
            <div className="flex flex-col w-full py-10 px-3 gap-3">
                <div className="flex w-full gap-2">
                    <div className="flex flex-col w-full gap-1.5 shadow-md px-2 pt-2 pb-4">
                        <div className=" font-poppins font-medium text-sm text-black">
                            Users
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <div className="flex w-full bg-[#6DD3CE] py-1 px-2 justify-between">
                                <div className=" font-poppins font-normal text-xs text-black line-clamp-1">
                                    RegisteredUsersData
                                </div>
                                <div className="font-poppins font-normal text-xs text-black">
                                    {UsersData.RegisterUserData}
                                </div>
                            </div>
                            <div className="flex w-full bg-[#726DA8] py-1 px-2 justify-between">
                                <div className="font-poppins font-normal text-xs text-black">
                                    This Month
                                </div>
                                <div className="font-poppins font-normal text-xs text-black">
                                    {UsersData.ThisMonth}
                                </div>
                            </div>
                            <div className="flex w-full bg-[#7D8CC4] py-1 px-2 justify-between">
                                <div className="font-poppins font-normal text-xs text-black">
                                    Last Month
                                </div>
                                <div className="font-poppins font-normal text-xs text-black">
                                    {UsersData.LastMonth}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full shadow-md py-1 px-1.5">
                        <div className="flex w-full h-full">
                            {/* <Calendar
                                onChange={CurrentDate} 
                                value={calendarValue} 
                            />  */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full shadow-md px-2 py-3 gap-4">
                    <div className="font-poppins font-medium text-sm text-black">
                        Events
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        {eventData.map((event) => (
                            <div className="flex w-full justify-between items-center" key={event.id}>
                                <div className="flex w-full gap-1.5 items-center">
                                    <div className="flex w-9 h-9 items-center rounded-full overflow-clip">
                                        <Image src={event.picture}
                                            width={40}
                                            height={40}
                                            alt="/"
                                        />
                                    </div>
                                    <div className="flex flex-col w-fit h-full gap-1.5 items-start">
                                        <div className="font-poppins font-medium text-sm text-[#726DA8]">
                                            {event.Event}
                                        </div>
                                        <div className="font-poppins font-medium text-xs text-[#353434]">
                                            {event.date}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <PiNotePencilDuotone className="text-base text-[#726DA8]"/>
                                    </div>
                                    <div>
                                        <RxTrash className="text-base text-[#726DA8]"/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="flex w-full items-center justify-center p-2.5 bg-[#D20606] font-poppins font-semibold text-sm text-[#FAFAFA]">
                        Create Events <ArrowRightIcon className="mx-2 text-[#FAFAFA] w-6 h-6"/>
                    </button>
                </div>
                <div className="flex w-full gap-2">
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex flex-col h-[70%] shadow-md p-2">
                            <div className="font-poppins font-medium text-sm text-black">
                                Quick Stats
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-3 h-[30%] shadow-md p-2">
                            <div className="flex w-full justify-between">
                                <div className="font-poppins font-medium text-sm text-black">
                                    Net sales
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="font-poppins font-normal text-[8px] text-[#0C0B0B]">
                                       {new Date().toLocaleDateString()}
                                    </div>
                                    <div>
                                        <PiCaretDownBold className="text-[10px] text-[#D20606]" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2.5">
                                {netSales.map((netSale)=> (
                                    <div className="flex items-center gap-3" key={netSale.id}>
                                        <div className="w-[40%] font-poppins font-normal text-xs text-black">
                                            {netSale.parameter}
                                        </div>
                                        <div className="w-3 h-0.5 bg-[#D20606]"/>
                                        <div className="inline-flex w-[40%] items-center justify-start font-poppins font-normal text-xs text-black">
                                            <TbCurrencyNaira />{netSale.amount}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-1.5 shadow-md px-2 pt-2 pb-4">
                        <div className="font-poppins font-medium text-sm text-black">
                            Recent users
                        </div>
                        <div className="flex flex-col w-full gap-3">
                            {recentUserData.map((recentUser) => (
                                <div className="flex w-full items-center" key={recentUser.id}>
                                    <div className="flex w-full gap-1.5 items-center">
                                        <div className="flex w-6 h-6 items-center rounded-full overflow-clip">
                                            <Image src={recentUser.picture}
                                                width={40}
                                                height={40}
                                                alt="/"
                                            />
                                        </div>
                                        <div className="flex flex-col w-full h-full items-start">
                                            <div className="font-poppins font-medium text-sm text-black">
                                                {recentUser.name}
                                            </div>
                                            <div className="flex w-full justify-between items-center">
                                                <div className="font-poppins font-normal text-[10px] text-[#353434]">
                                                    {recentUser.gender}
                                                </div>
                                                <div className="font-poppins font-normal text-[8px] text-[#353434]">
                                                    {recentUser.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AdminDashboard;