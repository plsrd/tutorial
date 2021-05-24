import Head from 'next/head'
import { sanityClient, urlFor } from '../sanity'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Nav from '../components/Nav'

const Home = ({ sections }) => {
  console.log(sections)
  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity 101</title>
        <meta name="description" content="A beginner's guide to Sanity" />
        <link rel="icon" type="image/svg+xml" href="/s.svg" />
      </Head>
      <Nav />
      <main>
        <p>main</p>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == 'section']{
    title, 
    icon, 
    slug, 
    description, 
    modules[]->{
      title
    }
  }`
  const sections = await sanityClient.fetch(query)

  if (! sections) {
    return {
      props: {
        sections: []
      }
    }
  } else {
    return {
      props: {
        sections
      }
    }
  }
}

export default Home
