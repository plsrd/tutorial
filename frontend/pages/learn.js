import { sanityClient, urlFor } from '../sanity'
import { useState } from 'react'
import styles from '../styles/Learn.module.css'

import Sidebar from '../components/Sidebar'
 
 const Learn = ({ sections }) => {
   const [currentSection, setCurrentSection] = useState(sections[0])

   const handleClick = (newSection) => {
     const section = sections.find(section => section.title === newSection)
     setCurrentSection(section)
   }

   return (
     <main> 
       <Sidebar 
        sections={sections} 
        currentSection={currentSection.title}
        handleClick={handleClick}
      />
       {/* <Section currentSection={currentSection} /> */}
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