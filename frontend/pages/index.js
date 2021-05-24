import { sanityClient, urlFor } from '../sanity'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

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
          <Link href='/learn'>
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

// export const getServerSideProps = async () => {
//   const query = `*[_type == 'section']{
//     title, 
//     icon, 
//     slug, 
//     description, 
//     modules[]->{
//       title
//     }
//   }`
//   const sections = await sanityClient.fetch(query)

//   if (! sections) {
//     return {
//       props: {
//         sections: []
//       }
//     }
//   } else {
//     return {
//       props: {
//         sections
//       }
//     }
//   }
// }

export default Home
