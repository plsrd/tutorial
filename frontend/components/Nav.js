import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Nav = () => {
  return (
    <nav>
      <Link href='https://www.sanity.io/'>
        <a><Image src='/../public/sanity.svg' height={30} width={100} /></a>
      </Link>
    </nav>
  )

}

export default Nav
