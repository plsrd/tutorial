 import { useState } from 'react'
 
 import styled from '../styles/Sidebar.module.css'
 
 const Sidebar = ({ sections }) => {
  return (
    <div className={styled.sidebar}>
      {sections.map(section => (
        <div key={section.title}> 
          <p className={styled.sidebarTitle}>{section.title}</p>
          <ul>
            {section.modules.map(module => (
              <li key={module.title}>{module.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
 }

 export default Sidebar