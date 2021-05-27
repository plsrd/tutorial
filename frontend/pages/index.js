import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Tutorial</title>
        <meta name="description" content="A beginner's guide to Sanity" />
      </Head>
      <main>
        <div className={styles.headingContainer}>
          <h1 className={styles.mainHeading}>New to Sanity?</h1>
          <p className={styles.subheading}>Learn how to use the powerful unified content plaftorm here</p>
        </div>
        <div className={styles.btnContainer}>
          <Link href='/getting-started'>
            <a className={`${styles.startBtn} ${styles.btn}`}>Start Learning</a>
          </Link>
          <Link href='https://www.sanity.io/docs'>
            <a className={`${styles.docsBtn} ${styles.btn}`}>Documentation</a>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home
