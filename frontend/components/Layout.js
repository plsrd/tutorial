import React, { useEffect, useState } from 'react'
import { sanityClient } from '../sanity'

import {
  ThemeProvider,
  studioTheme
} from '@sanity/ui'

import Sidebar from './Sidebar/Sidebar'
import Nav from './Nav'
import Footer from './Footer/Footer'


const Layout = ({ children, current }) => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    const query = `*[_type == 'orderSections']{
      order[]->{
        title,
        slug,
        modules[]->{
          title,
          slug
        }
      }
    }`

    sanityClient.fetch(query)
    .then(data => setSections(data[0].order))
    .catch(console.error)
  }, [])

  return (
    <>
      <Nav />
      <main> 
        <ThemeProvider theme={studioTheme}>
        {current ? 
        <Sidebar 
          sections={sections}
          current={current}
        />
        :
        null
      }
       {children}
        </ThemeProvider>
       </ main>
      <Footer />
    </>
  )
}

export default Layout
