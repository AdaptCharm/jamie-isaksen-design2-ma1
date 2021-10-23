import { FC } from 'react'

const Footer: FC = () => {
  return (
    <footer
      className='bg-white border-t border-gray-100'
      aria-labelledby='footer-heading'
    >
      <h2 className='sr-only' id='footer-heading'>
        Footer
      </h2>

      <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='py-10 text-center'>
          <p className='text-sm text-gray-500'>
            &copy; 2021 Jamie Isaksen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
