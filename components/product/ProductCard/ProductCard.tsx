import { FC } from 'react'
import cn from 'classnames'
import Image from 'next/image'

import { Text } from '@components/ui'
import { X } from '@components/icons'

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

const ProductCard: FC<Props> = ({ className, product }) => {
  return (
    <div className='relative group'>
      <div className='relative w-full h-56 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80'>
        <Image
          className='object-cover object-center w-full h-full'
          placeholder='blur'
          blurDataURL={product.image.src}
          src={product.image.src}
          alt={product.image.alt}
          layout='fill'
        />
      </div>
      <h3 className='mt-4 text-sm text-gray-700'>
        <a href={product.href}>
          <span className='absolute inset-0' />
          {product.name}
        </a>
      </h3>
      <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
      <p className='mt-1 text-sm font-medium text-gray-900'>{product.price}</p>
    </div>
  )
}

export default ProductCard
