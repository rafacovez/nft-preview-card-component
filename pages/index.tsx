import Head from 'next/head'
import Modal from '../components/Modal'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT preview app</title>
      </Head>
      <Modal/>
      <Footer/>
    </div>
  )
}
