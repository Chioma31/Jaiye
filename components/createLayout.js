import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Footer from "./footer"
import { useRouter } from 'next/router';
import Link from 'next/link'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Basic info', href: '/info', current: true },
  { name: 'Details', href: '/details', current: false },
  { name: 'Ticket', href: '/ticket', current: false },
  { name: 'Publish', href: '/publish', current: false },
]
const userNavigation = [
  { name: 'Home', href: '/' },
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
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between ">
                  <div className="flex gap-8">
                    <div className="flex flex-shrink-0 items-center">
                      <Image
                        className=" "
                        height={80}
                        width={120}
                        src="/jaiye.png"
                        alt=" Logo"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex gap-6 sm:space-x-8">
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
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <Link
                    href='/'
                      type="button"
                      className="rounded-[4px] px-3 py-1 bg-[#D20606] text-white hover:bg-white focus:outline-none focus:ring-2 hover:border hover:text-black hover:border-[#D20606] focus:ring-offset-2"
                    >
                      Home
                    </Link>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#D20606] focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
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
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
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
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="rounded-[4px] px-3 py-1 mx-4 bg-[#D20606] text-white hover:bg-white focus:outline-none focus:ring-2 hover:border hover:text-black hover:border-[#D20606] focus:ring-offset-2"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">{props.title}</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{props.content}</div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
