import { Layout } from '@components/common'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeInWhenVisible } from '@components/motion'

import {
  ShieldCheckIcon,
  TruckIcon,
  SparklesIcon,
} from '@heroicons/react/outline'

import { ProductCard } from '@components/product'

const decorations = [
  {
    id: 1,
    name: 'Bali stone decorations',
    color: 'Natural',
    price: '$25',
    href: '/',
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
    href: '/',
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
    href: '/',
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
    href: '/',
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
    href: '/',
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
    href: '/',
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
    href: '/',
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
    href: '/',
    image: {
      src: '/product/trending/glass-vase-with-green-leafs.png',
      alt: 'Glass vase with green leafs.',
    },
  },
]

const incentives = [
  {
    name: 'Free shipping',
    icon: TruckIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    name: '10-year warranty',
    icon: ShieldCheckIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    name: '24/7 customer support',
    icon: SparklesIcon,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

let easing = [0.6, -0.05, 0.01, 0.99]

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Home = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      {/* Hero section */}
      <FadeInWhenVisible>
        <div className='relative'>
          {/* Decorative image and overlay */}
          <div className='flex-shrink-0 overflow-hidden' aria-hidden='true'>
            <Image
              className='object-cover object-center w-full h-full'
              placeholder='blur'
              blurDataURL='/gradients/gradient-1.png'
              src='/gradients/gradient-1.png'
              alt='Gradient 1.'
              layout='fill'
            />
          </div>

          <motion.div
            variants={fadeInUp}
            className='relative flex flex-col items-center max-w-3xl px-6 py-32 mx-auto text-center sm:py-64 lg:px-0'
          >
            <h1 className='text-4xl font-extrabold tracking-tight lg:text-6xl'>
              <span className='block text-black'>A better way to</span>
              <span className='block text-white drop-shadow'>
                shop home decor
              </span>
            </h1>
            <p className='mt-6 text-xl text-black'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href='/' passHref={true} scroll={false}>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block px-8 py-3 mt-8 text-base font-semibold text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50'
              >
                Explore
              </motion.a>
            </Link>
          </motion.div>
        </div>
      </FadeInWhenVisible>

      {/* Decorations section */}
      <FadeInWhenVisible>
        <section aria-labelledby='trending-heading'>
          <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className='md:flex md:items-center md:justify-between'
            >
              <h2
                id='favorites-heading'
                className='text-2xl font-extrabold tracking-tight text-gray-900'
              >
                Decorations
              </h2>

              <Link href='/' passHref={true} scroll={false}>
                <a className='hidden space-x-1 text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-200 hover:to-cyan-300 md:inline-flex'>
                  <span>Shop the collection</span>
                  <span aria-hidden='true'>&rarr;</span>
                </a>
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              className='grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'
            >
              {decorations.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </motion.div>

            <div className='mt-8 text-sm md:hidden'>
              <Link href='/' passHref={true} scroll={false}>
                <a className='inline-flex space-x-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-200 hover:to-cyan-300'>
                  <span>Shop the collection</span>
                  <span aria-hidden='true'> &rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Vases section */}
      <FadeInWhenVisible>
        <section aria-labelledby='trending-heading'>
          <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className='md:flex md:items-center md:justify-between'
            >
              <h2
                id='favorites-heading'
                className='text-2xl font-extrabold tracking-tight text-gray-900'
              >
                Vases
              </h2>
              <Link href='/' passHref={true} scroll={false}>
                <a className='hidden space-x-1 text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-200 hover:to-cyan-300 md:inline-flex'>
                  <span>Shop the collection</span>
                  <span aria-hidden='true'> &rarr;</span>
                </a>
              </Link>
            </motion.div>

            <motion.div
              variants={stagger}
              className='grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8'
            >
              {trendingProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </motion.div>

            <div className='mt-8 text-sm md:hidden'>
              <Link href='/' passHref={true} scroll={false}>
                <a className='inline-flex space-x-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 hover:from-teal-200 hover:to-cyan-300'>
                  <span>Shop the collection</span>
                  <span aria-hidden='true'>&rarr;</span>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Featured section */}
      <FadeInWhenVisible>
        <section aria-labelledby='comfort-heading' className=''>
          <div className='relative bg-gradient-to-r from-cyan-400 to-teal-200'>
            <div className='relative px-6 py-32 sm:py-40 sm:px-12 lg:px-16'>
              <div className='relative flex flex-col items-center max-w-3xl mx-auto text-center'>
                <h2
                  id='comfort-heading'
                  className='text-3xl font-extrabold tracking-tight text-black sm:text-4xl'
                >
                  100% Customer Satisfaction
                </h2>
                <p className='mt-3 text-xl text-black'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <Link href='/' passHref={true} scroll={false}>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='inline-flex px-8 py-3 mt-8 text-base font-medium text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50 sm:w-auto'
                  >
                    Read more
                  </motion.a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>

      {/* Features section */}
      <FadeInWhenVisible>
        <div className='bg-white'>
          <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='px-6 py-16 bg-gray-50 rounded-2xl sm:p-16'>
              <div className='max-w-xl mx-auto lg:max-w-none'>
                <div className='text-center'>
                  <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
                    We built our business on customer service
                  </h2>
                </div>
                <motion.div
                  variants={stagger}
                  className='grid max-w-sm grid-cols-1 mx-auto mt-12 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3'
                >
                  {incentives.map((incentive) => (
                    <motion.div
                      variants={fadeInUp}
                      key={incentive.name}
                      className='text-center sm:flex sm:text-left lg:block lg:text-center'
                    >
                      <span className='inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-200 to-cyan-400'>
                        <incentive.icon
                          className='w-6 h-6 text-black'
                          aria-hidden='true'
                        />
                      </span>
                      <div className='flex justify-center'>
                        {incentive.icon}
                      </div>
                      <div className='mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0'>
                        <h3 className='text-sm font-medium text-gray-900'>
                          {incentive.name}
                        </h3>
                        <p className='mt-2 text-sm text-gray-500'>
                          {incentive.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Newsletter section */}
      <FadeInWhenVisible>
        <div className='bg-white'>
          <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative px-6 py-10 overflow-hidden rounded-3xl sm:py-16 sm:px-12 lg:p-20'>
              <div className='flex-shrink-0'>
                <Image
                  className='object-cover object-center w-full h-full'
                  placeholder='blur'
                  blurDataURL='/gradients/gradient-2.png'
                  src='/gradients/gradient-2.png'
                  alt='Gradient 2.'
                  layout='fill'
                />
              </div>
              <div className='relative lg:flex lg:items-center'>
                <div className='lg:w-0 lg:flex-1'>
                  <h2 className='text-3xl font-extrabold tracking-tight text-black'>
                    Sign up for our newsletter
                  </h2>
                  <p className='max-w-3xl mt-4 text-lg text-black'>
                    Anim aute id magna aliqua ad fugiat.
                  </p>
                </div>
                <div className='mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1'>
                  <form className='sm:flex'>
                    <label htmlFor='email-address' className='sr-only'>
                      Email address
                    </label>
                    <input
                      name='email-address'
                      type='email'
                      autoComplete='new-email'
                      required
                      className='w-full px-5 py-3 text-black placeholder-gray-500 transition-colors duration-200 border-white rounded-md focus:outline-none focus:ring-0 focus:border-teal-200 focus:border-opacity-90'
                      placeholder='Enter your email'
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type='submit'
                      className='flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0'
                    >
                      Notify me
                    </motion.button>
                  </form>
                  <p className='mt-3 text-sm text-black'>
                    We care about the protection of your data. Read our{' '}
                    <Link href='/' scroll={false}>
                      <a className='font-medium text-black underline'>
                        Privacy Policy.
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </motion.div>
  )
}

export default Home

Home.Layout = Layout
