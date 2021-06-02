import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.platformContainer}>
          <p className={styles.footerHeader}>Sanity</p>
          <Link href='https://www.sanity.io/'>
            <a className={styles.footerLink}>Platform</a>
          </Link>
          <Link href='https://www.sanity.io/docs'>
            <a className={styles.footerLink}>Documentation</a>
          </Link>
          <Link href='https://www.sanity.io/exchange'>
            <a className={styles.footerLink}>Exchange</a>
          </Link>
        </div>
        <div className={styles.platformContainer}>
          <p className={styles.footerHeader}>Tutorial</p>
          <Link href='/getting-started'>
            <a className={styles.footerLink}>Sections</a>
          </Link>
          <Link href='https://github.com/rlpennell/tutorial'>
            <a className={styles.footerLink}>Github</a>
          </Link>
        </div>
      </div>
      <div className={styles.slackContainer}>
        <p className={styles.footerHeader}>Have questions?</p>
        <p className={styles.footerDescription}>Get help in the Sanity Slack community!</p>
        <Link href='https://slack.sanity.io/'>
          <a><Image src='/slack.svg' width={30} height={30}/></a>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
