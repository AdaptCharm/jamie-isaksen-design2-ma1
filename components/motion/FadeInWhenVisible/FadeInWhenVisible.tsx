import { FC, ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

interface Props {
  children: ReactNode
}

const FadeInWhenVisible: FC<Props> = ({ children }) => {
  const animation = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    inView ? animation.start('visible') : animation.start('hidden')
  }, [animation, inView])

  return (
    <motion.div
      ref={ref}
      animate={animation}
      initial='hidden'
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInWhenVisible
