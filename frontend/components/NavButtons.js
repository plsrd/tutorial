import Link from 'next/link'

import styles from '../styles/Section.module.css'

import styled from 'styled-components'

const Button = styled.div`
  text-align: center;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 1rem 3rem;
  border-radius: 5px;
  background-color: #1e63d0;
  cursor: pointer;
`

const Container = styled.div`
  margin: 6rem 0 3rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const A = styled.a`
  color: #fff;
`

const NavButtons = ({ parent, title }) => {
  const currentIndex= parent.modules.findIndex(module => module.title === title)
  const nextModule = parent.modules[currentIndex + 1]
  const prevModule = parent.modules[currentIndex - 1]

  return (
    <Container>
      {
        prevModule ? (
          <Button>
            <Link href={`/${parent.slug.current}/${prevModule.slug.current}`}>
              <A>Prev</A>
            </Link>
          </Button>
        )
        :
        null
      }
      {
        nextModule ? (
          <Button>
            <Link href={`/${parent.slug.current}/${nextModule.slug.current}`}>
              <A>Next</A>
            </Link>
          </Button>
        )
        :
        null
      }
    </Container>
  )
}

export default NavButtons
