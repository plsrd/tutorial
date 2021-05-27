import Sidebar from './Sidebar'

const Layout = ({ children }) => {

  return (
    <main> 
       <Sidebar />
       {children}
    </ main>
  )
}

export default Layout
