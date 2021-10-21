import { Layout } from '@components/common'
import Image from 'next/image'
import cn from 'classnames'

import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline'

import { Logo } from '@components/icons'

import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'

import { Element, Container, Text, Grid, Badge } from '@components/ui'

import { ProductCard } from '@components/product'

const navigation = {
  pages: [
    { name: 'Decorations', href: '#' },
    { name: 'Vases', href: '#' },
    { name: 'Pillows', href: '#' },
    { name: 'Blankets', href: '#' },
  ],
}

const decorations = [
  {
    id: 1,
    name: 'Bali stone decorations',
    color: 'Natural',
    price: '$25',
    href: '#',
    image: {
      src: '/decorations/bali-stone-decorations.png',
      alt: 'Bali stone decorations.',
    },
  },
  {
    id: 2,
    name: 'Buddha status with incense and candle',
    color: 'Natural',
    price: '$75',
    href: '#',
    image: {
      src: '/decorations/buddha-statue-with-incense-and-candle.jpg',
      alt: 'Buddha status with incense and candle.',
    },
  },
  {
    id: 3,
    name: 'Handmade macrame sign',
    color: 'Natural',
    price: '$25',
    href: '#',
    image: {
      src: '/decorations/handmade-macrame-sign.jpg',
      alt: 'Handmade macrame sign.',
    },
  },
  {
    id: 4,
    name: 'Live laugh surf sign',
    color: 'Natural',
    price: '$50',
    href: '#',
    image: {
      src: '/decorations/live-laugh-surf-sign.jpg',
      alt: 'Live laugh surf sign.',
    },
  },
]

const trendingProducts = [
  {
    id: 1,
    name: 'Green foliage with wooden vases',
    color: 'Natural',
    price: '$75',
    href: '#',
    image: {
      src: '/product/trending/green-foliage-with-wooden-vases.jpg',
      alt: 'Green foliage with wooden vases.',
    },
  },
  {
    id: 2,
    name: 'Purple foliage with ceramic vase',
    color: 'Natural',
    price: '$100',
    href: '#',
    image: {
      src: '/product/trending/purple-foliage-with-ceramic-vase.png',
      alt: 'Purple foliage with ceramic vase.',
    },
  },
  {
    id: 3,
    name: 'Clear glass vase with a wooden cup of tea',
    color: 'Natural',
    price: '$50',
    href: '#',
    image: {
      src: '/product/trending/clear-glass-vase-with-a-wooden-cup-of-tea.png',
      alt: 'Clear glass vase with a wooden cup of tea.',
    },
  },
  {
    id: 4,
    name: 'Glass vase with green leafs',
    color: 'Natural',
    price: '$25',
    href: '#',
    image: {
      src: '/product/trending/glass-vase-with-green-leafs.png',
      alt: 'Glass vase with green leafs.',
    },
  },
]

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Hero section */}
      <div className='relative'>
        {/* Decorative image and overlay */}
        <div aria-hidden='true' className='absolute inset-0 overflow-hidden'>
          <Image
            className='object-cover object-center w-full h-full'
            placeholder='blur'
            blurDataURL='/hero/hero-2.png'
            src='/hero/hero-2.png'
            alt='Hero image'
            layout='fill'
          />
        </div>

        <header className='relative z-10'>
          <nav aria-label='Top'>
            {/* Secondary navigation */}
            <div className='bg-white backdrop-blur backdrop-filter bg-opacity-10'>
              <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div>
                  <div className='flex items-center justify-between h-16'>
                    {/* Logo (lg+) */}
                    <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                      <a href='#'>
                        <span className='sr-only'>Design 2 MA1</span>
                        <Logo className='w-auto h-8 text-white' />
                      </a>
                    </div>

                    <div className='hidden h-full lg:flex'>
                      {/* Flyout menus */}
                      <Popover.Group className='inset-x-0 bottom-0 px-4'>
                        <div className='flex justify-center h-full space-x-8'>
                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className='flex items-center text-sm font-semibold text-white'
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className='flex items-center flex-1 lg:hidden'>
                      <button
                        type='button'
                        className='p-2 -ml-2 text-white'
                        onClick={() => setMobileMenuOpen(true)}
                      >
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='w-6 h-6' aria-hidden='true' />
                      </button>

                      {/* Search */}
                      <a href='#' className='p-2 ml-2 text-white'>
                        <span className='sr-only'>Search</span>
                        <SearchIcon className='w-6 h-6' aria-hidden='true' />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href='#' className='lg:hidden'>
                      <span className='sr-only'>Design 2 MA1</span>
                      <Logo className='w-auto h-8 text-white' />
                    </a>

                    <div className='flex items-center justify-end flex-1'>
                      <a
                        href='#'
                        className='hidden text-sm font-semibold text-white lg:block'
                      >
                        Sign in
                      </a>

                      <div className='flex items-center lg:ml-8'>
                        <a
                          href='#'
                          className='hidden text-sm font-semibold text-white lg:block'
                        >
                          Create an account
                        </a>

                        {/* Cart */}
                        <div className='flow-root ml-4 lg:ml-8'>
                          <a
                            href='#'
                            className='flex items-center p-2 -m-2 group'
                          >
                            <ShoppingBagIcon
                              className='flex-shrink-0 w-6 h-6 text-white'
                              aria-hidden='true'
                            />
                            <span className='ml-2 text-sm font-semibold text-white'>
                              0
                            </span>
                            <span className='sr-only'>
                              items in cart, view bag
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className='relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0'>
          <h1 className='text-4xl font-extrabold tracking-tight text-white xl:text-6xl'>
            <span className='block pb-4'>A new way to</span>
            <span className='block pb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5 filter drop-shadow-xl backdrop-filter backdrop-blur-3xl'>
              shop home decors
            </span>
          </h1>
          <p className='mt-4 text-xl text-white'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a
            href='#'
            className='inline-block px-8 py-3 mt-8 text-base font-semibold text-white bg-white border border-transparent rounded-md bg-opacity-20 hover:bg-opacity-30'
          >
            Explore
          </a>
        </div>
      </div>

      {/* Decorations section */}
      <section aria-labelledby='trending-heading'>
        <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:pt-32 lg:px-8'>
          <div className='md:flex md:items-center md:justify-between'>
            <h2
              id='favorites-heading'
              className='text-2xl font-extrabold tracking-tight text-gray-900'
            >
              Decorations
            </h2>
            <a
              href='#'
              className='hidden text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 md:block'
            >
              Shop the collection<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>

          <div className='grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
            {decorations.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>

          <div className='mt-8 text-sm md:hidden'>
            <a
              href='#'
              className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400'
            >
              Shop the collection<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Vases section */}
      <section aria-labelledby='trending-heading'>
        <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:pt-32 lg:px-8'>
          <div className='md:flex md:items-center md:justify-between'>
            <h2
              id='favorites-heading'
              className='text-2xl font-extrabold tracking-tight text-gray-900'
            >
              Vases
            </h2>
            <a
              href='#'
              className='hidden text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400 md:block'
            >
              Shop the collection<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>

          <div className='grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'>
            {trendingProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>

          <div className='mt-8 text-sm md:hidden'>
            <a
              href='#'
              className='font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-400'
            >
              Shop the collection<span aria-hidden='true'> &rarr;</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

Home.Layout = Layout
