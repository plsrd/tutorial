import { sanityClient, urlFor } from '../sanity'
import { useState } from 'react'
import styled from '../styles/Learn.module.css'

import Sidebar from '../components/Sidebar'
 
 const Learn = ({ sections }) => {

   return (
     <main> 
       <Sidebar sections={sections} />
     </ main>
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

 export default Learn