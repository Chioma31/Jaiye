
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useState } from 'react';



const navigation = [
  { name: 'Home', href: '/#report', to: 'report' },
  { name: 'About', href: '/#papers', to: 'papers' },
  { name: 'Create Event', href: '/#rep', to: 'rep' },
  { name: 'Help', href: '/#rep', to: 'rep' },
  { name: 'Login', href: '/#rep', to: 'rep' },
];



function NavBar () {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 py-3  2xl:px-28 top-0 z-40 fixed bg-black w-full">
                  <nav className="flex h-9 items-center   justify-between" aria-label="Global">
                    <div className="flex py-2" aria-label="Global">
                      <a href="/" className="flex ">
                        <Image
                          className=" "
                          height={80}
                          width={120}
                          src="/jaiye.png"
                          alt=" Logo"
                        />
  
                      </a>
                    </div>
  
                    <div className="flex lg:hidden">
                      <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-18 w-10 text-[#fefefe]" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="flex justify-center my-4 px-6 ">
                      <div className="relative ">
                          <div className="text-[#353434] absolute ml-4 inset-0 m-auto w-4 h-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <circle cx={10} cy={10} r={7} />
                                  <line x1={21} y1={21} x2={15} y2={15} />
                              </svg>
                          </div>
                          <input className="bg-[#353434] focus:outline-none rounded-sm w-40  2xl:w-96 text-sm text-white  pl-10 py-2" type="text" placeholder="Search Event" />
                      </div>
                  </div>
  
                    <div className="hidden font-normal lg:flex text-lg lg:min-w-0 space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          to={item.to}
                          activeClass="active"
                          smooth
                          offset={-100}
                          duration={900}
                          className="text-white m-2 p-2"
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link href="/" className="bg-[#D20606] rounded-sm  text-white m-3 px-8 py-[5px]">Sign Up</Link>
                    </div>
                  </nav>
                  <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-[#fefefe] px-6 py-6 lg:hidden">
                      <div className="flex h-9 items-center justify-between">
                        <div className="flex">
                          <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                              className="h-16"
                              height={80}
                              width={160}
                              src="/jaiye.png"
                              alt="HOR Logo"
                            />
                          </a>
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                          <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                activeClass="active"
                                to={item.to}
                                spy
                                smooth
                                offset={-100}
                                duration={900}
                                className="-mx-3 block rounded-lg py-2 px-3 text-3xl font-medium leading-7 text-primary hover:bg-gray-400/10"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
  
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Dialog>
    </div> 
  )
}

export default NavBar



