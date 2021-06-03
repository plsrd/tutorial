import Link from 'next/link'
import styles from '../styles/Resources.module.css'

const Resources = ({ resources }) => {
  return (
    <div className={styles.resourceContainer}>
      <h3>Additional Resources</h3>
      <p>Checkout these resources for a deeper dive into this module's topics</p>
      {
        resources.map(resource => (
          <Link key={resource._key} href={resource.link}>
            <a>{resource.text}</a>
          </Link>
        ))
      }
    </div>
  )
}

export default Resources
