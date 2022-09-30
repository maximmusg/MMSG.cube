import { useRouter } from "next/router"

export default function Producto({cubo}) {
    
    console.log(cubo[0].attributes.nombre)

  return (
    <div>[url]</div>
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
