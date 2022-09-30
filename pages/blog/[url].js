import Image from "next/future/image"
import Layout from "../../components/Layout"
import { formatearFecha } from "../../utils/helpers"
import styles from '../../styles/blog.module.css'


export default function Post({post}) {
    const { titulo, contenido, imagen, publishedAt } = post[0].attributes

  return (
    <Layout
        title={titulo}
    >
        <article className={`contenedor ${styles.post} ${styles['mt-3']}`}>
            {/* <h3>{titulo}</h3> */}
            {/* <Image src={imagen.data.attributes.url} width={600} height={400} alt={`imagen blog ${titulo}`}   /> */}
        
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha} >{formatearFecha(publishedAt)}</p>
                {/* <p className={styles.descripcion}>{descripcion}</p> */}
                <p className={styles.texto}>{contenido}</p>
            </div>
        </article>
    </Layout>
  )
}

export async function getServerSideProps({query: {url}}) {
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&polulate=imagen`)
    const { data : post } = await respuesta.json()

    return {
        props : {
            post
        }
    }

}
