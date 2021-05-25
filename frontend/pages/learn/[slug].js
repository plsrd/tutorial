import { sanityClient, urlFor } from '../../sanity'
import { useState } from 'react'
import styles from '../../styles/Learn.module.css'

import Layout from '../../components/Layout'
import Section from  '../../components/Section'
 
 const Learn = ({ sections }) => {

   return (
     <Layout sections={sections}> 
      <Section currentSection={sections[0]} />
     </Layout>
   )
 }

 export const getServerSideProps = async pageContext => {
  const query = `*[_type == 'section']{
    title,
    description,
    slug,
    icon, 
    modules[]->
  }`
  const sections = await sanityClient.fetch(query)

  if (! sections) {
    return {
      props: {
        sections: [],
      }
    }
  } else {
    return {
      props: {
        sections,
      }
    }
  }
}

 export default Learn