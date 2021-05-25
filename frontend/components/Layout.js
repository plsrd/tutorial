import Sidebar from './Sidebar'

const Layout = ({ children, sections}) => {

  return (
    <main> 
       <Sidebar sections={sections} />
       {children}

    </ main>
  )
}

export default Layout
