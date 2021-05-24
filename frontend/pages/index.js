import { sanityClient, urlFor } from '../sanity'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Tutorial</title>
        <meta name="description" content="A beginner's guide to Sanity" />
        <link rel="icon" type="image/svg+xml" href="/s.svg" />
      </Head>
      <Nav />
      <main>
        <div className={styles.headingContainer}>
          <h1 className={styles.mainHeading}>New to Sanity?</h1>
          <p className={styles.subheading}>Learn how to use the powerful unified content plaftorm here</p>
        </div>
      </main>
      <footer>
        <p>footer</p>
      </footer>
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
