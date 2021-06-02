import Link from 'next/link'
import { sanityClient } from '../sanity'
 
import styles from '../styles/Sidebar.module.css'
 
const Sidebar = ({ sections, current }) => {
  return (
    <div className={styles.sidebar}>
      {sections.map(section => (
        <Link href={`/${section.slug.current}`} key={section.title}> 
          <a className={`${styles.sidebarTitle} ${styles.current}`}>{section.title}</a>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar