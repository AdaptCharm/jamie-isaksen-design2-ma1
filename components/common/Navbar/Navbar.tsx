import { FC, useRef, useEffect, Fragment } from 'react'
import Link from 'next/link'

import { Popover, Transition } from '@headlessui/react'

import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline'

import { Logo } from '@components/icons'

const navigation = {
  title: 'Design 2 MA1',
  pages: [
    { name: 'Decorations', href: '#' },
    { name: 'Vases', href: '#' },
    { name: 'Pillows', href: '#' },
    { name: 'Blankets', href: '#' },
  ],
}

const shortcuts = [
  {
    name: 'Command center',
    key: ['ctrl', 'k'],
  },
  {
    name: 'Switch theme',
    key: ['ctrl', 't'],
  },
  {
    name: 'Shopping cart',
    key: ['ctrl', 'c'],
  },
]

const pages = [
  {
    name: 'Products',
    href: '/products',
  },
]

const Navbar: FC = () => {
  const hideRef = useRef<HTMLDivElement>(null)
  const showRef = useRef<HTMLButtonElement>(null)

  return (
    <Popover className='fixed inset-x-0 z-50 bg-white backdrop-blur backdrop-filter bg-opacity-10'>
      {({ open }) => (
        <>
          <div
            className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 focus:outline-none'
            ref={hideRef}
            tabIndex={-1}
          >
            <div>
              <div className='flex items-center justify-between h-16'>
                {/* Left nav */}
                <div className='lg:flex-1 lg:flex lg:items-center'>
                  <Link href='/'>
                    <a className='flex items-center gap-x-2'>
                      <Logo className='w-6 h-6 text-black' />
                      <span className='text-sm font-semibold text-black'>
                        {navigation.title}
                      </span>
                    </a>
                  </Link>
                </div>

                {/* Center nav */}
                <div className='hidden lg:flex lg:space-x-8'>
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className='flex items-center text-sm font-semibold text-black'
                    >
                      {page.name}
                    </a>
                  ))}
                </div>

                {/* Right nav */}
                <div className='flex justify-end flex-1'>
                  <div className='flex items-center space-x-8'>
                    <Link href='#'>
                      <a className='hidden text-sm font-semibold text-black lg:block'>
                        Sign in
                      </a>
                    </Link>

                    <Link href='#'>
                      <a className='hidden text-sm font-semibold text-black lg:block'>
                        Create an account
                      </a>
                    </Link>

                    {/* Cart */}
                    <div className='flow-root'>
                      <Link href='#'>
                        <a className='flex items-center px-3 py-1.5 -m-2 bg-black rounded-full bg-opacity-5 hover:bg-opacity-10'>
                          <ShoppingBagIcon
                            className='flex-shrink-0 w-6 h-6 text-black'
                            aria-hidden='true'
                          />
                          <span className='ml-2 text-sm font-semibold text-black'>
                            0
                          </span>
                          <span className='sr-only'>
                            items in cart, view bag
                          </span>
                        </a>
                      </Link>
                    </div>

                    {/* Mobile menu */}
                    <div className='flex items-center flex-1 lg:hidden'>
                      <Popover.Button
                        className='px-2 py-1.5 -ml-2 text-black bg-black rounded-full bg-opacity-5 hover:bg-opacity-10'
                        ref={showRef}
                      >
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='w-6 h-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition.Root show={open} as={Fragment}>
            <Popover.Panel
              focus
              static
              className='absolute inset-x-0 top-0 transition origin-center transform '
            >
              <div className='relative min-h-full p-2 sm:flex sm:items-center sm:justify-center sm:content-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-400 lg:duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-400 lg:duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Popover.Overlay className='fixed inset-0 min-h-screen transition-all bg-white cursor-pointer bg-opacity-90' />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-200 lg:duration-250'
                  enterFrom='opacity-0 -translate-1/2 scale-0'
                  enterTo='opacity-100 translate-0 scale-100'
                  leave='ease-in duration-200 lg:duration-250'
                  leaveFrom='opacity-100 translate-0 scale-100'
                  leaveTo='opacity-0 -translate-1/2 scale-0'
                >
                  <div className='relative overflow-hidden transition-all transform bg-white sm:top-60 sm:w-150 rounded-2xl shadow-1 dark:bg-gray-900'>
                    <div className='px-5 pt-5 pb-6'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                          <span className='text-black dark:text-white'>
                            {navigation.title}
                          </span>
                        </div>
                        <div className='flex items-center'>
                          <div className='relative'>
                            <Popover.Button className='flex items-center justify-center w-10 h-10 text-black transition bg-transparent border-none rounded-md ease-default duration-400 dark:text-white hover:opacity-60 hover:p-2 hover:shadow-small focus:outline-none'>
                              <span className='sr-only'>Close menu</span>
                              <XIcon className='w-6 h-6' aria-hidden='true' />
                            </Popover.Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <li className='flex items-center justify-between h-8 pl-6 text-sm text-gray-900 transition bg-black ease-default bg-opacity-5 dark:bg-black dark:bg-opacity-20 text-opacity-60 dark:text-gray-100 dark:text-opacity-60'>
                        Shortcuts
                      </li>
                      {shortcuts.map((shortcut) => (
                        <li
                          className='flex items-center justify-between h-16 p-6 text-gray-900 transition ease-default hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-20 dark:text-gray-100 dark:text-opacity-60'
                          key={shortcut.name}
                        >
                          <span>{shortcut.name}</span>
                          <div>
                            <span className='p-2 text-sm text-gray-900 bg-black rounded-lg bg-opacity-5 dark:bg-white dark:bg-opacity-5 text-opacity-60 dark:text-gray-100 dark:text-opacity-60'>
                              {shortcut.key[0]}
                            </span>
                            <span className='p-2 ml-4 text-sm text-gray-900 bg-black rounded-lg bg-opacity-5 dark:bg-white dark:bg-opacity-5 text-opacity-60 dark:text-gray-100 dark:text-opacity-60'>
                              {shortcut.key[1]}
                            </span>
                          </div>
                        </li>
                      ))}
                      <li className='flex items-center justify-between h-8 pl-6 text-sm text-gray-900 transition bg-black ease-default bg-opacity-5 dark:bg-black dark:bg-opacity-20 text-opacity-60 dark:text-gray-100 dark:text-opacity-60'>
                        Links
                      </li>
                      {pages.map((page) => (
                        <li
                          className='flex items-center justify-between h-16 pl-6 transition ease-default hover:bg-black hover:bg-opacity-5 dark:hover:bg-opacity-20'
                          key={page.name}
                        >
                          <Link href={page.href}>
                            <a className='flex items-center w-full h-full text-base font-normal text-gray-900 hover:text-opacity-60 dark:text-gray-100 dark:text-opacity-60 focus:outline-none focus:ring-transparent'>
                              <span>{page.name}</span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Popover.Panel>
          </Transition.Root>
        </>
      )}
    </Popover>
  )
}

