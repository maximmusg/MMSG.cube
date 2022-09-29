import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

export default function nosotros() {
  return (

    <Layout
        title={'Nosotros'}
        description='Sobre Nosotros'
    >
        <h1>Desde nosotros</h1>
        <Link href="/">Ir a Inicio</Link>
    </Layout>


   
  )
}
