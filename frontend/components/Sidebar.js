 import { useState } from 'react'
 
 import styles from '../styles/Sidebar.module.css'
 
 const Sidebar = ({ sections, currentSection, handleClick }) => {
  return (
    <div className={styles.sidebar}>
      {sections.map(section => (
        <div key={section.title} onClick={() => handleClick(section.title)}> 
          <p className={styles.sidebarTitle}>{section.title}</p>
          {currentSection === section.title ? 
            <ul>
              {section.modules.map(module => <li key={module.title}>{module.title}</li>)}
            </ul>
            :
            null
          }
        </div>
      ))}
    </div>
  )
 }

 export default Sidebar