export default Navbar

// {/* <header className='fixed z-10 w-full'>
//           <nav aria-label='Top'>
//             {/* Secondary navigation */}
//             <div className='bg-white backdrop-blur backdrop-filter bg-opacity-10'>
//               <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
//                 <div>
//                   <div className='flex items-center justify-between h-16'>
//                     {/* Logo (lg+) */}
//                     <div className='hidden lg:flex-1 lg:flex lg:items-center'>
//                       <Link href='/'>
//                         <a className='flex items-center gap-x-2'>
//                           <Logo className='w-6 h-6 text-black' />
//                           <span className='text-sm font-semibold text-black'>
//                             Design 2 MA1
//                           </span>
//                         </a>
//                       </Link>
//                     </div>

//                     <div className='hidden h-full lg:flex'>
//                       {/* Flyout menus */}
//                       <Popover.Group className='inset-x-0 bottom-0 px-4'>
//                         <div className='flex justify-center h-full space-x-8'>
//                           {navigation.pages.map((page) => (
//                             <a
//                               key={page.name}
//                               href={page.href}
//                               className='flex items-center text-sm font-semibold text-black'
//                             >
//                               {page.name}
//                             </a>
//                           ))}
//                         </div>
//                       </Popover.Group>
//                     </div>

//                     {/* Mobile menu and search (lg-) */}
//                     <div className='flex items-center flex-1 lg:hidden'>
//                       <button
//                         type='button'
//                         className='p-2 -ml-2 text-black'
//                         onClick={() => setMobileMenuOpen(true)}
//                       >
//                         <span className='sr-only'>Open menu</span>
//                         <MenuIcon className='w-6 h-6' aria-hidden='true' />
//                       </button>

//                       {/* Search */}
//                       <a href='#' className='p-2 ml-2 text-black'>
//                         <span className='sr-only'>Search</span>
//                         <SearchIcon className='w-6 h-6' aria-hidden='true' />
//                       </a>
//                     </div>

//                     {/* Logo (lg-) */}
//                     <a href='#' className='lg:hidden'>
//                       <span className='sr-only'>Design 2 MA1</span>
//                       <Logo className='w-auto h-8 text-black' />
//                     </a>

//                     <div className='flex items-center justify-end flex-1'>
//                       <a
//                         href='#'
//                         className='hidden text-sm font-semibold text-black lg:block'
//                       >
//                         Sign in
//                       </a>

//                       <div className='flex items-center lg:ml-8'>
//                         <a
//                           href='#'
//                           className='hidden text-sm font-semibold text-black lg:block'
//                         >
//                           Create an account
//                         </a>

//                         {/* Cart */}
//                         <div className='flow-root ml-4 lg:ml-8'>
//                           <a
//                             href='#'
//                             className='flex items-center p-2 -m-2 group'
//                           >
//                             <ShoppingBagIcon
//                               className='flex-shrink-0 w-6 h-6 text-black'
//                               aria-hidden='true'
//                             />
//                             <span className='ml-2 text-sm font-semibold text-black'>
//                               0
//                             </span>
//                             <span className='sr-only'>
//                               items in cart, view bag
//                             </span>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         </header> */}
