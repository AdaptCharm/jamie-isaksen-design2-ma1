import { FC, useRef, useEffect, Fragment } from 'react'

import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const title = 'Snug selling baby carriers'

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
    <Popover
      className='fixed inset-x-0 z-50 bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-80'
      style={{
        backdropFilter: 'saturate(180%) blur(5px)',
      }}
    >
      {({ open }) => (
        <>
          <div
            className='h-20 sm:h-30 focus:outline-none'
            ref={hideRef}
            tabIndex={-1}
          >
            <div className='grid h-full grid-flow-row grid-rows-none gap-5 grid-cols-navbar'>
              <div className='flex items-center justify-between h-full col-start-2 col-end-auto'>
                <div className='flex items-center justify-start'>
                  <Link href='/'>
                    <a className='ml-2'>
                      <span className='text-black dark:text-white'>
                        {title}
                      </span>
                    </a>
                  </Link>
                </div>
                <div className='flex items-center justify-start'>
                  <div className='flex items-center gap-x-2'>
                    <div className='relative'>
                      <Popover.Button
                        className='flex items-center justify-center w-10 h-10 text-black transition bg-transparent border-none rounded-lg ease-default duration-400 dark:text-white hover:p-2 hover:shadow-small focus:outline-none focus:ring-transparent'
                        ref={showRef}
                      >
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='w-6 h-6' />
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
              className='absolute inset-x-0 top-0 transition origin-center transform'
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
                  <Popover.Overlay className='fixed inset-0 min-h-screen transition-colors bg-white cursor-pointer dark:bg-black bg-opacity-90 dark:bg-opacity-80' />
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
                            {title}
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
