import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity 101</title>
        <meta name="description" content="A beginner's guide to Sanity" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>nav</nav>

      <main>
        <p>main</p>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}
