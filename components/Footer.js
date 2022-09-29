import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { useRouter } from 'next/router'

export default function Footer() {

  const router = useRouter()

  return (
   <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
            <Link href='/'>
                        <a className={ router.pathname === '/' ? styles.active : '' } > Inicio</a>
                    </Link>
                    <Link href='/nosotros'>
                        <a className={ router.pathname === '/nosotros' ? styles.active : '' }> Nosotros</a>
                    </Link>
                    <Link href='/blog'>
                        <a className={ router.pathname === '/blog' ? styles.active : '' }> Blog</a>
                    </Link>
                    <Link href='/tienda'>
                        <a className={ router.pathname === '/tienda' ? styles.active : '' }> Tienda</a>
                    </Link>
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados</p>
    </div>
    </footer>
  )
  
}
