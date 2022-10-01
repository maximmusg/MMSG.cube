import { useRouter } from "next/router"
import Image from "next/future/image"
import styles from '../../styles/cubos.module.css'
import Layout from '../../components/Layout'

export default function Producto({cubo}) {
    
    const { nombre, descripcion , imagen, precio } = cubo[0].attributes

    return (
        <Layout
            title={`${nombre}`}
        >
            <div className={styles.cubos}>
                <Image src={imagen.data.attributes.url} width={600} height={400} alt={`hola`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.texto}>{descripcion}</p>
                    <p className={styles.precio}>{precio}</p>
                </div>
            </div>
        </Layout>
  )
}

export async function getStaticPaths(){
    const respuesta = await fetch(`${process.env.API_URL}/cubos`)
    const {data} = await respuesta.json()

    const paths = data.map(cubo => ({
        params: {
            url : cubo.attributes.url
        }
    }))


    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params : {url}}){

    const respuesta = await fetch(`${process.env.API_URL}/cubos?filters[url]=${url}&?populate=imagen`)
    const {data : cubo} = await respuesta.json()
    
    
    return {
        props: {
            cubo
        }
    }
}


// export async function getServerSideProps({query : {url}}){

//     const respuesta = await fetch(`${process.env.API_URL}/cubos?filters[url]=${url}&?populate=imagen`)
//     const {data : cubo} = await respuesta.json()
    
    
//     return {
//         props: {
//             cubo
//         }
//     }
// }
