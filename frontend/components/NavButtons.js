import Link from 'next/link'

import styles from '../styles/Section.module.css'

const NavButtons = ({ parent, title }) => {
  const currentIndex= parent.modules.findIndex(module => module.title === title)
  const nextModule = parent.modules[currentIndex + 1]
  const prevModule = parent.modules[currentIndex - 1]

  return (
    <div className={styles.btnContainer}>
          {
            prevModule ? (
              <div className={`${styles.btn} ${styles.prevBtn}`}>
                <Link href={`/${parent.slug.current}/${prevModule.slug.current}`}>
                  <a>Prev</a>
                </Link>
              </div>
            )
            :
            null
          }
          {
            nextModule ? (
              <div className={`${styles.btn} ${styles.nextBtn}`}>
                <Link href={`/${parent.slug.current}/${nextModule.slug.current}`}>
                  <a>Next</a>
                </Link>
              </div>
            )
            :
            null
          }
        </div>
  )
}

export default NavButtons
