import { useEffect, useState } from 'react'
import { sanityClient } from '../sanity'

import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({ children }) => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    const query = `*[_type == 'section']{
      title,
      slug,
      modules[]->{
        title,
        slug
      }
    }`

    sanityClient.fetch(query)
    .then(data => setSections(data))
    .catch(console.error)
  }, [])

  return (
    <main> 
      <Nav />
       <Sidebar sections={sections} /> 
       {children}
      <Footer />
    </ main>
  )
}

export default Layout
