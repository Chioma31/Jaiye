import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Footer from "./footer"
import { useRouter } from 'next/router';
import Link from 'next/link'
import NavBar from './navBar'


const navigation = [
  { name: 'Basic info', href: '/info', current: true },
  { name: 'Details', href: '/details', current: false },
  { name: 'Ticket', href: '/ticket', current: false },
  { name: 'Publish', href: '/publish', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CreateLayout(props) {

  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState(router.pathname);

  return (
    <>
      <div className="min-h-full">
        <NavBar />
        <Disclosure as="nav" className="border-b border-gray-200 mt-24 lg:mt-36 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-[1300px]  px-4 sm:px-6 lg:px-8">
                <div className="hidden xs:-my-px  xs:flex h-16  xs:justify-between sm:justify-start sm:gap-20 lg:gap-32 ">
                  {navigation.map((item) => (
                    <Link
                    onClick={() => {
                      setCurrentMenu(item.href);
                    }}
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        currentMenu === item.href
                          ? 'border-[#D20606] text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-[#D20606] hover:text-[#D20606]',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="hidden xs:ml-6 xs:flex xs:items-center">
                  {/* <Link
                  href='/'
                    type="button"
                    className="rounded-[4px] px-3 py-1 bg-[#D20606] text-white hover:bg-white focus:outline-none focus:ring-2 hover:border hover:text-black hover:border-[#D20606] focus:ring-offset-2"
                  >
                    Home
                  </Link> */}

                  {/* Profile dropdown */}
                  {/* <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D20606] focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                  </Menu> */}
                </div>
                <div className="-mr-2 flex items-center xs:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-900 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D20606] focus:ring-offset-2">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Link
                    onClick={() => {
                      setCurrentMenu(item.href);
                    }}
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        currentMenu === item.href
                          ? 'border-[#D20606] bg-indigo-50 text-[#D20606]'
                          : 'border-transparent text-gray-600 hover:border-[#D20606] hover:bg-gray-50 hover:text-[#D20606]',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
               
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-[55px] font-bold font-poppins poppins leading-tight tracking-tight text-gray-900">{props.title}</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{props.children}</div>
          </main>
        </div>
      </div>
    <Footer />
    </>
  )
}
