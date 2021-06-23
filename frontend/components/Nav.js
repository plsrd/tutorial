import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const A = styled.a`
  font-size: 1.2rem;
  font-weight: medium;
  margin: 1rem; 
`

const Nav = () => {
  return (
    <nav>
      <Link href='/'>
        <a><Image src='/sanity.svg' height={50} width={125} /></a>
      </Link>
      <div>
        <Link href='https://www.sanity.io/docs' >
          <A>Docs</A>
        </Link>
        <Link href='https://www.sanity.io/exchange'>
          <A>Exchange</A>
        </Link>
      </div>
    </nav>
  )

}

export default Nav
