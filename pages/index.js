import Layout from "../components/Layout"
import Link from "next/link"

export default function Home() {
  return (
    <Layout
      title={'Inicio'}
      description='Pagina web de venta de Cubos'
    >
      <h1>Desde inicio</h1>
      <Link href="nosotros">Nosotros</Link>
    </Layout>
  )
}
