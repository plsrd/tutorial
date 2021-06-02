import Link from 'next/link'
import { sanityClient } from '../sanity'
 
import styles from '../styles/Sidebar.module.css'
 
const Sidebar = ({ sections, current }) => {
  console.log(sections)
  return (
    <div className={styles.sidebar}>
      {sections.map(section => (
        <>
        <Link href={`/${section.slug.current}`} key={section.title}> 
          <a className={styles.sidebarTitle}>{section.title}</a>
        </Link>
        {current === section.title ? 
          (
            <ul>
            {section.modules.map(module => (
              <li key={module.slug.current}>{module.title}</li>
            ))}
            </ul>
          )
          
          :
          null
        }
        </>
      ))}
    </div>
  )
}

export default Sidebar