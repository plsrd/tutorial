import Link from 'next/link'
import { Button, Container, A } from './style'

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
              <a>Prev</a>
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
                <a>Next</a>
              </Link>
            </Button>
          )
          :
          (
            <Button next>
              {console.log(`/${parent.slug.current}/${nextModule.slug.current}`)}
              <Link href={`/${parent.slug.current}/${nextModule.slug.current}`}>
                <a>Next</a>
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
