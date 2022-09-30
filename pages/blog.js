import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Post from '../components/post'
import styles from '../styles/grid.module.css'


export default function Blog({posts}) {

  return (

    <Layout
        title={'Blog'}
        description='Blog de cubos, venta , consejos MMSGcube'
    >
      <main className='contenedor'>
        <h1 className='heading' >Blog</h1>
        <div className={styles.grid} >
          {posts?.map(post => (
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </main>
       
    </Layout>
  )
}

 export async function getStaticProps() {
   const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
   const {data: posts} = await respuesta.json()

   return {
     props: {
       posts
     }
   }
 }

 // export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/cubos?populate=imagen`)
//   const {data: cubos} = await respuesta.json()

//   return {
//     props: {
//       cubos
//     }
//   }
// }
