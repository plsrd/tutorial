import Link from 'next/link'
import { sanityClient } from '../sanity'
 
 import styles from '../styles/Sidebar.module.css'
 
 const Sidebar = ({ sections }) => {
  
  return (
    <div className={styles.sidebar}>
      {sections.map(section => (
        <Link href={`/learn/${section.slug.current}`} key={section.title}> 
          <a className={styles.sidebarTitle}>{section.title}</a>
        </Link>
      ))}
    </div>
  )
 }

 export default Sidebar