import { Layout } from '@components/common'
import Image from 'next/image'

import { FadeInWhenVisible } from '@components/motion'

const Explore = () => {
  return [...Array(10).keys()].map((c) => (
    <FadeInWhenVisible key={c}>
      {/* Newsletter section */}
      <div className='bg-white'>
        <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8'>
          <div className='relative px-6 py-10 overflow-hidden rounded-3xl sm:py-16 sm:px-12 lg:p-20'>
            <div className='absolute inset-0'>
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
                  <button
                    type='submit'
                    className='flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0'
                  >
                    Notify me
                  </button>
                </form>
                <p className='mt-3 text-sm text-black'>
                  We care about the protection of your data. Read our{' '}
                  <a href='#' className='font-medium text-black underline'>
                    Privacy Policy.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeInWhenVisible>
  ))
}

export default Explore

Explore.Layout = Layout
