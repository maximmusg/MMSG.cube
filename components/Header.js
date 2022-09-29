import React from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import styles from "../styles/Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`} >
            
              <div>
                <Link href='/'>
                    <a>
                        <Image width={400} height={100} src="/img/liogo2.svg" alt="Imagen Logo"/>
                    </a>
                  
                </Link>
              </div>
              <nav className={styles.navegacion}>
                  <Link href='/'>
                    <a > Inicio</a>
                  </Link>
                  <Link href='/nosotros'>
                    <a > Nosotros</a>
                  </Link>
                  <Link href='/blog'>
                    <a > Blog</a>
                  </Link>
                  <Link href='/tienda'>
                    <a > Tienda</a>
                  </Link>
              </nav>
            
        </div>
    </header>
  )
}
