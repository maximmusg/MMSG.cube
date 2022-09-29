import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Blog() {
  return (

    <Layout
        title={'Blog'}
        description='Blog de cubos, venta , consejos MMSGcube'
    >
        <h1>Desde blogs</h1>
        <Link href="/">Ir a Inicio</Link>
    </Layout>


   
  )
}
