import Image from "next/future/image"
import Link from "next/link"
import { formatearFecha } from '../utils/helpers'
import styles from '../styles/blog.module.css'



export default function Post({post}) {

    const { contenido, imagen, titulo, url, descripcion, publishedAt} = post

  return (
    <article>
        {/* <h3>{titulo}</h3> */}
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen blog ${titulo}`}   />
    
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha} >{formatearFecha(publishedAt)}</p>
            <p className={styles.descripcion}>{descripcion}</p>
            {/* <p className={styles.resumen}>{contenido}</p> */}
            <Link href={`/blog/${url}`}>
                <a className={styles.enlace} >Leer Post</a>
            </Link>
        </div>
    </article>
  )
}
