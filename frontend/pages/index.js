import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { sanityClient } from '../sanity'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

const Home = ({ data }) => {
  const [sections, setSections] = useState(data)
  const [currentSection, setCurrentSection] = useState({})

  return (
    <div className={styles.container}>
      <Head>
        <title>Sanity Tutorial</title>
        <meta name="description" content="A beginner's guide to Sanity" />
      </Head>
      <Layout sections={sections}>
        <div className={styles.contentContainer}>
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
        </div>
      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const query = `*[_type == 'section']{
    title,
    slug,
    description,
    icon,
    modules[]->{
      title
    }
  }`
  const data = await sanityClient.fetch(query)

  return {
    props: { data }
  }
}

export default Home
