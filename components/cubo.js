import Image from "next/future/image"
import Link from "next/link"
import styles from '../styles/cubos.module.css'


export default function Cubo({cubo}) {

  const {descripcion, imagen, nombre, precio, url} = cubo
  console.log(cubo)
  return (
    <div className={styles.cubos}>
      <Image src={imagen.data.attributes.url} width={200} height={200} alt={`Imagen Cubo ${nombre}`}/>
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio} >${precio}</p>
        <Link href={`/cubos/${url}`} >
          <a className={styles.enlace}>
            Ver Producto
          </a>
        </Link>
      </div>

    </div>
  )
}
