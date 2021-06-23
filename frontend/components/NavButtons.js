import Link from 'next/link'
import { Button, Container, A } from '../styles/navButtons'

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
        nextModule ? 
          prevModule ? (
            <Button>
              <Link href={`/${parent.slug.current}/${nextModule.slug.current}`}>
                <A>Next</A>
              </Link>
            </Button>
          )
          :
          (
            <Button next>
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
