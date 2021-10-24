import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Props {
  className?: string
  product: Product
}

interface Product {
  id: number
  name: string
  href: string
  color: string
  price: string
  image: {
    src: string
    alt: string
  }
}

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

const ProductCard: FC<Props> = ({ className, product }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='relative group'
    >
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='relative w-full h-56 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80'
      >
        <Image
          className='object-cover object-center w-full h-full'
          placeholder='blur'
          blurDataURL={product.image.src}
          src={product.image.src}
          alt={product.image.alt}
          layout='fill'
        />
      </motion.div>
      <h3 className='mt-4 text-sm text-gray-700'>
        <Link href={product.href} scroll={false}>
          <a>
            <span className='absolute inset-0' />
            {product.name}
          </a>
        </Link>
      </h3>
      <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
      <p className='mt-1 text-sm font-medium text-gray-900'>{product.price}</p>
    </motion.div>
  )
}

export default ProductCard
