import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <nav>
      <Link href='https://www.sanity.io/'>
        <a><Image src='/../public/sanity.svg' height={50} width={125} /></a>
      </Link>
      <div>
        <Link href='https://www.sanity.io/docs' >
          <a className={styles.navLink}>Docs</a>
        </Link>
        <Link href='https://www.sanity.io/exchange'>
          <a className={styles.navLink}>Exchange</a>
        </Link>
      </div>
    </nav>
  )

}

export default Nav
