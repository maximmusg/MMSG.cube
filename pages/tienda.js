import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Tienda() {
  return (

    <Layout
        title={'Tienda'}
        description='Tienda de cubos'
    >
        <h1>Desde Tienda</h1>
        <Link href="/">Ir a Inicio</Link>
    </Layout>


   
  )
}
