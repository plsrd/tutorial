import Sidebar from './Sidebar'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ sections, currentSection, children }) => {

  return (
    <main> 
      <Nav />
       {currentSection ? <Sidebar sections={sections} /> : null}
       {children}
      <Footer />
    </ main>
  )
}

export default Layout
