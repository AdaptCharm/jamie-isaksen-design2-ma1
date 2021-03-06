import { FC } from 'react'
import { Navbar, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
