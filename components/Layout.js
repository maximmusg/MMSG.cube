import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, title = '', description = ''}) => {
  return (
    <div>
        <Head>
            <title>{`MMSGcube - ${title}`}</title>
            <meta name='description' content={description} />
        </Head>
        <Header />
        {/* <h1>Desde layout</h1> */}
        {children}
        <Footer />
    </div>

   
  )
}
             
export default Layout